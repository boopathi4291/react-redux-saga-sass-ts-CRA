import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  date: String,
  title: String,
  amount:Number,
});
export default mongoose.model('Records', Schema);