import React, {Component} from 'react';
import '../input-text.scss';
import {TextInputPlaceholderProps} from './types';

class TextInputPlaceholder extends Component<TextInputPlaceholderProps> {
  constructor(props: TextInputPlaceholderProps) {
    super(props);
  }

  classForPlaceholder = (): string => {
    return `
      input-text__placeholder
      ${this.props.isFocus ? 'input-text__placeholder--focus' : ''}
    `;
  };

  onMouseDown = (e: React.MouseEvent): void => {
    this.props.onFocus();
    e.preventDefault();
  };

  render() {
    const classes = this.classForPlaceholder();
    return (
      <p className={classes} onMouseDown={this.onMouseDown}>{this.props.text}</p>
    );
  }
}

export default TextInputPlaceholder;