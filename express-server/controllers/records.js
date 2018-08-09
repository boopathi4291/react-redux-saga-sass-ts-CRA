import mongoose from 'mongoose';

import Records from '../models/manage-records';

export const getAllRecords = (req,res) => {
    Records.find().exec((err,records) => {
        records=[{date:"2018-02-10", title: "Celica", amount: 55000},
                {date:"2018-05-20", title: "Boxter", amount: 35000},
                {date:"2018-07-12", title: "test", amount: -35000},
                {date:"2018-02-04", title: "react", amount: 50000}]

    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Todos records successfully',records});
  });
}

export const addRecord = (req,res) => {
    const newRecord = new Record(req.body);
    newRecord.save((err,record) => {
      if(err){
      return res.json({'success':false,'message':'Some Error'});
      }
  return res.json({'success':true,'message':'records added successfully',record});
    })
  }