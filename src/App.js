import React, { Component } from 'react';
import './App.css';


const data = [
  {
    id: 1, title: 'Wiadomość numer 1', body: 'Labore non pariatur sint elit ad eiusmod cupidatat enim ad duis non veniam. Treść wiadomości numer '
  }
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `${data[0].body} ${index}`
  })
}, 4000);


class App extends Component {
  state = {
    comments: [...data]
  }

  getData() {
    if (this.state.comments.length !== data.length) {
      this.setState({ comments: [...data] })
    }
  }

  componentDidMount() {
    this.intervalIndex = setInterval(() => {
      this.getData()
    }, 2000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalIndex)
  }

  render() {

    const section = this.state.comments.map(comment => (
      <div key={comment.id}>
        < h1 > {comment.title}</h1 >
        <p>{comment.body}</p>
      </div>

    ))

    return (
      <div className="App">
        {section.reverse()}
      </div>
    );
  }
}

export default App;
