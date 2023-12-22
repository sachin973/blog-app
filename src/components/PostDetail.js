const PostDetail = ({ post }) => {
  return (
    <div className='blog-card'>
      <h1 className="card-heading">{post.title ? post.title : "--"}</h1>
      <p>{post.body ? post.body : "--"}</p>
      <p>Author: {post.author ? post.author : "--"}</p>
    </div>
  );
};

export default PostDetail;
