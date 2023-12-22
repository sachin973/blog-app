import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PostForm from '../../components/PostForm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { addPost } from '../../redux/actions/postActions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
const NewPost = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    setLoading(true);
      try {
      const response = await dispatch(addPost(data));
     if(response.status == 201){
      setLoading(false);
      router.push('/');
      toast.success("Blog created successfully.")

     }
     else{
      setLoading(false);
      toast.success("Something went wrong.")
     }
    } catch (error) {     
      setLoading(false);
      toast.success("Something went wrong.")
    } 
  };

  return (
    <div>
      <Navbar />
      <div className='content-section'>
        <PostForm onSubmit={handleSubmit} loading={loading}/>
      </div>
      <Footer />
    </div>
  );
};

export default NewPost;
