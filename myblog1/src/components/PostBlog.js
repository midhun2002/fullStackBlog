import React ,{useState}from 'react'
import axios from 'axios'
import './PostBlog.css'
function PostBlog() {
    const [Title,setTitle] = useState("")
    const [Tag,setTag] = useState("")
    const [Content,setContent] = useState("")
    const handleSubmit = ()=>{
        axios.post('https://beginner-blog.herokuapp.com/posts',{Title,Tag,Content})
        .then(res=> window.location.href = "https://pedantic-tesla-c0e4f9.netlify.app/")
        .catch(err=>alert("Error has occurred",err))
    }
    return (
    <div className="post-form">
       <h1>PostBlog</h1>
       <input id="post-title" placeholder="Enter your subject" autoComplete="on"onChange={(e)=>setTitle(e.target.value)}></input><br></br>
       <input id="post-tag" placeholder="Enter the tag eg:React,Javascript etc"autoComplete="on" onChange={(e)=>setTag(e.target.value)}></input>   <br></br>
       <textarea id="post-area" placeholder="Enter your content" onChange={(e)=>setContent(e.target.value)}></textarea><br></br>
       <button id="submit" onClick={handleSubmit}>submit</button>
    </div>
    )
}

export default PostBlog
