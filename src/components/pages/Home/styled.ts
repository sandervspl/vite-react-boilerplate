import styled from 'styled-components';

import LogoSvg from 'vectors/Logo.svg';


export const Logo = styled(LogoSvg)``;

export const HomeHeader = styled.header`
  text-align: center;
  padding: 50px 10px;
  margin: 0 0 50px;
  background: ${(props) => props.theme.colors.black};

  & > svg {
    width: 250px;
  }
`;

export const HomeContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
`;

export const GithubLink = styled.a`
  width: 20px;
  height: 20px;
  display: inline-block;

  & > img {
    width: 100%;
  }
`;
