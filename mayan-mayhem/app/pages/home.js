'use client';
import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import useFetch from '../components/useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:3010/blogs');
  
    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    );
  }
   
  export default Home;