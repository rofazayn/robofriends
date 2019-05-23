import React, { Component } from 'react';
import Search from '../components/Search';
import Robots from '../components/Robots';

// Redux connect
import { connect } from 'react-redux';

// Sass
import '../assets/style.scss';

// Redux actions
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.search.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
    console.log(this.props.robots);
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='app'>
        <Search searchChange={onSearchChange} />
        {isPending ? <div>Loading..</div> : <Robots robots={filteredRobots} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
