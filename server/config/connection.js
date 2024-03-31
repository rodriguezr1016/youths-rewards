const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/youths-reward');

module.exports = mongoose.connection;

// username: rodriguezr1016 password:WHP9zzhZU_bh9j2