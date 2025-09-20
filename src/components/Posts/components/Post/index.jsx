import * as SC from "./styles.js";
import { Link } from "../../../ui/Link/index.jsx";

export const Post = ({ post }) => {
    const image = post.image || 'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png'
    return (
        <SC.Post>
        <SC.Image src={image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title>
        <Link to={`/posts/${post.id}`}>Читать далее</Link>
    </SC.Post>
    )
}
