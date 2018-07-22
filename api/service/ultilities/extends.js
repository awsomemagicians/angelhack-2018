import mongoose from 'mongoose';


export const addHours = (from, hours) => {
  const final = new Date();
  final.setTime(from.getTime() + (hours * 60 * 60 * 1000));
  return final;
};


export const addMinutes = () => {};

export const toObjectId = (text) => {
  const { Types: { ObjectId } } = mongoose;
  return new ObjectId(text);
};

