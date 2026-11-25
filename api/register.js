import { handleRegistration } from './register-handler.mjs';
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'METHOD_NOT_ALLOWED' });
  const { status, body } = handleRegistration(req.body);
  return res.status(status).json(body);
}
