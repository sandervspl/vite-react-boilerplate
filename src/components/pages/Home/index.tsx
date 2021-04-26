import React from 'react';

import GithubLogo from 'images/github-logo.png';

import Anchor from 'common/interaction/Anchor';

import { GithubLink, PrimeContent, PrimeHeader, Logo } from './styled';

const Prime: React.FC = () => (
  <>
    <PrimeHeader>
      <Logo />
    </PrimeHeader>
    <PrimeContent>
      <p>Created by <Anchor href="https://github.com/sandervspl">@sandervspl</Anchor></p>
      <GithubLink
        href="https://github.com/sandervspl/vite-react-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubLogo} alt="github" />
      </GithubLink>
    </PrimeContent>
  </>
);

export default Prime;
