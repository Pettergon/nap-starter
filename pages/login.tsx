import type { NextPage } from 'next';
import { useState } from 'react';

const Login: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return <></>;
};

export const getStaticProps = async context => {
  // ...
};

export const getStaticPaths = async () => {
  // ...
};

export const getServerSideProps = async context => {
  // ...
};

export default Login;
