const https = require('https');

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const models = json.models.map(m => m.name);
    console.log(models.filter(m => m.includes('flash')));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
