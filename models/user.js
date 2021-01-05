const mongoose = require('mongoose');
// schema gives the individual records in the collection of mongo db
// const schema = mongoose.schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});
// creating a mongoose model class with name and schema
mongoose.model('users', userSchema);