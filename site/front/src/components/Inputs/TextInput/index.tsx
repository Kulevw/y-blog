import React, {Component} from 'react';
import './input-text.scss';
import {TextInputProps, TextInputState} from "./types";

import Placeholder from './Placeholder';
import {Rule, IRuleMessage} from '../../../assets/ts/validation';
import ValidationList from '../ValidationList';

class TextInput extends Component<TextInputProps, TextInputState> {
  private _input!: HTMLInputElement | null;

  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      isFocus: false,
    }
  }

  setFocus = (value: boolean): boolean => {
    const input = this._input as HTMLInputElement;
    value ? input.focus() : input.blur();
    return value;
  };

  onFocus = (): void => {
    this.setState({
      isFocus: true,
    });
  };

  onBlur = (): void => {
    this.setState({
      isFocus: false,
    });
  };

  placeholderOnFocus = (): void => {
    this.setFocus(true);
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    this.props.setValue(value);
    this.onValidate(value);
  };

  onValidate(value: string) {
    const result = new Array<IRuleMessage>();
    this.props.rules.forEach((rule: Rule<string>) => {
      if (!rule.validate(value)) {
        result.push({
          rule: rule.constructor.name,
          message: rule.message,
        });
      }
    });
    this.props.validate(result);
  }

  componentDidMount() {
    if(this.props.autofocus) {
      this.setFocus(true);
    }
  }

  render() {
    const isValid = !Boolean(this.props.validateResult.length);
    const classesInput = `
      input-text__input
      ${!isValid ? 'input-text__input--invalidate' : ''}
    `;
    return (
      <div className="input-text">
        <div className="input-text__input-wrapper">
          <Placeholder
            text={this.props.placeholder}
            isFocus={this.state.isFocus || Boolean(this.props.value) || !isValid}
            onFocus={this.placeholderOnFocus}
          />
          <input
            type="text"
            className={classesInput}
            ref={(node) => this._input = node}
            value={this.props.value}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
        {isValid || <ValidationList listMessages={this.props.validateResult}/>}
      </div>
    );
  }
}

export default TextInput;