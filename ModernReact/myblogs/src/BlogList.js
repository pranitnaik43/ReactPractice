const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    const HandleDelete = props.HandleDelete
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => {HandleDelete(blog.id)}}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;