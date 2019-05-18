import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardsList from '../components/CardsList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }));
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <h1>robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardsList robots={filteredRobots} />
      </div>
    );
  }
}
