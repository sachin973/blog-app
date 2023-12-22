import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import PostDetail from '../../components/PostDetail';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const PostDetailPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const posts = useSelector((state) => state);
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className='content-section'>
      <PostDetail post={post} />
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailPage;
