'use client';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:3010/blogs');
  
    return (
      <div className="home">
        <Navbar />
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    );
  }
   
  export default Home;