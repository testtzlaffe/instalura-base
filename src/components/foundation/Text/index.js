import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import get from "lodash/get";

const TextBase = styled.span`
  ${(props) => {
    const { fontSize, fontWeight, lineHeight } = get(
      props.theme.typographyVariants,
      props.variant
    );

    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
    `;
  }}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
