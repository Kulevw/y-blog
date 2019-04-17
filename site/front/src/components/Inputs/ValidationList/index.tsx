import React, {Component} from 'react';
import './validation-list.scss';
import {ValidationListProps} from './types';

class ValidationList extends Component<ValidationListProps> {
  render() {
    return (
      <ul className="validation-list">
        {this.props.listMessages.map(k => (
          <li className="validation-list__item" key={k.rule}>
            {k.message}
          </li>
        ))}
      </ul>
    );
  }
}

export default ValidationList;