import React, { Component } from "react";

import "./New.css";
import api from "../services/api";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await api.post("posts", data);

    // manda o usuário de volta para a rota principal
    this.props.history.push("/");
  };

  // pega o nome do target no evento e o valor, ou seja,
  // se o input tem o nome de "author" ele fará "author: 'valor'"
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // o form padrão permite enviar vários arquivos, portanto
  // os arquivos são guardados em um array
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
