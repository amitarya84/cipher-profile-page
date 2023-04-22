import * as React from 'react';

export interface IHRLProps {
}

const style = {
    width: '94%',
    height: '1px',
    background: 'var(--border-color)',
    display: 'block',
    margin: 'auto'
}

export function HRL (props: IHRLProps) {
  return (
    <span style={style}></span>
  );
}
