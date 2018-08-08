import { actionTypes } from '../actions/action.types';
import { Irecords } from '../interfaces/records';
export default function records(state: Irecords[] = [], action: any) {
  switch (action.type) {
    case actionTypes.UPDATE_RECORD:
      return [...state, { ...action.record }];

    case actionTypes.EDIT_RECORD:
      const index = action.record.index;
      const record = action.record.record;
      return [...state].map((item, i) => (
        i === index ? { ...item, title: record.title, date: record.date, amount: record.amount } : item
      ));


    case actionTypes.RECEIVE_DATA:
      return [...action.records.data];

    case actionTypes.DELETE_RECORD:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)];

    default:
      return state;
  }
}
