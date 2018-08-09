import {actionTypes} from './action.types';
import { Irecords} from '../interfaces/records'

export function getAllRecords() {
  return {
    type: actionTypes.FETCH_DATA,
  };
}

export function receiveRecord(records :Irecords[]) {
 
  return {
    type: actionTypes.RECEIVE_DATA,
    records: records,
  };
}

export function updateRecord(record:Irecords) {
return {
  type: actionTypes.UPDATE_RECORD,
  record:record,
};
}
export function editRecord(record:Irecords) {
  return {
    type: actionTypes.EDIT_RECORD,
    record:record,
  };
  }

export function deleteRecord(id:number) {
  return {
    type: actionTypes.DELETE_RECORD,
    id:id,
  };
  }
