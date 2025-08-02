const db = require('./db');

(async () => {
  try {
    const [rows] = await db.execute('SELECT 1 + 1 AS result');
    console.log(' DB connected! Result:', rows[0].result);
    process.exit();
  } catch (err) {
    console.error(' DB connection failed:', err.message);
    process.exit(1);
  }
})();
