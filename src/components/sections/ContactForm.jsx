import { useRef, useState } from 'react';
import { contactDetails } from '../../data/site';
import { services } from '../../data/services';
import Button from '../ui/Button';
import { Mail } from '../ui/Icon';
import './ContactForm.css';

/**
 * Contact form.
 *
 * IMPORTANT — this site has no server, so the form does not pretend to
 * submit anywhere. On submit it composes a structured email and hands it
 * to the visitor's mail client. If a form backend is added later, replace
 * the contents of `handleSubmit` and keep the same validation and states.
 */

const budgets = [
  'Under ₦500,000 / $500',
  '₦500,000 – ₦2,000,000 / $500 – $2,000',
  '₦2,000,000 – ₦8,000,000 / $2,000 – $8,000',
  'Above ₦8,000,000 / $8,000+',
  'Not decided yet',
];

const emptyForm = {
  fullName: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

function validate(values) {
  const next = {};

  if (!values.fullName.trim()) next.fullName = 'Please enter your name.';

  if (!values.email.trim()) {
    next.email = 'Please enter an email address so we can reply.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    next.email = 'That email address does not look complete.';
  }

  if (!values.message.trim()) {
    next.message = 'Tell us a little about what you need.';
  } else if (values.message.trim().length < 20) {
    next.message = 'A sentence or two more would help us respond properly.';
  }

  return next;
}

function buildMailto(values) {
  const subject = `Project inquiry — ${values.service || 'General enquiry'}`;
  const body = [
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.company && `Company: ${values.company}`,
    values.service && `Service needed: ${values.service}`,
    values.budget && `Budget range: ${values.budget}`,
    '',
    'Project description:',
    values.message,
    '',
    '— Sent from the VUEW website contact form',
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);

    if (touched[name]) {
      setErrors(validate(nextForm));
    }
  };

  const markTouched = (event) => {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({ fullName: true, email: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = formRef.current?.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    // Brief "opening" state while the mail client is handed the message.
    setStatus('opening');
    window.setTimeout(() => {
      window.location.href = buildMailto(form);
      setStatus('success');
    }, 250);
  };

  const resetForm = () => {
    setForm(emptyForm);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="status">
        <span className="empty__mark" aria-hidden="true">
          <Mail size={20} />
        </span>
        <h2 className="contact-form__success-title">Thank you for reaching out to VUEW.</h2>
        <p>
          Your email app should now be open with your details filled in. Send that message and we
          will review the details and reply with next steps.
        </p>
        <p className="contact-form__success-note">
          Email app did not open? Write to{' '}
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> directly.
        </p>
        <Button variant="ghost" onClick={resetForm} withArrow>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <p className="contact-form__hint">
        This website has no server, so submitting the form opens your email app with the details
        below filled in. Nothing is stored or sent automatically.
      </p>

      {errorCount > 0 && touched.fullName && (
        <p className="contact-form__summary" role="alert">
          Please check the highlighted fields below.
        </p>
      )}

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="fullName">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={updateField}
            onBlur={markTouched}
            placeholder="Your name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <span className="contact-form__error" id="fullName-error">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            onBlur={markTouched}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span className="contact-form__error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="company">Company / organization</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={updateField}
            placeholder="Optional"
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="service">Service needed</label>
          <select id="service" name="service" value={form.service} onChange={updateField}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">
          Tell us about your project <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="What are you building, what problem are you solving, and what would you like help with?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
        />
        {errors.message ? (
          <span className="contact-form__error" id="message-error">
            {errors.message}
          </span>
        ) : (
          <span className="contact-form__hint-inline" id="message-hint">
            A short paragraph is enough. Deadlines and existing links are useful.
          </span>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" value={form.budget} onChange={updateField}>
          <option value="">Optional — helps us scope realistically</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__submit">
        <Button
          type="submit"
          size="lg"
          withArrow
          disabled={status === 'opening'}
          className="contact-form__button"
        >
          {status === 'opening' ? 'Opening your email app…' : 'Send project inquiry'}
        </Button>
      </div>
    </form>
  );
}
