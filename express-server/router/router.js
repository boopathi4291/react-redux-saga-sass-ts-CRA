import express from 'express';
//import controller file
import * as RecordsController from '../controllers/records';
// get an instance of express router
const router = express.Router()

router.get('/getAllRecords',RecordsController.getAllRecords)

export default router;