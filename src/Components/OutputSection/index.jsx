import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './OutputSection.module.css';

class OutputSection extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired 
  };

  render() {
    const {data, onDelete} = this.props;
    const items = Object.values(data);
    return (
      <div>
          <ul>
          {items.map(item => (
          <li 
            key={item.id}
    
          >
            {item.name} : {item.number}
            <button className={style.deleteBtn} onClick={() => {
                onDelete(item.id);
                }}>Delete</button>
          </li>
        ))}
          </ul>
      </div>
    );
  }
}

export default OutputSection;