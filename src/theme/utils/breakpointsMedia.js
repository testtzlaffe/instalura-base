/* eslint-disable comma-dangle */
import { css } from 'styled-components';
import { breakpoints } from '../breakpoints';

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  const cssResult = breakpointsNames.map(
    (breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  );

  const cssResultWithoutComma = cssResult.join('').replace(/,/g, '');

  return cssResultWithoutComma;
}
