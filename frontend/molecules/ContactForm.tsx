"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import TriggerToast from "../atoms/TriggerToast";
import Icons from "@/lib/Icons";
import axios from "axios";
const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (sending) return;
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setSending(false);
      return TriggerToast({
        message: "⚠️ Please fill all fields!",
        type: "error",
        variant: "solid",
      });
    }

    try {
      setSending(true);

      const { data } = await axios.post("/api/email/send", form);

      if (data.success) {
        TriggerToast({
          message: "📨 Message Sent Successfully!",
          type: "success",
          variant: "solid",
        });

        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        TriggerToast({
          message: "❌ Failed to send email!",
          type: "error",
          variant: "glass",
        });
      }
    } catch (err) {
      console.log(err);
      TriggerToast({
        message: "❌ Server Error. Try again!",
        type: "error",
        variant: "solid",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="p-3 sm:p-6 bg-white/60 rounded-xl shadow-md border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* NAME */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">Name</label>

            <div className="relative flex items-center">
              <Icons icon="name" className="absolute left-3 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">Email</label>

            <div className="relative flex items-center">
              <Icons icon="mail" className="absolute left-3 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
              />
            </div>
          </div>
        </div>

        {/* SUBJECT */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-600">Subject</label>

          <div className="relative flex items-center">
            <Icons icon="subject" className="absolute left-3 text-gray-400" />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-600">Message</label>

          <div className="relative">
            <Icons
              icon="message"
              className="absolute left-3 top-3 text-gray-400"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end">
          <button
            type="submit"
  
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            disabled={sending}
            className={`min-w-full sm:min-w-52 relative bg-custom-black px-5 py-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:shadow-[0_5px_14px_rgba(0,0,0,0.4)] backdrop-blur-md ${sending ? "opacity-80 cursor-not-allowed" : "cursor-pointer"} `}
            style={{ color: "#ffffff" }}
          >
            {!sending && (
              <span
                className={` absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 bg-[linear-gradient(180deg,#498DE6_0%,#2C62B9_50%,#103893_100%)] transition-transform duration-500 ease-in-out ${hovered ? "scale-[45]" : "scale-0"}`}
              ></span>
            )}

            {/* Idle Text */}
            <div
              className={`flex justify-center items-center gap-2 relative z-30 font-mono text-md tracking-wide transition-all duration-300 ${sending && "flex-row-reverse"}`}
            >
              {sending ? "Sending ..." : "Send Message"}

              <span className="relative z-20 transition-all duration-300">
                <Icons icon={`${sending ? "loader" : "send-mail"}`} size={18} />
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
