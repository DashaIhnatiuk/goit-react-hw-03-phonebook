import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './AddSection.module.css';


class AddSection extends Component {

    static propTypes = {
        onSendData: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.name = '';
        this.phone = '';
    }

    render() {
      const {onSendData } = this.props;
  
      return (
        <div className={s.container}>
            <p>Name</p>
            <input type="text" placeholder="Enter contact name" ref={(c) => this.name = c}/>
            <p>Number</p>
            <input type="text" placeholder="Enter phone number" ref={(c) => this.phone = c}/>
            <button className={s.addBtn} onClick={() => {
                onSendData(this.name.value, this.phone.value);
                this.name.value="";
                this.phone.value="";
                }}>Add contact</button>
        </div>
      );
    }
  }

export default AddSection;