// backend/db.js
const fs = require('fs');
const path = require('path');

const read = (file) => {
  const filePath = path.join(__dirname, 'data', file);
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf8');
  try { return JSON.parse(data); } catch { return []; }
};

const write = (file, data) => {
  const filePath = path.join(__dirname, 'data', file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { read, write };

