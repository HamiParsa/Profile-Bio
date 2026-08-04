"use client";

import { useState, useEffect, ChangeEvent, FormEvent, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { 
  FaUser, 
  FaPhone, 
  FaCommentDots, 
  FaTimes,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaSpinner
} from "react-icons/fa";

// ============================================================
// TYPES
// ============================================================

interface FormData {
  name: string;
  number: string;
  message: string;
}

// ============================================================
// CONTACT FORM COMPONENT
// ============================================================

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<FormData>({ 
    name: "", 
    number: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<"idle" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState<boolean>(false);

  // ============================================================
  // HANDLERS
  // ============================================================

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setModalStatus("idle");
    
    try {
      await emailjs.send(
        "service_np5zft2",
        "template_m9immuc",
        { ...form },
        "q1s3x3DSUxpAVErUh"
      );
      setForm({ name: "", number: "", message: "" });
      setModalStatus("success");
      setShowModal(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setModalStatus("error");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
    setTimeout(() => setModalStatus("idle"), 300);
  };

  // ============================================================
  // EFFECTS
  // ============================================================

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* ==========================================================
            HEADER
            ========================================================== */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/20 mb-4">
            <FaPaperPlane className="text-orange-300 text-xs" />
            <span className="text-[10px] font-medium text-orange-300 tracking-wider uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-0.5 bg-orange-400/30 mx-auto mt-3" />
          <p className="text-gray-500 text-sm mt-4">
            Let&apos;s work together
          </p>
        </motion.div>

        {/* ==========================================================
            FORM
            ========================================================== */}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-orange-400/30 transition-all duration-300"
        >
          <form onSubmit={sendEmail} className="space-y-4">
            {/* Name + Phone - زیر هم */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-300 transition-colors duration-300" size={15} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-all duration-300"
                  required
                />
              </div>
              <div className="relative group">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-300 transition-colors duration-300" size={15} />
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone"
                  value={form.number}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <FaCommentDots className="absolute left-4 top-4 text-gray-600 group-focus-within:text-orange-300 transition-colors duration-300" size={15} />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full py-3.5 text-sm font-medium tracking-wider rounded-xl transition-all duration-300 ${
                isSubmitting
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-orange-400/20 text-orange-300 border border-orange-400/30 hover:bg-orange-400/30 shadow-lg shadow-orange-400/10"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" size={16} />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <FaPaperPlane size={13} />
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* ==========================================================
            SUCCESS/ERROR MODAL - خفن و شیک
            ========================================================== */}
        
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-md w-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border rounded-2xl p-8 text-center shadow-2xl"
                style={{
                  borderColor: modalStatus === "success" 
                    ? "rgba(74, 222, 128, 0.3)" 
                    : "rgba(248, 113, 113, 0.3)"
                }}
              >
                {/* Close Button - فقط با کلیک روی این دکمه بسته میشه */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                  <FaTimes size={18} />
                </button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: modalStatus === "success" 
                      ? "rgba(74, 222, 128, 0.15)" 
                      : "rgba(248, 113, 113, 0.15)",
                    border: `2px solid ${
                      modalStatus === "success" 
                        ? "rgba(74, 222, 128, 0.3)" 
                        : "rgba(248, 113, 113, 0.3)"
                    }`
                  }}
                >
                  {modalStatus === "success" ? (
                    <FaCheckCircle className="text-4xl text-green-400" />
                  ) : (
                    <FaExclamationCircle className="text-4xl text-red-400" />
                  )}
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: modalStatus === "success" ? "#4ADE80" : "#F87171"
                  }}
                >
                  {modalStatus === "success" ? "Message Sent! 🎉" : "Oops! Something went wrong"}
                </h3>

                {/* Message */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {modalStatus === "success" 
                    ? "Your message has been sent successfully. I'll get back to you as soon as possible."
                    : "We couldn't send your message. Please check your connection and try again, or contact me directly via email."
                  }
                </p>

                {/* Button - فقط با کلیک روی این دکمه بسته میشه */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 text-sm font-medium rounded-xl transition-all duration-300"
                  style={{
                    background: modalStatus === "success" 
                      ? "linear-gradient(135deg, #4ADE80, #22C55E)" 
                      : "linear-gradient(135deg, #F87171, #EF4444)",
                    color: "#0A0A0A"
                  }}
                >
                  {modalStatus === "success" ? "Got it! ✅" : "Try Again 🔄"}
                </motion.button>

                {/* Subtle glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-3xl opacity-20 -z-10"
                  style={{
                    background: modalStatus === "success" 
                      ? "radial-gradient(circle, #4ADE80, transparent 70%)" 
                      : "radial-gradient(circle, #F87171, transparent 70%)"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}