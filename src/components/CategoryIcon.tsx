import React from "react";

interface CategoryIconProps {
  icon: string;
  color: string;
  size?: number;
}

export function CategoryIcon({ icon, color, size = 48 }: CategoryIconProps) {
  const iconMap: Record<string, React.ReactElement> = {
    java: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <text x="4" y="32" fontSize="24" fontWeight="bold" fill={color}>
          J
        </text>
        <text x="16" y="32" fontSize="20" fontWeight="bold" fill={color}>
          ava
        </text>
      </svg>
    ),
    patterns: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="28" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="8" y="28" width="12" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="28" y="28" width="12" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <line x1="20" y1="14" x2="28" y2="14" stroke={color} strokeWidth="2" />
        <line x1="14" y1="20" x2="14" y2="28" stroke={color} strokeWidth="2" />
        <line x1="34" y1="20" x2="34" y2="28" stroke={color} strokeWidth="2" />
        <line x1="20" y1="34" x2="28" y2="34" stroke={color} strokeWidth="2" />
      </svg>
    ),
    react: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="4" fill={color} />
        <ellipse cx="24" cy="24" rx="18" ry="7" stroke={color} strokeWidth="2" fill="none" />
        <ellipse
          cx="24"
          cy="24"
          rx="18"
          ry="7"
          stroke={color}
          strokeWidth="2"
          fill="none"
          transform="rotate(60 24 24)"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="18"
          ry="7"
          stroke={color}
          strokeWidth="2"
          fill="none"
          transform="rotate(120 24 24)"
        />
      </svg>
    ),
    sql: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="12" rx="14" ry="5" stroke={color} strokeWidth="2" fill="none" />
        <path d="M10 12v24c0 2.76 6.27 5 14 5s14-2.24 14-5V12" stroke={color} strokeWidth="2" fill="none" />
        <ellipse cx="24" cy="24" rx="14" ry="5" stroke={color} strokeWidth="2" fill="none" />
      </svg>
    ),
    nosql: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <path d="M12 8h24l-4 32H16L12 8z" stroke={color} strokeWidth="2" fill="none" />
        <path d="M14 16h20" stroke={color} strokeWidth="2" />
        <path d="M15 24h18" stroke={color} strokeWidth="2" />
        <path d="M16 32h16" stroke={color} strokeWidth="2" />
        <circle cx="20" cy="20" r="2" fill={color} />
        <circle cx="28" cy="28" r="2" fill={color} />
      </svg>
    ),
    spring: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <path
          d="M36 12c-8 0-12 8-12 12s4 12 12 12"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 36c8 0 12-8 12-12s-4-12-12-12"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3" fill={color} />
      </svg>
    ),
    microservices: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="10" r="6" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="10" cy="34" r="6" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="38" cy="34" r="6" stroke={color} strokeWidth="2" fill="none" />
        <line x1="24" y1="16" x2="12" y2="28" stroke={color} strokeWidth="2" />
        <line x1="24" y1="16" x2="36" y2="28" stroke={color} strokeWidth="2" />
        <line x1="16" y1="34" x2="32" y2="34" stroke={color} strokeWidth="2" />
      </svg>
    ),
    system: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="16" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="26" y="6" width="16" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="16" y="30" width="16" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <line x1="14" y1="18" x2="14" y2="24" stroke={color} strokeWidth="2" />
        <line x1="34" y1="18" x2="34" y2="24" stroke={color} strokeWidth="2" />
        <line x1="14" y1="24" x2="34" y2="24" stroke={color} strokeWidth="2" />
        <line x1="24" y1="24" x2="24" y2="30" stroke={color} strokeWidth="2" />
      </svg>
    ),
    events: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle cx="10" cy="24" r="4" fill={color} />
        <circle cx="24" cy="12" r="4" fill={color} />
        <circle cx="24" cy="36" r="4" fill={color} />
        <circle cx="38" cy="24" r="4" fill={color} />
        <line x1="14" y1="24" x2="20" y2="14" stroke={color} strokeWidth="2" />
        <line x1="14" y1="24" x2="20" y2="34" stroke={color} strokeWidth="2" />
        <line x1="28" y1="14" x2="34" y2="24" stroke={color} strokeWidth="2" />
        <line x1="28" y1="34" x2="34" y2="24" stroke={color} strokeWidth="2" />
        <line x1="24" y1="16" x2="24" y2="32" stroke={color} strokeWidth="2" />
      </svg>
    ),
  };

  return iconMap[icon] || <div style={{ width: size, height: size, backgroundColor: color, borderRadius: 8 }} />;
}
