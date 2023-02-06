const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://xthazudp:1234@nodetaskmanager.wulmn90.mongodb.net/TaskManager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO THE DB.'))
  .catch((err) => console.log(err));
