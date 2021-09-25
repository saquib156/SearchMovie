import React, { useEffect, useState } from 'react';
import PostBlock from './PostBlock';
import './BlogPost.css';
import TopHead from './TopHead';

import axios from 'axios';

const BlogPost = () => {
   
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(response.status !== 200) throw response;
            if(response.data){
                setPosts(response.data);
                //console.log(response.data);
            }
        })
        .catch((error) => {
            alert("post not found");
        });
    }, []);
    
    return (
        
        <>
            <header className="head-section">
                <TopHead title="Blog Post" />
            </header>

            <div className="post-result">
                <PostBlock posts={posts} />
            </div>
        </>
    )
}

export default BlogPost;