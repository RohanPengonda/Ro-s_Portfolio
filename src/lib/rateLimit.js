const buckets = new Map();

const getClientIp = (request) => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
};

const pruneExpired = (now) => {
  if (buckets.size < 5000) return;
  for (const [key, entry] of buckets) {
    if (now > entry.reset) buckets.delete(key);
  }
};

export const rateLimit = (request, { key, limit, windowMs }) => {
  const now = Date.now();
  pruneExpired(now);

  const id = `${key}:${getClientIp(request)}`;
  const entry = buckets.get(id);

  if (!entry || now > entry.reset) {
    buckets.set(id, { count: 1, reset: now + windowMs });
    return { ok: true };
  }

  entry.count += 1;

  if (entry.count > limit) {
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((entry.reset - now) / 1000)),
    };
  }

  return { ok: true };
};
