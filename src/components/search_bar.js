// import React from 'react';
import React, { Component } from 'react';
//The above is same as Component = React.Component; Destructuring

class SearchBar extends Component {
    //Contructor function (called automatically whenever a new instance of SearchBar is run) with state property inside
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value )} />
            </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}



export default SearchBar;