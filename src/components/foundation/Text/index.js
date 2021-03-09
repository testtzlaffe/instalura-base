import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Link } from '../../commons/Link';

const TextBase = styled.span`
  ${(props) => get(props.theme.typographyVariants, props.variant)}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)}

  ${propToStyle('textAlign')}
`;

// eslint-disable-next-line object-curly-newline
export default function Text({ tag, variant, children, href, ...props }) {
  if (href) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase as={Link} href={href} variant={variant} {...props}>
        {children}
      </TextBase>
    );
  }

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
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: null,
};
