import { useEffect, useState } from "react"
import BlogList from "./BlogList";

function Home(){
    
    const [name, setName] = useState("Some name");
    const [age,setAge] = useState(32);

    const [blogs, setBlogs] = useState(null);

    // const [blogs, setBlogs] = useState([
    //     {title: "Blog1", author: "mario", body:"body1", id:1},
    //     {title: "Blog2", author: "yoshi", body:"body2", id:2},
    //     {title: "Blog3", author: "mario", body:"body3", id:3},
    //     {title: "Blog4", author: "yoshi", body:"body4", id:4}
    // ])

    const handleClick = () =>{
        setName("Rajesh");
        setAge(22);
    }

    const handleClickPar = (na) => {
        console.log("parameter function" + na);
    }

    const handleClickEvent = (e) => {
        console.log("event obj fun", e)
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(()=>{
    //     console.log("useEffect ran in Home component");
    //     console.log(name);
    // },[name]);

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    },[])

    return(
        <div>
            <h2>Home</h2>
            <p>{10}</p>
            <p>{"string"}</p>
            <p>{[1,2,3,4]}</p>
            <p>{Math.random()*100}</p><br></br>
            <p>{name} has {age} years old</p>
            <button onClick={handleClick}>click to change</button>
            <button onClick={() => handleClickPar("hero")}>Click parameter fun</button>
            <button onClick={handleClickEvent}>click me event obj</button><br></br>
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs} title = "All Blogs" handleDelete = {handleDelete}/> */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title = "Mario's Blogs!" handleDelete = {handleDelete}/> */}
        </div>
    );
}

export default Home;