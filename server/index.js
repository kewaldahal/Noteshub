const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const adminAuthRoutes = require('./routes/adminAuth');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', authRoutes);              // student auth
app.use('/api/notes', notesRoutes);            // notes
app.use('/api/adminauth', adminAuthRoutes);    // admin login only

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
