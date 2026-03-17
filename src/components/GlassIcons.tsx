import './GlassIcons.css';
import { ReactNode } from 'react';

interface GlassIconItem {
  icon: ReactNode;
  color: string;
  label: string;
  customClass?: string;
  onClick?: () => void;
}

interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  primary: 'linear-gradient(hsl(40, 76%, 50%), hsl(45, 90%, 55%))',
  secondary: 'linear-gradient(hsl(160, 40%, 45%), hsl(170, 60%, 55%))',
  accent: 'linear-gradient(hsl(8, 70%, 52%), hsl(25, 80%, 55%))',
};

const GlassIcons = ({ items, className }: GlassIconsProps) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`icon-btn ${item.customClass || ''}`}
          aria-label={item.label}
          type="button"
          onClick={item.onClick}
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
