import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${(props) => get(props.theme.typographyVariants, props.variant)}

  ${propToStyle('textAlign')}
`;

// eslint-disable-next-line object-curly-newline
export default function Text({ tag, variant, children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
