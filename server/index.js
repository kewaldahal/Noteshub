const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
