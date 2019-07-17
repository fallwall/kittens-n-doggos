import React from 'react';
import axios from 'axios';

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
      isMakingDog: false
    }
  }

  getAllDoggos = async () => {
    const resp = await axios.get('http://localhost:3000/doggos');
    const doggos = resp.data;

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
      doggos: [...prevState.doggos, newDogData],
      newDog: {
        name: "",
        age: "",
        breed: ""
      },
      isMakingDog: false
    }))
  }

  makeDog = () => {
    this.setState({
      isMakingDog: true
    })
  }

  render() {
    return (
      <>
        <h1> DOGS NEEDS LOVE TOO</h1>
        <button onClick={this.makeDog}>Make a Dog</button>
        {this.state.isMakingDog &&
          (
            <div className="makeDoggo">
              <form onSubmit={this.handleSubmitNew}>
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
                <button>Make Your Dog</button>
              </form>
            </div>
          )}
        <div className="allDoggos">
          {this.state.doggos.map(d =>
            <div className="doggo"
              key={d.id}>
              <h3>{d.name.toUpperCase()}</h3>
              <p>Age: {d.age}</p>
              <p>Age: {d.breed}</p>
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
                </form>)}
            </div>)}
        </div>
      </>
    )
  }
}