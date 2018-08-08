import {actionTypes} from './action.types';

export function getAllRecords() {
  return {
    type: actionTypes.FETCH_DATA,
  };
}

export function receiveRecord(records :{}) {
 
  return {
    type: actionTypes.RECEIVE_DATA,
    records: records,
  };
}

export function updateRecord(record:{}) {
return {
  type: actionTypes.UPDATE_RECORD,
  record:record,
};
}
export function editRecord(record:{}) {
  return {
    type: actionTypes.EDIT_RECORD,
    record:record,
  };
  }

export function deleteRecord(index:number) {
  return {
    type: actionTypes.DELETE_RECORD,
    index:index,
  };
  }
