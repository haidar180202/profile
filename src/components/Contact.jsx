import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      alert("Thank you for reaching out! Muhammad Haidar Shahab has received your message and will get back to you shortly.");
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 600);
  };

  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold tracking-wider text-primary uppercase">
              Get In Touch
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg leading-relaxed">
              Have a question about my engineering footprint or interested in discussing full-stack scalable web architecture? Send a message below.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700/60">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold text-dark dark:text-slate-200 mb-2">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-3.5 text-dark dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold text-dark dark:text-slate-200 mb-2">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@enterprise.com"
              className="w-full rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-3.5 text-dark dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-bold text-dark dark:text-slate-200 mb-2">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details about your project, architecture needs, or collaboration opportunities..."
              className="w-full rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-3.5 text-dark dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full rounded-xl bg-primary py-4 px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60"
          >
            {submitted ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;