import React from 'react';
import axios from 'axios';

import { randomCat } from '../randomCat';

export default class Kittens extends React.Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      editingId: null,
      formData: {
        name: "",
        age: "",
        breed: ""
      },
      newCat: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingCat: false,
      isMakingOwnCat: false
    }
  }

  getAllKittens = async () => {
    const resp = await axios.get('http://localhost:3000/kittens');
    const kittens = resp.data;

    this.setState({
      kittens: kittens
    });
  };

  async componentDidMount() {
    this.getAllKittens();
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
    const newCat = this.state.formData;
    const resp = await axios.put(`http://localhost:3000/kittens/id/${this.state.editingId}`, newCat);
    this.setState(prevState => ({
      kittens: prevState.kittens.map(k => (k.id === resp.data.id ? resp.data : k)),
      formData: {
        name: "",
        age: "",
        breed: ""
      },
      editingId: null,
    }))
  }

  delete = async (id) => {
    await axios.delete(`http://localhost:3000/kittens/id/${id}`);
    this.setState(prevState => ({
      kittens: prevState.kittens.filter(k => k.id !== id)
    }));
  };

  handleChangeNew = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      newCat: {
        ...prevState.newCat,
        [name]: value
      }
    }));
  }

  handleSubmitNew = async (ev) => {
    ev.preventDefault();
    const newCat = this.state.newCat;
    const resp = await axios.post(`http://localhost:3000/kittens/`, newCat);
    const newCatData = resp.data;
    this.setState(prevState => ({
      kittens: [...prevState.kittens, newCatData],
      newCat: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingCat: false
    }))
  }

  makeCat = () => {
    this.setState({
      isMakingCat: true
    })
  }

  handleCancel = () => {
    this.setState({
      editingId: null
    })
  }

  makeRandomCat = async () => {
    const newCat = randomCat();
    const resp = await axios.post(`http://localhost:3000/kittens/`, newCat);
    const newCatData = resp.data;
    this.setState(prevState => ({
      kittens: [...prevState.kittens, newCatData],
      newCat: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingCat: false,
      isMakingOwnCat: false
    }))
  };

  makeOwnCat = () => {
    this.setState({
      isMakingOwnCat: true
    })
  }

  render() {
    return (
      <>
        <h1> KITTENS, MORE KITTENS</h1>
        <button onClick={this.makeCat} className="make">Make a Cat</button>
        {this.state.isMakingCat &&
          (<div className="makeKitten">
          {this.state.isMakingOwnCat && 
          (<form>
                <input
                  type="text"
                  name="name"
                  placeholder="name of your cat"
                  value={this.state.newCat.name}
                  onChange={this.handleChangeNew}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="age of your cat"
                  value={this.state.newCat.age}
                  onChange={this.handleChangeNew}
                />
                <input
                  type="text"
                  name="breed"
                  placeholder="breed of your cat"
                  value={this.state.newCat.breed}
                  onChange={this.handleChangeNew}
                />
                <button className="make2" onClick={this.handleSubmitNew}>Make this Cat</button>
          </form>)}
          <button className="make2" onClick={this.makeOwnCat}>Ente your Cat</button>
                <button className="make2" onClick={this.makeRandomCat}>Generate Random Cat</button>

              
          </div>
            )
          }
  
        <div className="allKittens">

              {this.state.kittens.map(k =>
                <div className="kitten"
                  key={k.id}>
                  <h3>{k.name.toUpperCase()}</h3>
                  <p>Age: {k.age}</p>
                  <p>Breed: {k.breed}</p>
                  <button onClick={() => this.delete(k.id)}>Delete this Kitten</button>
                  <button onClick={() => this.edit(k.id)}>Edit this Kitten</button>
                  {this.state.editingId === k.id &&
                    (<form onSubmit={this.handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        placeholder="name of your cat"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                      />
                      <input
                        type="number"
                        name="age"
                        placeholder="age of your cat"
                        value={this.state.formData.age}
                        onChange={this.handleChange}
                      />
                      <input
                        type="text"
                        name="breed"
                        placeholder="breed of your cat"
                        value={this.state.formData.breed}
                        onChange={this.handleChange}
                      />
                      <button>Finished</button>
                      <button onClick={this.handleCancel}>Cancel</button>
                    </form>)}
                </div>)}
            </div>

      </>
          )
        }
        }