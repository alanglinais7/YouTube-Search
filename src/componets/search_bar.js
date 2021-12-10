import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    //this search term will update when the user changes input
    this.state = { term: ''};
  }
  //every class based react object must have a rendor method
  render () {
    //had to add an event handler to know when changes occur
    return (
      <div className = "search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
