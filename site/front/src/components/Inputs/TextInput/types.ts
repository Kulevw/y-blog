import {IRule, IRuleMessage} from '../../../assets/ts/validation';

export interface TextInputProps {
  readonly autofocus?: boolean
  readonly placeholder: string
  readonly value: string
  readonly setValue: (value: string) => void
  readonly rules: ReadonlyArray<IRule<string>>
  readonly validate: (result: Array<IRuleMessage>) => void
  readonly validateResult: ReadonlyArray<IRuleMessage>
}

export interface TextInputState {
  readonly isFocus: boolean
}