'use client';
import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      fetch('http://localhost:3010/blogs')
        .then(result => {return result.json()})
        .then(data => setBlogs(data));
    }, []);
  
    return (
      <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
      </div>
    );
  }
   
  export default Home;