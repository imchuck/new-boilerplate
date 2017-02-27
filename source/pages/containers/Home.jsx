import React, { Component } from 'react';
import { Link } from'react-router-dom';

import Post from '../../posts/containers/Post.jsx';

import api from '../../api.js';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 1,
      posts: [],
      loading: true
    }
  }
  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);

    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false
    })
  }
  render() {
    return (
      <section name="Home" className="container">
        <h1>Home</h1>
        { this.state.loading && (
          <h2>Loading posts </h2>
        )}
        {this.state.posts
          .map(post => <Post key={post.id} {...post} />)
        }
        <Link to="/post/1">
          Go to post 1
        </Link>
      </section>
    );
  }
}

export default Home;
