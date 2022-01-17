import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [state, setState] = useState('');
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

export default Home;
