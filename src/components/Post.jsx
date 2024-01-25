import classes from './Post.module.css';
function Post ({author, body}) {
    return (
    <li className={classess.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
      );
}


export default Post;
