import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactRequest, ContactResponse } from "@shared/api";
import Layout from "@/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setFeedback(null);

    const payload: ContactRequest = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(errorBody.error ?? "Unable to send your message.");
      }

      const data = (await response.json()) as ContactResponse;
      if (data.status !== "received") {
        throw new Error("Unexpected response from server.");
      }

      setStatus("success");
      setFeedback("Thank you for your message! We will be in touch soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Have questions about our custom apparel services? We'd love to hear
            from you. Let's discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">
                Contact Info
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-stone-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@alxapparel.com"
                    className="text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    hello@alxapparel.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-stone-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-stone-900 mb-2">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider font-bold text-stone-900 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 text-stone-900 placeholder-stone-500 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider font-bold text-stone-900 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 text-stone-900 placeholder-stone-500 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider font-bold text-stone-900 mb-3">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider font-bold text-stone-900 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 text-stone-900 placeholder-stone-500 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-3 bg-stone-900 text-white uppercase text-sm tracking-wider hover:bg-stone-800 transition-colors font-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  {feedback && (
                    <p
                      className={`text-sm ${
                        status === "error" ? "text-red-600" : "text-green-700"
                      }`}
                      role="status"
                    >
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What is your typical turnaround time?",
                a: "Most custom orders take 2-4 weeks from design approval to delivery, depending on complexity.",
              },
              {
                q: "Do you offer bulk orders?",
                a: "Yes! We offer wholesale pricing for bulk orders. Please contact us for details.",
              },
              {
                q: "Can I see samples before ordering?",
                a: "Absolutely. We can provide samples and fabric swatches upon request.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and PayPal.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-stone-300 pb-8">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
