import * as SC from './styles.js'

export const Post = ({post}) => (<SC.Post>
    <SC.Image src={post.image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title>
        <SC.DetailLink to={`/posts/${post.id}`}>Читать далее</SC.DetailLink>

</SC.Post>)