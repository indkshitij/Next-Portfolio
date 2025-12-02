"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import TriggerToast from "../atoms/TriggerToast";
import Icons from "@/lib/Icons";
import axios from "axios";
import OnClickButton from "../atoms/OnClickButton";
const ContactForm = () => {
  const [sending, setSending] = useState(false);

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
    <div className="p-3 sm:p-5 bg-white/60 rounded-lg shadow-md border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* NAME */}
          <div className="space-y-1.5">
            <label className="text-sm ml-0.5 font-medium text-gray-600">
              Name
            </label>

            <div className="relative flex items-center">
              <Icons icon="name" className="absolute left-3 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="space-y-1.5">
            <label className="text-sm ml-0.5 font-medium text-gray-600">
              Email
            </label>

            <div className="relative flex items-center">
              <Icons icon="mail" className="absolute left-3 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
              />
            </div>
          </div>
        </div>

        {/* SUBJECT */}
        <div className="space-y-1.5">
          <label className="text-sm ml-0.5 font-medium text-gray-600">
            Subject
          </label>

          <div className="relative flex items-center">
            <Icons icon="subject" className="absolute left-3 text-gray-400" />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="space-y-1.5">
          <label className="text-sm ml-0.5 font-medium text-gray-600">
            Message
          </label>

          <div className="relative">
            <Icons
              icon="message"
              className="absolute left-3 top-3 text-gray-400"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={7}
              value={form.message}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F8FAFB] text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-none focus:ring-blue-100 transition-all shadow-lg border border-gray-200/50"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end">
          <OnClickButton
            content={sending ? "Sending ..." : "Send Message"}
            onClick={handleSubmit}
            icon={
              sending ? (
                <Icons icon={"loader"} size={20} />
              ) : (
                <Icons icon={"send-mail"} size={16} />
              )
            }
            bgColor="bg-custom-black"
            textColor="text-white"
            hoverTextColor="#ffffff"
            hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
            minWidth="min-w-full w-full sm:w-fit sm:min-w-40"
          />
          
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
