import React from 'react';
import Styles from '../assets/styles/components/Icon.module.scss';

type iconTypes = {
  src: string;
  alt: string;
  size?: string | number;
  color?: string;
};

const Icon = (props: iconTypes) => {
  const { src, size = 60, alt, color = 'black' } = props;
  const isSVG = src.includes('svg');

  return (
    <span
      data-icon
      className={Styles.iconContainer}
      style={
        {
          '--icon-src': isSVG && `url(${src})`,
          '--icon-color': `var(--${color})`,
          '--icon-size': `${size}px`,
        } as React.CSSProperties
      }
    >
      {!isSVG && <img src={src} alt={alt} width={size} height={size} />}
    </span>
  );
};

export default Icon;
