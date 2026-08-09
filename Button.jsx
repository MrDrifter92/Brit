import React from 'react';

const PAD = { sm: '9px 20px', md: '13px 30px', lg: '17px 44px' };
const FS = { sm: 12, md: 13, lg: 15 };

export function Button({ children, variant = 'primary', size = 'md', disabled = false, as = 'button', href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : as;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)',
    padding: PAD[size], border: '1px solid transparent', borderRadius: 'var(--radius-sm)',
    font: 'var(--weight-regular) ' + FS[size] + 'px/1 var(--font-body)',
    letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.42 : 1,
    transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard)',
    transform: press && !disabled ? 'translateY(1px)' : 'none', whiteSpace: 'nowrap',
  };
  const skins = {
    primary: { background: hover && !disabled ? 'var(--bark-800)' : 'var(--bark-700)', color: 'var(--paper-100)', borderColor: 'transparent' },
    secondary: { background: hover && !disabled ? 'color-mix(in srgb, var(--bark-700) 8%, transparent)' : 'transparent', color: 'var(--bark-700)', borderColor: 'var(--rule-strong)' },
    accent: { background: hover && !disabled ? 'color-mix(in srgb, var(--accent, var(--wine-700)) 88%, black)' : 'var(--accent, var(--wine-700))', color: 'var(--accent-on, var(--paper-100))', borderColor: 'transparent' },
    ghost: { background: 'transparent', color: hover && !disabled ? 'var(--ink-900)' : 'var(--ink-600)', borderColor: 'transparent', textDecoration: hover ? 'none' : 'none', borderBottom: '1px solid ' + (hover && !disabled ? 'var(--rule-strong)' : 'var(--rule-hairline)'), borderRadius: 0, padding: PAD[size].split(' ')[0] + ' 0' },
  };
  return (
    <Tag {...rest} href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...skins[variant], ...style }}>{children}</Tag>
  );
}
