import React from 'react';
import axios from 'axios';

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
      }
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

  delete = (id) => {
    //stuff
  };

  render() {
    return (
      <>
        <h1> SOUNDS LIKE A LOT OF WORK</h1>
        <div className="allKittens">
          {
            this.state.editingId !== null &&
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
            </form>)
          }
          {this.state.kittens.map(k =>
            <div className="kitten"
              key={k.id}>
              <h3>{k.name.toUpperCase()}</h3>
              <p>Age: {k.age}</p>
              <p>Age: {k.breed}</p>
              <button onClick={() => this.delete(k.id)}>Delete this Kitten</button>
              <button onClick={() => this.edit(k.id)}>Edit this Kitten</button>
            </div>)}
        </div>
      </>
    )
  }
}