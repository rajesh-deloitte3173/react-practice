import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, loading, error} = useFetch('http://localhost:8000/blogs/'+id);

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        });
    }
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                    <h2>BlogDetails!</h2>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;