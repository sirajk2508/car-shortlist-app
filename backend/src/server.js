require('dotenv').config();
const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', carRoutes);

app.get('/', (req, res) => res.send('Car Research API is running...'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});