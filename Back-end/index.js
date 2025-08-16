const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
// Import your models
const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Wishlist = require('./models/Wishlist');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://roudydlebtani009:Tj9slKtnfu5CFbYL@cluster0.annqa9z.mongodb.net/";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log("MongoDB connected");

 app.use('/api', routes);
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
