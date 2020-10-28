import React from 'react';

import { Link } from 'react-router-dom';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/Gabriel-J3sus"}>
          Gabriel-J3sus
        </Link>

        <span> / </span>

        <Link className={"reponame"} to={"/Gabriel-J3sus/Github-clone"}>
          Github-clone
        </Link>
      </Breadcrumb>

      <p> Github interface clone. </p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/Gabriel-J3sus/Github-clone"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;