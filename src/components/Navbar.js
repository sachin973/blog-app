import Link from 'next/link';

const Navbar = () => {
  return (

    <nav className='header'>
      <Link legacyBehavior href="/">
        <a className='logo'>Blog</a>
      </Link>
      <Link legacyBehavior href="/posts/new" >
        <button className='create-button'>Create Post</button>
      </Link>
    </nav>

  );
};

export default Navbar;
