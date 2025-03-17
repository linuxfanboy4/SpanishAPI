const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const dictionaryFilePath = path.join(__dirname, 'dictionary.json');
let dictionary = {};

fs.readFile(dictionaryFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error loading dictionary file:", err);
    process.exit(1);
  }
  dictionary = JSON.parse(data);
});

app.use(express.json());

const translateWord = (word) => {
  return dictionary[word.toLowerCase()] || null;
};

const translateSentence = (sentence) => {
  const words = sentence.split(' ');
  const translatedWords = words.map(word => {
    return translateWord(word) || word;
  });
  return translatedWords.join(' ');
};

app.get('/translate/word/:word', (req, res) => {
  const word = req.params.word;
  const translation = translateWord(word);
  if (translation) {
    return res.json({ word, translation });
  }
  res.status(404).json({ error: 'Translation not found' });
});

app.post('/translate/sentence', (req, res) => {
  const { sentence } = req.body;
  if (!sentence || typeof sentence !== 'string') {
    return res.status(400).json({ error: 'Invalid sentence' });
  }
  const translation = translateSentence(sentence);
  return res.json({ sentence, translation });
});

app.get('/dictionary', (req, res) => {
  return res.json(Object.keys(dictionary));
});

app.listen(PORT, () => {
  console.log(`SpanishAPI is running on http://localhost:${PORT}`);
});
