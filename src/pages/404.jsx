/* eslint-disable react/no-unescaped-entities */
import { FaGhost } from 'react-icons/fa';

function page404() {
  const hanldeSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      {/* <Header /> */}
      <main className="pageof404">
        <h1>
          4
          <span>
             <FaGhost />
          </span>
          4
        </h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
      </main>
    </>
  );
}

export default page404;