const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const notesController = require('../controllers/notesController');

// multer storage setuppppp
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// upload route
router.post('/upload', upload.single('file'), notesController.uploadNote);

module.exports = router;
