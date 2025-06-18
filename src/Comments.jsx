import React, {useEffect, useState} from "react";
import { FixedSizeList as List } from "react-window";
import "./style.css";


const Comments = () => {
    const [comments, setComments] = useState([]);
    console.log("comments",comments);

    // fetch large data asynchronosly 500 records
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data =>setComments(data))
        .catch(err=>console.log(err))
    },[]);

    if (comments.length === 0) return <div>Loading...</div>;

    return(
        <div style={{ height: '600px', width: '100%' }}>
        <List
            height={600}
            width={'100%'}
            itemCount={comments.length}
            itemSize={80}
        >
            {({ index, style }) => {
                const comment = comments[index];
                return (
                <div style={style} key={comment.id}>
                    Name is {comment.name} and email is
                    {comment.email}
                </div>
                );
            }}
        </List>
        </div>

    )
}

export default Comments;