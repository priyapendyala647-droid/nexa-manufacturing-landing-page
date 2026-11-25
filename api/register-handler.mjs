const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const focusAreas = new Set(['production-planning', 'workflow-improvement', 'engineering-support']);
export function validateRegistration(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { ok: false, code: 'INVALID_JSON_BODY' };
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const organization = typeof body.organization === 'string' ? body.organization.trim() : '';
  if (name.length < 2 || name.length > 100) return { ok: false, code: 'INVALID_NAME' };
  if (email.length > 254 || !emailPattern.test(email)) return { ok: false, code: 'INVALID_EMAIL' };
  if (organization.length > 120) return { ok: false, code: 'INVALID_ORGANIZATION' };
  if (!focusAreas.has(body.focusArea)) return { ok: false, code: 'INVALID_FOCUS_AREA' };
  if (body.consent !== true) return { ok: false, code: 'CONSENT_REQUIRED' };
  return { ok: true };
}
export function handleRegistration(payload) {
  const check = validateRegistration(payload);
  if (!check.ok) return { status: 422, body: { success: false, error: check.code } };
  // Acknowledgement only: no production account, mail service, or persistent storage.
  return { status: 200, body: { success: true, message: 'Enquiry validated and received by the registration endpoint.' } };
}
