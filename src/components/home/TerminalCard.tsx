interface TerminalCardProps {
  title: string;
  children: React.ReactNode;
  footer?: string;
}

function TerminalCard(props: TerminalCardProps): JSX.Element {
  const { title, children, footer } = props;

  return (
    <div
      className={`relative group bg-dark bg-opacity-80 backdrop-blur-sm border border-green-dim p-1 transition-all duration-300 border-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]`}>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green opacity-70"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green opacity-70"></div>

      {/* Header Bar */}
      <div className="flex items-center justify-between bg-black/50 px-3 py-2 border-b border-green-dim mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <span className="font-mono text-xs text-green-dim uppercase tracking-wider">{title}</span>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-2 text-gray-300 font-mono">{children}</div>

      {/* Footer Meta */}
      {footer && (
        <div className="px-4 py-2 border-t border-green-dim/30 text-xs font-mono text-green-dim flex justify-end">
          {footer}
        </div>
      )}
    </div>
  );
}

export default TerminalCard;
