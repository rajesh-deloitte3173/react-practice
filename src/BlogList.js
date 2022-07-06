import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;

    return (
    <div>
        <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <p>Written by: {blog.author}</p>
                </Link>
                {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
            </div>
        ))}
    </div>
    );
}

export default BlogList;