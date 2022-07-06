import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
            <h2>Links</h2>
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Second page</Link>
            <Link to="/grid">Grid Layout</Link>
            <Link to="/flex">Flex Box</Link>
        </div>
    );
}

export default Navbar;