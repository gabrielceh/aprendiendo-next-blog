import React from 'react';
import Layout from '../../components/Layout';

const PrimerPost = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>{data.title}</h1>
        <span>Author: {data.userId}</span>
        <p>{data.body}</p>
      </Layout>
    </>
  );
};

export default PrimerPost;

export async function getStaticPaths() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
