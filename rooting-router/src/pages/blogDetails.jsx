import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch('http://localhost:3010/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:3010/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            <Navbar />
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;