import React, { Component } from 'react';

import Content from '../../components/Content/Home/Content';
import axios from '../../axios-orders';

class Home extends Component {
    state = {
        posts: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                console.log(res);
                const fetchPosts = [];
                for (let key in res.data) {
                    fetchPosts.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, posts: fetchPosts });
            })
            .catch(err => {
                this.setState({ loading: false });

            });
    }
    render() {
        return (
            <div>
                <Content posts={this.state.posts} />
            </div>
        );
    };
}

export default Home;