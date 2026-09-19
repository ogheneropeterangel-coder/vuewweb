/**
 * VUEW — icon set.
 * Small, stroke-based line icons drawn on a 16×16 grid.
 * All icons are decorative by default (`aria-hidden`).
 */

function Svg({ children, size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg {...props}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </Svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75" />
    </Svg>
  );
}

export function ArrowLeft(props) {
  return (
    <Svg {...props}>
      <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
    </Svg>
  );
}

export function ArrowDown(props) {
  return (
    <Svg {...props}>
      <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
    </Svg>
  );
}

export function Close(props) {
  return (
    <Svg {...props}>
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </Svg>
  );
}

export function Menu(props) {
  return (
    <Svg {...props}>
      <path d="M2 4.5h12M2 8h12M2 11.5h12" />
    </Svg>
  );
}

export function Mail(props) {
  return (
    <Svg {...props}>
      <rect x="1.75" y="3.5" width="12.5" height="9" rx="1.5" />
      <path d="m2.5 5 5.5 4 5.5-4" />
    </Svg>
  );
}

export function Grid(props) {
  return (
    <Svg {...props}>
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </Svg>
  );
}

export function Layers(props) {
  return (
    <Svg {...props}>
      <path d="M8 2 2 5.25 8 8.5l6-3.25L8 2Z" />
      <path d="m2 10.75 6 3.25 6-3.25" />
      <path d="m2 8 6 3.25L14 8" />
    </Svg>
  );
}

export function Compass(props) {
  return (
    <Svg {...props}>
      <circle cx="8" cy="8" r="6" />
      <path d="m10 6-1.25 3.75L5 11l1.25-3.5L10 6Z" />
    </Svg>
  );
}
