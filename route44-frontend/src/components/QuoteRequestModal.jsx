import { useState } from "react";
import PropTypes from "prop-types";
import { useQuoteModal } from "../context/useQuoteModal";
import { submitForm } from "../utils/api";
import {
  TRANSPORTATION_SERVICES,
  VALUE_ADDED_SERVICES,
} from "../data/servicesTabs";

function QuoteRequestFormPanel({ initialService, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: initialService,
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm({
        form_type: "quote_request",
        name: form.name,
        email: form.email,
        company: form.company || undefined,
        phone: form.phone || undefined,
        service: form.service || undefined,
        message: form.message || undefined,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <span className="material-symbols-outlined text-primary text-[48px] mb-4">
          check_circle
        </span>
        <h3 className="font-headline-md text-headline-md text-primary mb-3">
          Request Sent
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant">
          Thanks, {form.name || "there"} — our team will be in touch within 2
          business hours.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 bg-primary text-on-primary px-6 py-2.5 font-label-md text-sm font-bold hover:brightness-110 transition-all"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-1.5">
        Request a Quote
      </h2>
      <p className="font-body-md text-sm text-on-surface-variant mb-5">
        Tell us what you need and we'll tailor a solution for you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="space-y-1.5">
            <label
              htmlFor="quote-name"
              className="font-label-md text-label-md text-on-surface-variant"
            >
              Full Name *
            </label>
            <input
              id="quote-name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange("name")}
              className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="quote-email"
              className="font-label-md text-label-md text-on-surface-variant"
            >
              Email *
            </label>
            <input
              id="quote-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="space-y-1.5">
            <label
              htmlFor="quote-company"
              className="font-label-md text-label-md text-on-surface-variant"
            >
              Company
            </label>
            <input
              id="quote-company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange("company")}
              className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="quote-phone"
              className="font-label-md text-label-md text-on-surface-variant"
            >
              Phone
            </label>
            <input
              id="quote-phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="quote-service"
            className="font-label-md text-label-md text-on-surface-variant"
          >
            Service
          </label>
          <select
            id="quote-service"
            value={form.service}
            onChange={handleChange("service")}
            className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary appearance-none rounded-lg transition-all"
          >
            <option value="">Select a service</option>
            <optgroup label="Transportation Services">
              {TRANSPORTATION_SERVICES.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Value Added Services">
              {VALUE_ADDED_SERVICES.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="quote-message"
            className="font-label-md text-label-md text-on-surface-variant"
          >
            Message
          </label>
          <textarea
            id="quote-message"
            rows={3}
            value={form.message}
            onChange={handleChange("message")}
            className="w-full px-3 py-2.5 text-sm bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all resize-none"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-error">
            Something went wrong — please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-primary text-on-primary py-3 font-label-md text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Request"}
        </button>
      </form>
    </>
  );
}

QuoteRequestFormPanel.propTypes = {
  initialService: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function QuoteRequestModal() {
  const { isOpen, service, nonce, close } = useQuoteModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={close}
      role="presentation"
    >
      <div
        className="relative w-full max-w-md bg-surface rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Keyed by nonce so a fresh open (even with a different service)
            always mounts a clean form instance instead of syncing via effect. */}
        <QuoteRequestFormPanel
          key={nonce}
          initialService={service}
          onClose={close}
        />
      </div>
    </div>
  );
}

export default QuoteRequestModal;
