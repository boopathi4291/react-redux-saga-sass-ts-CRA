import * as React from 'react';
import CardComponent from '../shared/card';
import { connect } from "react-redux";
import { IStateReocrds } from '../interfaces/initial-state';


function Cards(props:IStateReocrds){

        let total: number = 0;
        let credits: number = 0;
        let debits: number = 0;
        props.records.map((row: { amount: number }) => {
            if (row.amount < 0) {
                debits = debits + -(row.amount);
            }else {
                credits = +credits + +row.amount;
            }
            total = +total + +row.amount;
        })
        return (
          <div className="cardComponent">
            <CardComponent amount={credits} recordType='Credit' classes='greenCard' />
            <CardComponent amount={debits} recordType='Debit' classes='redCard' />
            <CardComponent amount={total} recordType='Balance' classes='blueCard' />
    
          </div>
        );
}
const mapStateToProps = (state: any) => {
    return {
      records: state.records
    };
  };

  export default connect(mapStateToProps)(Cards);