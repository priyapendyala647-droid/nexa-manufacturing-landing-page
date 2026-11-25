import test from 'node:test';
import assert from 'node:assert/strict';
import { handleRegistration } from '../api/register-handler.mjs';
const good = { name: 'Alex Rao', email: 'alex@example.com', organization: '', focusArea: 'production-planning', consent: true };
test('valid request receives success acknowledgement', () => assert.equal(handleRegistration(good).status, 200));
test('reject invalid email', () => assert.equal(handleRegistration({ ...good, email: 'invalid' }).status, 422));
test('reject missing consent', () => assert.equal(handleRegistration({ ...good, consent: false }).status, 422));
test('reject unknown focus', () => assert.equal(handleRegistration({ ...good, focusArea: 'other' }).status, 422));
