/* eslint-disable */

import express from 'express';
import axios from 'axios';
import fetch from 'node-fetch';
import forEach from 'lodash/forEach';

const router = express.Router();

const secret = 'sk_d8b03d53d63ba255da0197bd';
const url = `https://api.openalpr.com/v2/recognize_bytes?recognize_vehicle=1&country=us&secret_key=${secret}`;
const getPlate = async (data) => { //WITH 64
  try {
    const resData =  await axios.post(url, data.replace(/^data:image\/png;base64,/,""))
    return resData.data;

  } catch (error) {
    console.log('error getPlate');
    throw error;
  }
}
const getObjectArrays = async (data) => {
  try {
  const resData = await axios
    .post('http://171.244.21.155:2255/back/api/obj_detect', {
      data,
    })
    return resData.data;
  } catch (error) {
    console.log('error getObjectArrays');
    throw error;
  }
}
router.post('/checkin',async (req, res) => {
  const { data } = req.body;

  //THIS CODE USE FOR GET OBJECT THEN GET PLATES
  // const objectsData = await getObjectArrays(data);
  // const { carimg, data: rectData } = objectsData;
  // for (let i = 0; i < carimg.length; i++) {
  //   const img = carimg[i];
  //   const plateData = await getPlate(img);
  // }
  const objectsData = await getObjectArrays(data);

  res.status(200).send(objectsData);
});


router.post('/checkout', (req, res) => {
  res.render('index');
});


export default router;
