import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import { fetchPosts } from '../redux/actions/postActions';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <div>
      <Navbar />
      <div className='content-section'>
      <h1>Blog Posts</h1>
      <div className='bloglist-cotainer'>
      <BlogList posts={posts} />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
