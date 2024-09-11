import express from 'express';
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to handle the extracted text
app.post('/process-text', (req, res) => {
  const { text } = req.body;
  console.log("Received text:", text);

  // Process the text or store it as needed

  // Send a response
  res.json({ message: `Text received: ${text}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
