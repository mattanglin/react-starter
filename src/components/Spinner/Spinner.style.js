import { keyframes } from '@emotion/core';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default {
  width: 24,
  height: 24,
  margin: 15,
  animation: `${spin} 2s linear infinite`,
  position: 'relative',

  '& .dot': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'DodgerBlue',
    transform: 'translate(-3px, -3px)',
    position: 'absolute',

    '&:nth-of-type(1)': {
      left: 0,
      top: 0,
    },
    '&:nth-of-type(2)': {
      left: '100%',
      top: 0,
    },
    '&:nth-of-type(3)': {
      left: '100%',
      top: '100%',
    },
    '&:nth-of-type(4)': {
      left: 0,
      top: '100%',
    },
  },
};
