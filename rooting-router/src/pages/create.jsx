import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('mario');
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsSubmitting(true);
        
        fetch('http://localhost:3010/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsSubmitting(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <Navbar />
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label>Body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isSubmitting &&
                <button>Add Blog</button> ||
                <button disabled>Adding blog</button>
                }
            </form>
        </div>
     );
}
 
export default Create;