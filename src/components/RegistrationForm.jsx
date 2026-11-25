import { useState } from 'react';

const initialValues = { name: '', email: '', organization: '', focusArea: '', consent: false };

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid work email address.';
  if (values.organization.trim().length > 120) errors.organization = 'Organization must be 120 characters or fewer.';
  if (!values.focusArea) errors.focusArea = 'Please select a focus area.';
  if (!values.consent) errors.consent = 'Please agree to be contacted about this enquiry.';
  return errors;
}

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      setStatusMessage('Please review the highlighted fields.');
      const firstInvalidName = Object.keys(nextErrors)[0];
      const firstInvalid = event.currentTarget.querySelector(`[name="${firstInvalidName}"]`);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setStatus('loading');
    setStatusMessage('Sending your enquiry…');
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'REQUEST_FAILED');
      setStatus('success');
      setStatusMessage('Thanks. Your enquiry was received by the local registration endpoint.');
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus('error');
      setStatusMessage('We could not process the enquiry. Please review the form and try again.');
    }
  };

  const fieldError = (name) => errors[name] ? `${name}-error` : undefined;

  return (
    <section className="registration-section section-shell" id="register" aria-labelledby="registration-title">
      <div className="registration-intro">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2 id="registration-title">Let’s talk about your project</h2>
        <p>Share your details and preferred focus. We will review your enquiry.</p>
        <div className="privacy-note" id="privacy">
          <strong>Your details stay focused on this enquiry.</strong>
          <p>Contact details entered in this form are used to respond to this enquiry. The supplied local API validates requests and returns an acknowledgement; it does not store personal data.</p>
        </div>
      </div>
      <form className="registration-form" onSubmit={submit} noValidate>
        <div className="form-field">
          <label htmlFor="full-name">Full name <span aria-hidden="true">*</span></label>
          <input id="full-name" name="name" type="text" autoComplete="name" placeholder="Your name" value={values.name} onChange={update} required minLength="2" maxLength="100" aria-invalid={Boolean(errors.name)} aria-describedby={fieldError('name')} />
          {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="work-email">Work email <span aria-hidden="true">*</span></label>
          <input id="work-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" value={values.email} onChange={update} required maxLength="254" aria-invalid={Boolean(errors.email)} aria-describedby={fieldError('email')} />
          {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="organization">Organization <span className="optional">(optional)</span></label>
          <input id="organization" name="organization" type="text" autoComplete="organization" placeholder="Company or organization" value={values.organization} onChange={update} maxLength="120" aria-invalid={Boolean(errors.organization)} aria-describedby={fieldError('organization')} />
          {errors.organization && <p className="field-error" id="organization-error">{errors.organization}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="focus-area">Focus area <span aria-hidden="true">*</span></label>
          <select id="focus-area" name="focusArea" value={values.focusArea} onChange={update} required aria-invalid={Boolean(errors.focusArea)} aria-describedby={fieldError('focusArea')}>
            <option value="">Select an area</option>
            <option value="production-planning">Production planning</option>
            <option value="workflow-improvement">Workflow improvement</option>
            <option value="engineering-support">Engineering support</option>
          </select>
          {errors.focusArea && <p className="field-error" id="focusArea-error">{errors.focusArea}</p>}
        </div>
        <div className="consent-field">
          <input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={update} required aria-invalid={Boolean(errors.consent)} aria-describedby={fieldError('consent')} />
          <label htmlFor="consent">I agree to be contacted about this enquiry.</label>
        </div>
        {errors.consent && <p className="field-error consent-error" id="consent-error">{errors.consent}</p>}
        <button className="button button-primary submit-button" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">{statusMessage}</p>
      </form>
    </section>
  );
}
