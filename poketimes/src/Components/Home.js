<<<<<<< HEAD
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Bulb from '../bulb.jpg'

class Home extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render(){
        // const { posts } = this.state;
        const posts = this.state.posts;
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/"+post.id}>
                                <div className="card-title red-text">{post.title}</div>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                        <img src={Bulb} alt="not found"></img>
                    </div>

                )
            })
        ) : ( <div className="center">No posts</div> )
        return (
            <div className="center container home">
                <h1 className="blue-text">Home</h1>
                {postsList}
            </div>
        )
    }
}

export default Home;