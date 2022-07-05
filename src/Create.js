import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const history = useHistory();

    const handleSubmit = (e) =>{
        // prevent auto submit
        e.preventDefault();
        const blog = {title,body,author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("blog added");
            // history.go(-1);
            history.push("/");
            });
    }
    return(
        <div className="create-component">
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange= {(e)=>setTitle(e.target.value)}
                />
                <label>Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange = {(e)=>setBody(e.target.value)}
                />
                <label>Author</label>
                <select
                    value={author}
                    onChange = {(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p>
        </div>
    );
}

export default Create;