import {DialogModalActionsEnum, DialogModalActionTypes} from './types'

export const setModal = (modal: any): DialogModalActionTypes => {
  return {
    type: DialogModalActionsEnum.SET,
    payload: modal
  }
};
