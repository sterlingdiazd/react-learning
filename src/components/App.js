import React, { Component } from 'react';
import Clock from './Clock';
import Toggle from './Toggle';
import Comment from './Comment';
import LoginControl from './LoginControl'
import Blog from './Blog'
import NameForm from './NameForm'
import EasyForm from './EasyForm'
import Reservation from './Reservation'
import Calculator from './Calculator/Calculator';
import WelcomeDialog from './Composition/WelcomeDialog';
import Page from './Page';
import SplitPane from './Composition/SplitPane/SplitPane';
import SignUpDialog from './Composition/SignUpDialog/SignUpDialog';


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


                {/* <Toggle /> */}
                {/* <LoginControl /> */}
                {/* <Page /> */}
                {/* <NumberList numbers={numbers} /> */}
                {/* <Blog posts={posts} /> */}
                {/* <NameForm /> */}
                {/* <EasyForm /> */}

                {/* {<WelcomeDialog />} */}
                {<SignUpDialog />}
                {/* {<SplitPane left={<Reservation />} right={<Clock />} />} */}
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