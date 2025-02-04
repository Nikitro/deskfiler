import styled from 'styled-components';

export const Flex = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '0')};
`;
