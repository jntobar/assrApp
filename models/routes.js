const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jntobar:regalo18J@cluster0.9nlklcx.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
},
/*
mongoose.connect('mongodb://0.0.0.0:27017/router_db', {
    useNewUrlParser: true,
},*/
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');