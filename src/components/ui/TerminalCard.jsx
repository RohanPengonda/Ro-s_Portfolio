const TerminalCard = ({
  filename,
  children,
  className = '',
  bodyClassName = '',
}) => {
  return (
    <div
      className={`glass glass-hover overflow-hidden rounded-2xl shadow-mac-lg dark:shadow-2xl ${className}`}
    >
      {/* macOS title bar */}
      <div className="flex items-center gap-1.5 border-b border-mac-border bg-mac-bg/70 px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
        <span className="dot h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]"></span>
        <span className="dot h-3 w-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]"></span>
        <span className="dot h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]"></span>
        {filename && (
          <span className="ml-3 flex-1 truncate text-center font-mono text-xs text-mac-text-secondary dark:text-gray-400">
            {filename}
          </span>
        )}
        <span className="w-10" />
      </div>

      {/* Body */}
      <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default TerminalCard;