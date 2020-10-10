const mongoose = require('mongoose');


// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;
const models = {

}

const startDB = ({url, db }) => mongoose.connect(`mongodb://${url}/${db}`);
module.exports = {startDB,models} 
