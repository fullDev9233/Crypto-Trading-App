import styled from 'styled-components';
import { space, typography as baseTypography, border, color as baseColor } from 'styled-system';
import { TextProps } from './types';
import typography from '../../../styles/typography';

const Text = styled.div<TextProps>`
  font-style: ${({ font }) => typography[font]?.fontStyle || 'normal'};
  font-size: ${({ font }) => typography[font]?.fontSize};
  font-weight: ${({ font }) => typography[font]?.fontWeight};
  line-height: ${({ font }) => typography[font]?.lineHeight};
  color: ${({ color }) => color};
  letter-spacing: ${({ font }) => typography[font]?.letterSpacing || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  text-decoration: ${({ font }) => typography[font]?.textDecoration || 'auto'};
  text-transform: ${({ font }) => typography[font]?.textTransform || 'inherit'};
  word-break: ${({ breakWords }) => breakWords && 'break-word'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${space}
  ${baseTypography}
  ${border}
  ${baseColor}
`;

Text.defaultProps = {
  color: 'textPrimary',
  font: 'body1Regular',
};

export default Text;
