const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://xthazudp:1234@nodetaskmanager.wulmn90.mongodb.net/TaskManager?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
