import React from 'react';

export function Logomark({ size = 96, src = 'assets/logo-roundel.png', alt = 'Britanical Blends', style, ...rest }) {
  return (
    <img {...rest} src={src} alt={alt} width={size} height={size}
      style={{ display: 'block', width: size, height: size, borderRadius: 'var(--radius-round)', objectFit: 'cover', ...style }} />
  );
}
