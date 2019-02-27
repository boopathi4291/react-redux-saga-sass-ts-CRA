//import mongoose from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myExpenses");
var Schema = mongoose.Schema({
  date: String,
  title: String,
  amount:Number,
});
var myDataModel = mongoose.model('expenseRecords', Schema);
module.exports = myDataModel;
