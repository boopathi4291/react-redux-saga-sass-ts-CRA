import { Irecords } from "./records";

export interface I_button_State  {
    cell: {col: string,row: any};
    open: boolean;
}
export interface I_button_props extends Irecords {
    records: [Irecords];
    colDef: any;
    value: any;
    data: Irecords;
    rowIndex: number;
    deleteRecord(rowIndex: number): void;
    getAllRecords(): Irecords;
}
