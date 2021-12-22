import React, { Component } from 'react';
import Welcome from './Welcome';
import Comment from './Comment';

class App extends Component {
    render() {
        const greeting = 'Sterling';
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
        };

        return <div>
            <h1>React App</h1>
            {/* <Welcome name={greeting} /> */}
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
        </div>;
    }
}

export default App;