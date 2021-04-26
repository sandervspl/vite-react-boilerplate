import styled from 'styled-components';

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
`;

export default Anchor;
