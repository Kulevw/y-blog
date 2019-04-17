import React, {Component} from 'react';
import './modal-layout.scss';
import {ModalLayoutProps} from './types';

class ModalLayout extends Component<ModalLayoutProps> {
  render() {
    return (
      <div className="modal-layout">
        {this.props.children}
      </div>
    );
  }
}

export default ModalLayout;