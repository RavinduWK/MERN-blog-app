import { useState } from "react";
import { Navigate } from 'react-router-dom';
import Editor from "../components/Editor";


export default function Createpost(){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        fetch('https://wickramblogs-api.onrender.com/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        }).then(response => {
            if (response.ok) {
                setRedirect(true);
            }
        });
    }
    
    if(redirect) {
        return <Navigate to={'/'} />
    }
    return(
        <form onSubmit={createNewPost}>
            <input type="title" 
                   placeholder={"Title"} 
                   value={title}
                   onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary" 
                   placeholder={"Summary"} 
                   value={summary}
                   onChange={ev => setSummary(ev.target.value)}/>
            <input type="file" onChange={ev => setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop: '5px'}}>Create post</button>
        </form>
    );
}