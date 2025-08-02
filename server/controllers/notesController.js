const db = require('../config/db');

const uploadNote = async (req, res) => {
  try {
    const { title, subject } = req.body;
    const filePath = req.file.path;

    if (!title || !subject || !filePath) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const [result] = await db.execute(
      'INSERT INTO notes (title, subject, file_path) VALUES (?, ?, ?)',
      [title, subject, filePath]
    );

    res.status(201).json({ message: 'Note uploaded successfully', noteId: result.insertId });
  } catch (err) {
    console.error('Upload faild:', err.message);
    res.status(500).json({ error: 'Failed to upload note' });
  }
};

module.exports = {
  uploadNote,
};
