import {IDialogModalState, DialogModalActionTypes, MapModalActions} from './types'

const defaultState: IDialogModalState = {
  modal: undefined,
};

export const DialogModalReducer = (state: IDialogModalState = defaultState, action: DialogModalActionTypes): IDialogModalState => {
  const actionFunc = MapModalActions.get(action.type);
  return actionFunc ? actionFunc(state, action) : state;
};