import { useState } from 'react';

const PostForm = ({ onSubmit, loading }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  // Validation state
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!title.trim()) {
      setTitleError('Title is required');
    } else {
      setTitleError('');
    }

    if (!content.trim()) {
      setContentError('Content is required');
    } else {
      setContentError('');
    }

    if (!author.trim()) {
      setAuthorError('Author is required');
    } else {
      setAuthorError('');
    }

    // If any field is invalid, return without submitting the form
    if (!title || titleError || !content || contentError || !author || authorError) {
      return;
    }

    // If all fields are valid, submit the form
    
    onSubmit({ title, content, author });

    // Clear form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-card'>
      <h1 className='heading-create-new-blog'>Create a New Post</h1>
      <div className='field-box'>
        <label className='label'>
          Title<span>*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError(''); // Clear error when user starts typing
          }}
        />
        {titleError && <p className='error-message'>{titleError}</p>}
      </div>
      <div className='field-box'>
        <label className='label'>
          Content<span>*</span>
        </label>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setContentError('');
          }}
        />
        {contentError && <p className='error-message'>{contentError}</p>}
      </div>
      <div className='field-box'>
        <label className='label'>
          Author<span>*</span>
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
            setAuthorError('');
          }}
        />
        {authorError && <p className='error-message'>{authorError}</p>}
      </div>
      <div className='button-box'>
        <button className='create-button' type="submit" disabled={loading}>
          {!loading ? 'Submit' : '...'}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
