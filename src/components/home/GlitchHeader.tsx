interface GlitchHeaderProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function GlitchHeader(props: GlitchHeaderProps): JSX.Element {
  const { text, className = '', size = 'lg' } = props;
  1;
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-6xl md:text-8xl'
  };

  return (
    <div className="flex items-end justify-between border-b border-green-dim pb-4 mb-8">
      <div className={`font-tech font-bold uppercase tracking-widest text-green ${sizeClasses[size]} ${className}`}>
        <span className="glitch-wrapper" data-text={text}>
          {text}
        </span>
      </div>
    </div>
  );
}

export default GlitchHeader;
