const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>MyBlogs</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    backgroundColor: "orange",
                    borderRadius: "8 px",
                    color: "white"
                }}>Create New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;