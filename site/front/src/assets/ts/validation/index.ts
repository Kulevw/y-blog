export interface IRuleMessage {
  readonly rule: string
  readonly message: string
}

export interface IRule<T> {
  readonly message: string

  validate(value: T): boolean
}

export abstract class Rule<T> implements IRule<T> {
  readonly message: string;

  abstract validate(value: T): boolean

  protected constructor(message: string) {
    this.message = message;
  }
}

export class RuleReqired extends Rule<any> {
  constructor(message: string) {
    super(message)
  }

  validate(value: any): boolean {
    return Boolean(value);
  }
}

export class RuleStringMin extends Rule<string> {
  readonly minLength: number;

  constructor(message: string, minLength: number) {
    super(message);
    this.minLength = minLength;
  }

  validate(value: string): boolean {
    return value.length >= this.minLength;
  }
}

export class RuleStringMax extends Rule<string> {
  readonly maxLength: number;

  constructor(message: string, maxLength: number) {
    super(message);
    this.maxLength = maxLength;
  }

  validate(value: string): boolean {
    return value.length <= this.maxLength;
  }
}

export class RuleStringCustom extends Rule<string> {
  readonly handler: (value: string) => boolean;

  constructor(message: string, handler: (value: string) => boolean) {
    super(message);
    this.handler = handler;
  }

  validate(value: string): boolean {
    return this.handler(value);
  }
}