import React, { Component } from "react";

class Blog extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const sidebar = (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        )

        const content = this.props.posts.map((post) =>
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
            />
        )

        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        )
    }


}

function Post(props) {
    return (
        <div key={props.id}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Blog