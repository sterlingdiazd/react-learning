import React, { Component } from 'react';
import Clock from './Clock';
import Comment from './Comment';
import LoginControl from './LoginControl'
import Blog from './Blog'
import NameForm from './NameForm'


import Toggle from './Toggle';

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
        const numbers = [1, 2, 3, 4]
        const posts = [
            { id: 1, title: 'React', content: 'Learning react' },
            { id: 2, title: 'Certification', content: 'Getting certified' },
        ]

        return <div>
            <h1>React App</h1>
            <div>

                {/* <Clock /> */}
                {/* <Toggle /> */}
                {/* <LoginControl /> */}
                {/* <Page /> */}
                {/* <NumberList numbers={numbers} /> */}
                {/* <Blog posts={posts} /> */}
                <NameForm />
            </div>



            {/* <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} /> */}
        </div>;
    }
}

function NumberList(props) {
    const numbers = props.numbers
    return (
        <ul>{numbers.map((number) => <ListItem key={number.toString()} value={number} />)}</ul>
    )
}

function ListItem(props) {
    return (
        <li> {props.value}</li >
    )
}



export default App;