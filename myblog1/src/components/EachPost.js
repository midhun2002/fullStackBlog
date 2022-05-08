import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './EachPost.css'
function EachPost({match}) {
    const [post,setPost] = useState({})
    useEffect(()=>{
        axios.get(`https://beginner-blog.herokuapp.com/posts/${match.params.id}`)
        .then(res=>setPost(res.data))
        .catch(err=>alert("Error occured"))
    }, [])
    return (
        <div className="post" id={post._id} >
            <h6>{post.Title}</h6>
            <h6>{post.Tag}</h6>
            <h6>{post.updatedAt}</h6>
            <h6>{post.Description}</h6>
        </div>
    )
}

export default EachPost

