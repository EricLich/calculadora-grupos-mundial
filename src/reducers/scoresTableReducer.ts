import { TableData } from "../utils/types";

type ReducerAction = {
  type: ActionTypes;
  payload: any;
}

export const actionType = {
  init: 'initGroupTeams'
} as const;

type ActionTypeKeys = keyof typeof actionType;
export type ActionTypes = typeof actionType[ActionTypeKeys];


const scoresTableReducer = (state: TableData, action: ReducerAction) => {
  switch (action.type) {
    case actionType.init:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
};

export default scoresTableReducer;