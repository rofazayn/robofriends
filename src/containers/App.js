import React, { Component } from 'react';
import Search from '../components/Search';
import Robots from '../components/Robots';

// Redux actions
import { setSearchField } from '../actions';

// Redux connect
import { connect } from 'react-redux';

// Sass
import '../assets/style.scss';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='app'>
        <Search searchChange={onSearchChange} />
        <Robots robots={filteredRobot} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
