import React from 'react';

const messages = [
  "Ist die Katze aus dem Haus, tanzen die Mäuse auf dem Tisch.",
  "Es ist nur einen Katzensprung entfernt",
  "die Katze aus dem Sack lass",
  "Nachts sind alle Katzen grau",
  "Das ist für die Katz’!",
  "wie die Katze um den heißen Brei herumlaufen",
  "Da liegt der Hund begraben",
  "Was Hänschen nicht lernt, lernt Hans nimmermehr"
]

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: messages
    }
  }
  
  shuffle=(arr)=> {
    for (let i = arr.length - 1; i > 0; i--) {
      let itemOne = Math.floor(Math.random() * (i + 1));
      let itemTwo = arr[i];
      arr[i] = arr[itemOne];
      arr[itemOne] = itemTwo;
    };
    return arr;
  }
  
  componentDidMount = () => {
    const newMsg = this.shuffle(messages);
    this.setState({
      messages: newMsg
    })
   }
  
  render() {
    return (
      <div className="home">
        <br />
        <h1>{this.state.messages.map(m => <p>{m}</p>)}</h1>
        
      </div>
    )
  }
}