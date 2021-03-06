import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Link } from '../Link';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${({ theme }) =>
    breakpointsMedia({
      xs: theme.typographyVariants.smallestException,
      md: theme.typographyVariants.paragraph1,
    })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    // eslint-disable-next-line operator-linebreak
    fullWidth &&
    css`
      width: 100%;
    `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};
