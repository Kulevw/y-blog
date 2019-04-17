import React, {Component} from 'react';
import {SignModalProps, SignModalState} from './types';

import ModalLayout from '../ModalLayout'
import SignUp from './SignUp'

class SignModal extends Component<SignModalProps, SignModalState> {
  constructor(props: SignModalProps) {
    super(props);
    this.state = {
      component: (<SignUp setComponent={this.setComponent} close={this.close}/>)
    };
  }

  setComponent = (component: any): void => {
    this.setState({
      component
    });
  };

  close = (): void => {
    this.props.setModal(undefined)
  };

  render() {
    return (
      <ModalLayout setModal={this.props.setModal}>
        {this.state.component}
      </ModalLayout>
    );
  }
}

export default SignModal;