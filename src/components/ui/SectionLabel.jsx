const SectionLabel = ({ command, output, children }) => {
  return (
    <div className="mb-3">
      <div className="flex items-center font-mono text-sm text-od-comment dark:text-gray-500 sm:text-base">
        <span className="mr-2 select-none text-od-green dark:text-od-cyan">
          <span className="mr-1 text-gray-400 dark:text-gray-600">$</span>
          {command}
        </span>
        {children && (
          <span className="text-gray-400 dark:text-gray-400">{children}</span>
        )}
      </div>
      {output && (
        <p className="mt-1.5 truncate font-mono text-xs text-mac-text-secondary/70 dark:text-gray-600 sm:text-sm">
          {output}
        </p>
      )}
    </div>
  );
};

export default SectionLabel;