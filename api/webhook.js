// api/webhook.js - Hani AI Assistant
export default async function handler(req, res) {
  const VERIFY_TOKEN = "hani2026";
  
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.sendStatus(403);
  }
  
  if (req.method === 'POST') {
    console.log('Received message:', req.body);
    return res.sendStatus(200);
  }
}
