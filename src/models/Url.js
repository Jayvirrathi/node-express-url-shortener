const appMongoose = require('mongoose');
const Schema = appMongoose.Schema;
const schema = new appMongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  }
});
module.exports = appMongoose.model('url', schema);
