import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Download,
} from "lucide-react";
import { contactInfo, socialLinks } from "../data/contactData";
import { useFormValidation } from "../hooks/useFormValidation";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const iconMap = { Mail, Phone, MapPin, Github, Linkedin };
const EMAIL = import.meta.env.VITE_EMAIL || "rpengonda1@gmail.com";
const RESUME_URL =
  import.meta.env.VITE_RESUME_URL || `${import.meta.env.BASE_URL}resume.pdf`;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const validationRules = {
    name: [{ required: true }, { minLength: 2 }],
    email: [{ required: true }, { email: true }],
    subject: [{ required: true }, { minLength: 3 }],
    message: [{ required: true }, { minLength: 10 }],
  };

  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateForm,
    resetForm,
  } = useFormValidation(
    { name: "", email: "", subject: "", message: "" },
    validationRules
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("config-error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey }
      );
      setSubmitStatus("success");
      resetForm();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName) => {
    const base =
      "w-full rounded-xl border bg-white/60 px-4 py-3 font-sans text-sm text-mac-text placeholder:text-mac-text-secondary/60 focus:outline-none focus:ring-2 transition-all duration-200 dark:bg-white/[0.03] dark:text-gray-100";
    const border = errors[fieldName]
      ? "border-red-400 focus:ring-red-300"
      : "border-mac-border focus:border-od-orange focus:ring-od-orange/20 dark:border-white/15 dark:focus:border-od-orange";
    return `${base} ${border}`;
  };

  const StatusBanner = () => {
    if (submitStatus === "success")
      return (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-od-green/40 bg-od-green/10 p-3.5 text-sm text-mac-text dark:text-gray-100">
          <CheckCircle size={18} className="flex-shrink-0 text-od-green" />
          Thanks! Your message is on its way. I'll get back to you within 24–48 hours.
        </div>
      );
    if (submitStatus === "error")
      return (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-od-red/40 bg-od-red/10 p-3.5 text-sm text-mac-text dark:text-gray-100">
          <AlertCircle size={18} className="flex-shrink-0 text-od-red" />
          Something went wrong sending that. Please{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium underline underline-offset-2">
            email me
          </a>{" "}
          directly instead.
        </div>
      );
    if (submitStatus === "config-error")
      return (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-od-orange/40 bg-od-orange/10 p-3.5 text-sm text-mac-text dark:text-gray-100">
          <AlertCircle size={18} className="flex-shrink-0 text-od-orange" />
          Email service isn't configured yet — please use the{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium underline underline-offset-2">
            mailto link
          </a>{" "}
          while I finish setup.
        </div>
      );
    return null;
  };

  return (
    <section
      id="contact"
      className="section-alt py-16 transition-colors duration-300 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-12 sm:mb-16">
            <SectionLabel
              command="./contact.sh"
              output="channel open · usually reply within 24–48h"
            />
            <h2 className="text-3xl font-bold tracking-tight text-mac-text dark:text-white sm:text-4xl md:text-5xl">
              Get In <span className="text-od-orange">Touch</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
              {/* Form panel */}
              <div className="glass-strong rounded-2xl p-6 shadow-mac sm:p-8">
                <h3 className="mb-1 font-mono text-base font-semibold text-mac-text dark:text-gray-100">
                  Send me a message
                </h3>
                <p className="mb-6 font-mono text-xs text-mac-text-secondary dark:text-gray-500">
                  # Usually reply within 24–48 hours
                </p>

                <StatusBanner />

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block font-mono text-xs text-mac-text-secondary dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={getInputClass("name")}
                        placeholder="Jane Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 font-mono text-xs text-od-red">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block font-mono text-xs text-mac-text-secondary dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={getInputClass("email")}
                        placeholder="jane@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 font-mono text-xs text-od-red">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block font-mono text-xs text-mac-text-secondary dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={getInputClass("subject")}
                      placeholder="Role / project / question"
                    />
                    {errors.subject && (
                      <p className="mt-1 font-mono text-xs text-od-red">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block font-mono text-xs text-mac-text-secondary dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={getInputClass("message")}
                      placeholder="Tell me about the project or opportunity..."
                    />
                    {errors.message && (
                      <p className="mt-1 font-mono text-xs text-od-red">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-od-orange px-6 py-3 font-mono text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-od-orange/90 hover:shadow-glow-orange disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> send message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info column */}
              <div className="flex flex-col gap-6">
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover flex items-center gap-3 rounded-xl p-3.5"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-od-orange/10 text-od-orange">
                        {iconMap[info.icon] &&
                          (() => {
                            const Icon = iconMap[info.icon];
                            return <Icon size={18} />;
                          })()}
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono text-xs text-mac-text-secondary dark:text-gray-400">
                          {info.title}
                        </div>
                        <div className="truncate text-sm text-mac-text dark:text-gray-100">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Resume */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-strong glass-hover flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-medium text-mac-text dark:text-white"
                >
                  <Download size={15} className="text-od-green" />
                  download resume
                </a>

                {/* Socials */}
                <div>
                  <h3 className="mb-3 font-mono text-sm font-semibold text-mac-text dark:text-gray-100">
                    Connect
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = iconMap[social.icon];
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="glass glass-hover rounded-xl p-3 text-mac-text-secondary transition-colors hover:text-od-orange dark:text-gray-200"
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;