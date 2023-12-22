import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <div >
      {posts && posts?.map((post) => (
        <div key={post.id} className='blog-card'>
          <Link legacyBehavior href={`/posts/${post.id}`}>
            <a className='card-heading'>
              <h2 >{post.title}</h2>
            </a>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
