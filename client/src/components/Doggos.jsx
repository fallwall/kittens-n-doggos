import React from 'react';
import axios from 'axios';

import { randomDog } from '../randomDog';
import { colorfulConsole } from '../colorfulConsole';

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

  handleCancelNew = () => { 
    this.setState({
      isMakingDog: false,
      isMakingOwnDog: false
    })
  }

  render() {
    return (
      <>
        <h1> DOGS NEED LOVE TOO</h1>
        {!this.state.isMakingDog &&
          (<button onClick={this.makeDog} className="make">Make a Dog</button>)}
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
              <button className="make3" onClick={this.handleSubmitNew}>Finalize</button>
              <button className="make3" onClick={this.handleCancelNew}>Cancel</button>
              </form>)}
            {!this.state.isMakingOwnDog &&
              <button className="make2" onClick={this.makeOwnDog}>Customize your Dog</button>}
            {!this.state.isMakingOwnDog &&
              <button className="make2" onClick={this.makeRandomDog}>Generate Random Dog</button>}

            </div>
          )}
        <div className="allDoggos">
          {this.state.doggos.map(d =>
            <div className="doggo"
              key={d.id}>
              <h3>{d.name.toUpperCase()}</h3>
              <p><strong>Age:</strong> {d.age}</p>
              <p><strong>Breed:</strong> {d.breed}</p>
              {this.state.editingId !== d.id &&
                <button onClick={() => this.delete(d.id)}>Delete this Doggo</button>}
              {this.state.editingId !== d.id &&
                <button onClick={() => this.edit(d.id)}>Edit this Doggo</button>}
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
                  <button className="update">Finished</button>
                  <button className="update" onClick={this.handleCancel}>Cancel</button>
                </form>)}
            </div>)}
        </div>
        {colorfulConsole()}
      </>
    )
  }
}