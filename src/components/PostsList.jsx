import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal'
import classes from './PostsList.module.css';
    function PostsList ({isPosting, onStopPosting}) {
    const [post, setPost] = useState([]);

    function addPostHandler(postDate) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
        return (
        <>
        {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
            )}
        
            <ul className={classes.posts}>
                <Post author="Manuel" body="Check out the full course!"/>
            </ul>
        </>
    );
}


export default PostsList;
