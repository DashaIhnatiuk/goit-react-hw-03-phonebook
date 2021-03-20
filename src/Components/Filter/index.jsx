import { Component } from 'react';
import PropTypes from 'prop-types';


class Filter extends Component {

    static propTypes = {
        onFilterUpdate: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.value = '';
    }

    render() {
      const {onFilterUpdate } = this.props;
  
      return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" placeholder="Enter contact name" ref={(c) => this.value = c} onInput={() => {
                onFilterUpdate(this.value.value);
                }}/>
 
        </div>
      );
    }
  }

export default Filter;