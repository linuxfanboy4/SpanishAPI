# SpanishAPI - A Robust Translation API for English to Spanish
## Overview

SpanishAPI is a **powerful** and **efficient** RESTful API designed to facilitate seamless translation of English words and sentences into Spanish. Built with **Express.js**, this API leverages a comprehensive dictionary to provide accurate and instant translations. Whether you're building a language learning app, a multilingual website, or simply need a reliable translation tool, SpanishAPI is engineered to meet your needs.

## Features

- **Word Translation**: Translate individual English words into Spanish with ease.
- **Sentence Translation**: Effortlessly translate entire sentences from English to Spanish.
- **Extensive Dictionary**: A robust and expansive dictionary with over 300+ entries, covering a wide range of vocabulary.
- **RESTful Endpoints**: Intuitive and well-structured endpoints for seamless integration.
- **Scalable Architecture**: Designed to handle high traffic and scale effortlessly.
- **Error Handling**: Comprehensive error responses for invalid inputs or missing translations.

---

## API Endpoints

### 1. Translate a Single Word
**Endpoint:** `GET /translate/word/:word`  
**Description:** Translates a single English word into Spanish.  
**Example Request:**  
```
GET https://spanishapi.onrender.com/translate/word/hello
```
**Example Response:**  
```json
{
  "word": "hello",
  "translation": "hola"
}
```
**Error Response:**  
```json
{
  "error": "Translation not found"
}
```

---

### 2. Translate a Sentence
**Endpoint:** `POST /translate/sentence`  
**Description:** Translates an entire English sentence into Spanish.  
**Request Body:**  
```json
{
  "sentence": "good morning"
}
```
**Example Response:**  
```json
{
  "sentence": "good morning",
  "translation": "buenos días"
}
```
**Error Response:**  
```json
{
  "error": "Invalid sentence"
}
```

---

### 3. Retrieve Dictionary Keys
**Endpoint:** `GET /dictionary`  
**Description:** Returns a list of all English words available in the dictionary.  
**Example Response:**  
```json
[
  "hello",
  "world",
  "good",
  "cat",
  "dog",
  ...
]
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/spanishapi.git
   cd spanishapi
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The API will be running at `http://localhost:3000`.

---

## Deployment

SpanishAPI is deployed on **Render**, a modern cloud platform for hosting web services. The live API is accessible at [https://spanishapi.onrender.com/](https://spanishapi.onrender.com/).

## Usage Examples

### Using cURL
1. **Translate a Word:**
   ```bash
   curl -X GET https://spanishapi.onrender.com/translate/word/hello
   ```
2. **Translate a Sentence:**
   ```bash
   curl -X POST https://spanishapi.onrender.com/translate/sentence \
   -H "Content-Type: application/json" \
   -d '{"sentence": "good evening"}'
   ```

### Using JavaScript (Fetch API)
```javascript
// Translate a word
fetch('https://spanishapi.onrender.com/translate/word/hello')
  .then(response => response.json())
  .then(data => console.log(data));

// Translate a sentence
fetch('https://spanishapi.onrender.com/translate/sentence', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sentence: 'good evening' })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Contributing

We welcome contributions to enhance SpanishAPI! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

# License

SpanishAPI is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
