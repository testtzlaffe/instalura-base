import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import get from "lodash/get";
import { propToStyle } from "../../../theme/utils/propToStyle";

const TextBase = styled.span`
  ${(props) => {
    return get(props.theme.typographyVariants, props.variant);
  }}

  ${propToStyle("textAlign")}
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
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
