"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { 
  FaUser, 
  FaPhone, 
  FaCommentDots, 
  FaTimes,
  FaCheckCircle,
  FaPaperPlane
} from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_97usflj",
        "template_m9immuc",
        form,
        "q1s3x3DSUxpAVErUh"
      );
      setForm({ name: "", number: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-black">
      
      {/* Simple Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-0.5 bg-white/20 mx-auto mt-3" />
          <p className="text-gray-500 text-sm mt-4">
            Lets work together
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <form onSubmit={sendEmail} className="space-y-4">
            
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={15} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={15} />
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone"
                  value={form.number}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-600" size={15} />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full py-3.5 text-sm font-medium tracking-wider rounded-xl transition-all duration-300 ${
                isSubmitting
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send
                  <FaPaperPlane size={13} />
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-sm w-full bg-[#111] border border-white/10 rounded-2xl p-8 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes size={18} />
                </button>

                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaCheckCircle className="text-white/60 text-2xl" />
                </div>

                <h3 className="text-xl font-light text-white mb-2">Sent!</h3>

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 w-full py-2.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-white/90 transition-all duration-300"
                >
                  Done
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}