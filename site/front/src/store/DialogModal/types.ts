export interface IDialogModalState {
  modal: any | undefined
}

export enum DialogModalActionsEnum {
  SET
}

interface IDialogModalAction {
  type: number
}

export interface ISetDialogModalAction extends IDialogModalAction {
  payload: any
}

export type DialogModalActionTypes = ISetDialogModalAction;

export const MapModalActions = new Map<number, (state: IDialogModalState, action: DialogModalActionTypes) => IDialogModalState>([
  [
    DialogModalActionsEnum.SET,
    (state: IDialogModalState, action: ISetDialogModalAction): IDialogModalState => {
      return {
        ...state,
        modal: action.payload
      };
    }
  ],
]);

