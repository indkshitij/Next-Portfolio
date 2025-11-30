"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import TriggerToast from "../atoms/TriggerToast";
import Icons from "@/lib/Icons";
import axios from "axios";

const ContactForm = () => {
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
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      return TriggerToast({
        message: "⚠️ Please fill all fields!",
        type: "error",
        variant: "outline",
      });
    }

    try {
      const { data } = await axios.post("/api/email/send", form);

      if (data.success) {
        TriggerToast({
          message: "📨 Message Sent Successfully!",
          type: "success",
        });

        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        TriggerToast({
          message: "❌ Failed to send email!",
          type: "error",
          variant: "outline",
        });
      }
    } catch (err) {
      console.log(err);
      TriggerToast({
        message: "❌ Server Error. Try again!",
        type: "error",
        variant: "outline",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-3">
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
                className="
              w-full pl-10 pr-4 py-3
              rounded-lg 
              bg-[#F8FAFB]
              border border-gray-200
              text-gray-800 placeholder-gray-400
              focus:border-blue-500 
              focus:ring-4 focus:ring-blue-100
              transition-all 
              shadow-sm
            "
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
                className="
              w-full pl-10 pr-4 py-3
              rounded-lg 
              bg-[#F8FAFB]
              border border-gray-200
              text-gray-800 placeholder-gray-400
              focus:border-blue-500 
              focus:ring-4 focus:ring-blue-100
              transition-all 
              shadow-sm
            "
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
              className="
            w-full pl-10 pr-4 py-3
            rounded-lg 
            bg-[#F8FAFB]
            border border-gray-200
            text-gray-800 placeholder-gray-400
            focus:border-blue-500 
            focus:ring-4 focus:ring-blue-100
            transition-all 
            shadow-sm
          "
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
              className="
            w-full pl-10 pr-4 py-3
            rounded-lg 
            bg-[#F8FAFB]
            border border-gray-200
            text-gray-800 placeholder-gray-400
            focus:border-blue-500 
            focus:ring-4 focus:ring-blue-100
            transition-all 
            shadow-sm
          "
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="
        w-full py-3 
        bg-blue-600 text-white 
        rounded-lg
        font-semibold 
        hover:bg-blue-700 
        transition-all
        shadow-md hover:shadow-lg
      "
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
