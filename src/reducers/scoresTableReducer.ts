import { TableData } from "../utils/types";

export type ReducerAction = {
  type: ActionTypes;
  payload: any;
}

export const actionType = {
  init: 'initGroupTeams',
  teamUpdate: 'teamUpdate',
} as const;

type ActionTypeKeys = keyof typeof actionType;
export type ActionTypes = typeof actionType[ActionTypeKeys];


const scoresTableReducer = (state: TableData, action: ReducerAction) => {
  switch (action.type) {
    case actionType.init:
      return [
        ...action.payload
      ];
    case actionType.teamUpdate:
      return [
        ...state.filter(team => team.teamName !== action.payload.teamScore.teamName),
        action.payload.teamScore
      ]
    default:
      return state;
  }
};

export default scoresTableReducer;