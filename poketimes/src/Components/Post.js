import axios from 'axios';
import React, {Component} from 'react';

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id
        // console.log(id);
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            });
        
    }

    render(){
        const post = this.state.post ? (
            <div className="post center">
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">No posts</div>
        )
        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

export default Post;