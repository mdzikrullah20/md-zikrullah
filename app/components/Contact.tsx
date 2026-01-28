import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

type SubmitStatus = "" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `*Hello, I am interested in your services.*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Indian WhatsApp number format: 91 + 10 digit number
    const whatsappNumber = "918084872966";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');

      // Clear form
      setFormData({ name: "", email: "", number: "", message: "" });

      setTimeout(() => setSubmitStatus(""), 3000);
    }, 1000);
  };
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData((prev) => ({
      ...prev,
      number: value,
    }));
  };


  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Contact
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="flex justify-center px-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%]"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-700/50">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#ffae00b3] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFAF00] focus:ring-2 focus:ring-[#FFAF00]/20 transition-all"
                      placeholder="M Zikks"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#ffae00b3] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFAF00] focus:ring-2 focus:ring-[#FFAF00]/20 transition-all"
                      placeholder="zikks@example.com"
                    />
                  </div>
                  {/* mobile no */}
                  <div>
                    <label
                      htmlFor="number"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="number"
                      name="number"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={formData.number}
                      onChange={handleNumberChange}
                      maxLength={10}
                      required
                      placeholder="Enter number"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#ffae00b3] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFAF00] focus:ring-2 focus:ring-[#FFAF00]/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#ffae00b3] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFAF00] focus:ring-2 focus:ring-[#FFAF00]/20 min-h-[150px] transition-all resize-none"
                      placeholder="What would you like to build?"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e as any);
                    }}  
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-8 py-4 cursor-pointer bg-[#FFAF00] text-black rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:bg-[#ffbf33]"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-t-transparent rounded-full border-2 border-black"
                        />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center"
                    >
                      ✓ Opening WhatsApp! Please send the pre-filled message.
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}