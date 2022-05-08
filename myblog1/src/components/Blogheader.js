import React from 'react'
import './BlogHeader.css'
import { Link } from 'react-router-dom'
function BlogHeader({ post }) {
    return (
        <div className="post" key={post._id}>
            <h6><Link to={`/posts/${post._id}`} className="post-hyperlink">{post.Title.substr(0,100)}</Link></h6> 
            <h6 className="post-tag">{post.Tag.substr(0,100)}</h6>
            <h6 className="post-description">{post.Description}</h6>
        </div>
    )
}

export default BlogHeader

