import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Blog = ({ data }) => {
  return (
    <Layout title="Next.js | Blog">
      <h1>Lista de blogs</h1>

      {data.map((post) => (
        <div key={post.id}>
          <h3>
            <Link href={'/blog/[id]'} as={`/blog/${post.id}`}>
              <a>
                {post.id} - {post.title}
              </a>
            </Link>
          </h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
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
