import { css } from 'styled-components';
import { theme } from 'data';

export const media = Object.keys(theme.sizes).reduce((accumulator, label) => {
    const emSize = theme.sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
    return accumulator
}, {});

export const mediaLandscape = Object.keys(theme.sizes).reduce((accumulator, label) => {
    const emSize = theme.sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) and (orientation: landscape) {
      ${css(...args)}
    }
  `;
    return accumulator
}, {});

export const rem = (num) => {
    const stripUnit = parseInt(num, 10);
    return `${stripUnit / 16}rem`
};

export const  wordForm = (num,word) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return word[ (num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5] ];
};
