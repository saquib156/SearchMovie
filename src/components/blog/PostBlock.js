import React from 'react';

const PostBlock = (prop) => {

    return(
        <>
            {prop.Posts.map((post) => (
                <div className="post-block" key={post.id}>                    
                    <div className="post-title"><h5>{post.title}</h5></div>   
                    <div className="post-desc">{post.body}</div>
                </div>
            ))}
            
        </>
    )
}

export default PostBlock;