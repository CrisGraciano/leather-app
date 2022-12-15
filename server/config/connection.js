const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI || 'mongodb://localhost:27017/leather-store');
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/leather-store',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
).catch(e => console.log(e));