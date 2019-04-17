import {IRuleMessage, Rule} from '../../../../assets/ts/validation';

export interface SignUpProps {
  readonly setComponent: (modal: any) => void
  readonly close: () => void
}

export interface SignUpState {
    email: string,
    emailRules: ReadonlyArray<Rule<string>>,
    emailValidation: IRuleMessage[],
}