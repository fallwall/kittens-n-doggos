import React from 'react';
import axios from 'axios';

import { randomDog } from '../randomDog';

const colorfulConsole = () => {
  const colors = {
    "gray": "font-weight: bold; color: #1B2B34;",
    "red": "font-weight: bold; color: #EC5f67;",
    "orange": "font-weight: bold; color: #F99157;",
    "yellow": "font-weight: bold; color: #FAC863;",
    "green": "font-weight: bold; color: #99C794;",
    "teal": "font-weight: bold; color: #5FB3B3;",
    "blue": "font-weight: bold; color: #6699CC;",
    "purple": "font-weight: bold; color: #C594C5;",
    "brown": "font-weight: bold; color: #AB7967;"
  }
  console.log('%cHI MADDY!!!', colors.purple);
  console.log('%cDo %cYou %cCheck %cConsole %cLog', colors.yellow, colors.green, colors.teal, colors.blue, colors.purple);
  console.log('%cI wonder %cif you\'ll %cforget about %call other %cf-ups', colors.brown, colors.purple, colors.red, colors.orange, colors.yellow);
  console.log('%cIf I %cjust %cgive %cyou %csome %ccolors %cfirst....', colors.orange, colors.yellow, colors.red, colors.gray, colors.blue, colors.teal, colors.green);
  console.log('%cNothing to see here', colors.gray);
}

export default class Doggos extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: [],
      editingId: null,
      formData: {
        name: "",
        age: "",
        breed: ""
      },
      newDog: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingDog: false,
      isMakingOwnDog: false
    }
  }

  getAllDoggos = async () => {
    const resp = await axios.get('http://localhost:3000/doggos');
    const doggos = resp.data.reverse();

    this.setState({
      doggos: doggos
    });
  };

  async componentDidMount() {
    this.getAllDoggos();
  };

  edit = (id) => {
    this.setState({
      editingId: id
    })
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    const newDog = this.state.formData;
    const resp = await axios.put(`http://localhost:3000/doggos/id/${this.state.editingId}`, newDog);
    this.setState(prevState => ({
      doggos: prevState.doggos.map(d => (d.id === resp.data.id ? resp.data : d)),
      formData: {
        name: "",
        age: "",
        breed: ""
      },
      editingId: null,
    }))
  }

  delete = async (id) => {
    await axios.delete(`http://localhost:3000/doggos/id/${id}`);
    this.setState(prevState => ({
      doggos: prevState.doggos.filter(d => d.id !== id)
    }));
  };

  handleChangeNew = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      newDog: {
        ...prevState.newDog,
        [name]: value
      }
    }));
  }

  handleSubmitNew = async (ev) => {
    ev.preventDefault();
    const newDog = this.state.newDog;
    const resp = await axios.post(`http://localhost:3000/doggos/`, newDog);
    const newDogData = resp.data;
    this.setState(prevState => ({
      doggos: [newDogData, ...prevState.doggos],
      newDog: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingDog: false,
      isMakingOwnDog: false
    }))
  }

  makeDog = () => {
    this.setState({
      isMakingDog: true
    })
  }

  handleCancel = () => {
    this.setState({
      editingId: null
    })
  }


  makeRandomDog = async () => {
    const newDog = randomDog();
    const resp = await axios.post(`http://localhost:3000/doggos/`, newDog);
    const newDogData = resp.data;
    this.setState(prevState => ({
      doggos: [newDogData, ...prevState.doggos],
      newDog: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingDog: false,
      isMakingOwnDog: false
    }))
  };

  makeOwnDog = () => {
    this.setState({
      isMakingOwnDog: true
    })
  }

  render() {
    return (
      <>
        <h1> DOGS NEED LOVE TOO</h1>
        <button onClick={this.makeDog} className="make">Make a Dog</button>
        {this.state.isMakingDog &&
          (
            <div className="makeDoggo">
              {this.state.isMakingOwnDog &&
                (<form>
                  <input
                    type="text"
                    name="name"
                    placeholder="name of your dog"
                    value={this.state.newDog.name}
                    onChange={this.handleChangeNew}
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="age of your dog"
                    value={this.state.newDog.age}
                    onChange={this.handleChangeNew}
                  />
                  <input
                    type="text"
                    name="breed"
                    placeholder="breed of your dog"
                    value={this.state.newDog.breed}
                    onChange={this.handleChangeNew}
                  />
                  <button className="make3" onClick={this.handleSubmitNew}>Make this Dog</button>
                </form>)}
              <button className="make2" onClick={this.makeOwnDog}>Ente your Dog</button>
              <button className="make2" onClick={this.makeRandomDog}>Generate Random Dog</button>

            </div>
          )}
        <div className="allDoggos">
          {this.state.doggos.map(d =>
            <div className="doggo"
              key={d.id}>
              <h3>{d.name.toUpperCase()}</h3>
              <p>Age: {d.age}</p>
              <p>Breed: {d.breed}</p>
              <button onClick={() => this.delete(d.id)}>Delete this Doggo</button>
              <button onClick={() => this.edit(d.id)}>Edit this Doggo</button>
              {this.state.editingId === d.id &&
                (<form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="name of your dog"
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="age of your dog"
                    value={this.state.formData.age}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="breed"
                    placeholder="breed of your dog"
                    value={this.state.formData.breed}
                    onChange={this.handleChange}
                  />
                  <button>Finished</button>
                  <button onClick={this.handleCancel}>Cancel</button>
                </form>)}
            </div>)}
        </div>
        {colorfulConsole()}
      </>
    )
  }
}