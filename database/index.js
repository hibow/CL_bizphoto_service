const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const url = 'mongodb://localhost';
const mongoDBURI = process.env.MONGOLAB_URI || url;

mongoose.connect(mongoDBURI,
  {
    dbName: 'Yelp',
    useNewUrlParser: true,
  }).then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

const bizSchema = mongoose.Schema({
  bId: Number,
  bizname: String,
  reviewCount: Number,
  rating: Number,
  price: String,
  category: [String],
  location: Object,
  phone: String,
  url: String,
  photos: [Number],
});

const Biz = mongoose.model('Biz', bizSchema);

const photoSchema = mongoose.Schema({
  pId: Number,
  imgUrl: String,
  uId: Number,
  bId: Number,
  text: String,
  tag: String,
});
const Photo = mongoose.model('Photo', photoSchema);

const userSchema = mongoose.Schema({
  uId: Number,
  userav: String,
  username: String,
});
const User = mongoose.model('User', userSchema);
module.exports = {
  Biz,
  Photo,
  User,
  db,
};
