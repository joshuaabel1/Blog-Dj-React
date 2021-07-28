
import React, { Component } from "react";

import axios from "axios";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.loadBooks = this.loadBooks.bind(this);
  }

  componentWillMount() {
    this.loadBooks();
  }

  async loadBooks() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/blog/");

      const { data } = response.data;
      this.setState({ books: data });
    } catch (error) {
      console.error("cannot get blog")
    }
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map((value, index) => { return <h4 key={index}>{value}</h4> })}
      </div>
    )
  }
}
