// Small line icons drawn on a 24px grid. Colour follows the text colour.
const paths = {
  chevron: <path d="M9 6l6 6-6 6" />,
  back: <path d="M15 6l-6 6 6 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1.2 11.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 8z" />
      <path d="M9 10V7a3 3 0 016 0v3" />
    </>
  ),
  send: <path d="M4 12l16-8-6 16-2.5-6.5L4 12z" />,
  truck: (
    <>
      <path d="M3 6.5h11v9H3zM14 9.5h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  chat: <path d="M4 18.5l1.4-4.1A7.5 7.5 0 1111.9 19.5a7.6 7.6 0 01-3.6-.9L4 18.5z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.5V5a1.5 1.5 0 011.5-1.5h7.5l8 8a1.5 1.5 0 010 2.1l-6.4 6.4a1.5 1.5 0 01-2.1 0l-8.5-7.5z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
};

export default function Icon({ name, size = 20, stroke = 1.75, className = "", title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
