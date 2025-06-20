import { useEffect, useState } from "react"
import './Fetch.css'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Fetch = () => {
    const[posts, setPosts] = useState<Post[]>([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err))   
    },[])
    return(
        <>
        <div>
            <h2>Posts Data</h2>
            {
                posts.map((post) =>(
                    <ol className="nothing" key={post.id}>
                        <li>{post.title}</li>
                        <li>{post.body}</li>
                    </ol>
                ))
            }
        </div>
        </>
    )
}