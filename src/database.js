// Conexión a base de datos
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yummi-users')
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));