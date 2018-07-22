import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:1235/', (err) => {
  if (err) throw err;
  console.log('Successfully connected to MongoDB');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

export default db;
