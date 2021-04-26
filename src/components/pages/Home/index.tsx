import React from 'react';

import GithubLogo from 'images/github-logo.png';
import { getData } from 'slices/data/thunks';
import { useDispatch } from 'hooks';
import Anchor from 'common/interaction/Anchor';

import { GithubLink, HomeContent, HomeHeader, Logo } from './styled';


const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <HomeHeader>
        <Logo />
      </HomeHeader>
      <HomeContent>
        <p>Created by <Anchor href="https://github.com/sandervspl">@sandervspl</Anchor></p>
        <GithubLink
          href="https://github.com/sandervspl/vite-react-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="github" />
        </GithubLink>
      </HomeContent>
    </>
  );
};

export default Home;
