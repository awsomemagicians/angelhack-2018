
/* eslint-disable consistent-return */

import { Schema } from 'mongoose';

const CarSchema = new Schema({
  // Default
  number: { type: String },
  checkInTime: { type: Date },
  checkOutTime: { type: Date },
});


export default CarSchema;
