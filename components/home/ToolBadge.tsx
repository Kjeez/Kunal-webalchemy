import type { CSSProperties } from 'react';
import type { Tool } from './data';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string>;

/** Figma's five-shape mark, drawn rather than lettered. */
const FigmaMark = () => (
  <svg viewBox="0 0 38 57" width="42%" height="62%" aria-hidden="true">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
  </svg>
);

/**
 * Rounded app-icon style tile for a design tool / CMS / framework. Purely
 * presentational: the name is exposed as a tooltip and to screen readers
 * unless `decorative`.
 */
export default function ToolBadge({ tool, size, decorative = false }: { tool: Tool; size?: number; decorative?: boolean }) {
  const [name, short, ink, bg] = tool;
  const style: Vars = { '--ti': ink, '--tb': bg };
  if (size) style['--ts'] = `${size}px`; // otherwise CSS decides (44px, or fluid in the toolbox world)
  return (
    <span className={s.tool} style={style} data-name={name} title={decorative ? undefined : name} aria-hidden={decorative || undefined}>
      {name === 'Figma' ? <FigmaMark /> : <span aria-hidden="true">{short}</span>}
      {!decorative && <span className={s.srOnly}>{name}</span>}
    </span>
  );
}
