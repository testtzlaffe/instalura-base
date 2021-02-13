import styled, { css } from "styled-components";
import get from "lodash/get";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

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

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${({ ghost }) => {
    return ghost ? ButtonGhost : ButtonDefault;
  }}

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
`;
