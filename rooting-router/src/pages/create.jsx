import Navbar from "../components/Navbar";
import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('mario');

    return ( 
        <div className="create">
            <Navbar />
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;