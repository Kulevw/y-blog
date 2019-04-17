import React, {Component} from 'react';
import './sign-up.scss';
import {SignUpProps, SignUpState} from './types';

import TextInput from '../../../Inputs/TextInput'
import {IRuleMessage, RuleReqired, RuleStringMax, RuleStringMin} from '../../../../assets/ts/validation';

class SignUp extends Component<SignUpProps, SignUpState> {
  count: number = 0;
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      email: '',
      emailRules: [
        new RuleReqired('Пожалуйста введите свой Email.'),
        new RuleStringMax('Максимальная длина 32 символа.', 32),
        new RuleStringMin('Минимальная длина 5 символов.', 5),
      ],
      emailValidation: []
    }
  }

  close = (e: React.MouseEvent): void => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.close();
  };

  setEmail = (value: string): void => {
    this.setState({
      email: value,
    })
  };

  emailValidate = (result: IRuleMessage[]): void => {
    this.setState({
      emailValidation: result,
    });
  };

  componentDidUpdate(prevProps: Readonly<SignUpProps>, prevState: Readonly<SignUpState>, snapshot?: any): void {
    console.log('count', ++this.count)
  }

  render() {
    return (
      <div className="modal-sign-up">
        <div className="modal-sign-up__content-wrapper" onClick={this.close}>
          <div className="container px-0">
            <div className="modal-sign-up__content">
              <div className="modal-sign-up__body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="modal-sign-up__title">Регистрация</h2>
                  </div>
                  <div className="col-6 col-12">
                    <TextInput
                      autofocus
                      placeholder="Email"
                      value={this.state.email}
                      setValue={this.setEmail}
                      rules={this.state.emailRules}
                      validate={this.emailValidate}
                      validateResult={this.state.emailValidation}
                    />
                    <TextInput
                      placeholder="Email"
                      value={this.state.email}
                      setValue={this.setEmail}
                      rules={this.state.emailRules}
                      validate={this.emailValidate}
                      validateResult={this.state.emailValidation}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;