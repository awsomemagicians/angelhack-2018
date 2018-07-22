import mongoose from 'mongoose';

import CarSchema from './schema/car';

const Cars = mongoose.model('Cars', CarSchema);

export default Cars;
