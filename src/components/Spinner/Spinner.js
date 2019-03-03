import React from 'react';
import style from './Spinner.style';

const Spinner = () => (
  <div css={style}>
    <div className="dot" />
    <div className="dot" />
    <div className="dot" />
    <div className="dot" />
  </div>
);

export default Spinner;
