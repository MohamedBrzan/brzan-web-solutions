import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const baseUrl = import.meta.env.VITE_BASE_URL;
if (!baseUrl) throw new Error("Missing VITE_BASE_URL");

type ContactData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;

      toast({
        title: "Validation Error",
        description: Object.values(fieldErrors).flat().join(" • "),
        variant: "destructive",
      });

      setLoading(false);
      return;
    }

    try {
      await fetch(`${baseUrl}/mail/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);

      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors min-h-32"
          placeholder="Your message here..."
          rows={6}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
