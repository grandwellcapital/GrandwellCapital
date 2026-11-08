// Simple inline SVG icons (no emoji or special characters, so nothing renders as an empty box).
const paths: Record<string, string> = {
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0',
  layers: 'M12 3 2 8l10 5 10-5z M2 13l10 5 10-5',
  check: 'M5 12l5 5L20 7',
  wallet: 'M3 7h18v12H3z M3 7l3-3h12l3 3 M16 13h2',
  cycle: 'M20 11a8 8 0 0 0-14-5L4 8 M4 4v4h4 M4 13a8 8 0 0 0 14 5l2-2 M20 20v-4h-4',
  swap: 'M7 7h13l-3-3 M17 17H4l3 3',
  doc: 'M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h6',
  gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z',
  merge: 'M6 3v6a6 6 0 0 0 6 6h6 M15 12l3 3-3 3 M6 21v-4',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z M9 12l2 2 4-4',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2',
  edit: 'M4 20h4L19 9l-4-4L4 16z M14 6l4 4',
  headset: 'M4 14v-2a8 8 0 0 1 16 0v2 M4 14h3v6H4z M17 14h3v6h-3z',
  chart: 'M4 20V10 M10 20V4 M16 20v-7 M3 20h18',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
};

export function Icon({ name, size = 20 }: { name: keyof typeof paths | string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}>
    {(paths[name] || '').split(' M').map((d, i) => <path key={i} d={i ? 'M' + d : d} />)}
  </svg>;
}
