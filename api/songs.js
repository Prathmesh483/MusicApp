export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle your GET request logic here
  // Example: res.json({ message: 'Hello from Vercel!' });

  res.status(200).json({ message: 'Hello from Vercel!' });
};
