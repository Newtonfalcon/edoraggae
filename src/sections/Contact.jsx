import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";
import { SocialIcon } from "../components/Footer";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f7f2] bg-mesh relative">
      <div className="absolute top-0 left-0 w-full h-px bg-[#5A5A40]/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#e9edc9] border border-[#e5e1d8] text-xs text-[#5A5A40] font-sans font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Connect</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4">
            {siteData.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6b705c] font-medium">
            {siteData.contact.subtitle}
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f5f2e9] border border-[#e5e1d8] rounded-[32px] p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#bc6c25] via-[#5A5A40] to-[#faedcd]" />

              <h3 className="font-display font-bold text-xl text-[#283618] mb-2 italic">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#e9edc9]/50 border border-[#e5e1d8] text-[#bc6c25] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6b705c] uppercase font-mono tracking-wider font-bold block">
                      Office Address
                    </span>
                    <p className="text-sm text-[#283618] leading-relaxed mt-1 font-medium">
                      {siteData.office}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#faedcd]/50 border border-[#e5e1d8] text-[#bc6c25] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6b705c] uppercase font-mono tracking-wider font-bold block">
                      Phone &amp; Hotline
                    </span>
                    <a
                      href={siteData.socials.phone}
                      className="text-sm text-[#283618] hover:text-[#bc6c25] transition-colors block mt-1 font-bold"
                    >
                      {siteData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#faedcd]/50 border border-[#e5e1d8] text-[#bc6c25] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6b705c] uppercase font-mono tracking-wider font-bold block">
                      Email Address
                    </span>
                    <a
                      href={siteData.socials.email}
                      className="text-sm text-[#283618] hover:text-[#bc6c25] transition-colors block mt-1 font-medium"
                    >
                      {siteData.contact.emailDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#e9edc9]/50 border border-[#e5e1d8] text-[#bc6c25] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6b705c] uppercase font-mono tracking-wider font-bold block">
                      Working Hours
                    </span>
                    <p className="text-xs text-[#283618] font-medium leading-normal mt-1">
                      {siteData.contact.hours}
                    </p>
                  </div>
                </div>

              </div>

              <hr className="border-[#e5e1d8]" />

              {/* Direct channels */}
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono font-extrabold text-[#bc6c25] block mb-3">
                  Follow official channels
                </span>
                <div className="flex items-center space-x-3">
                  {Object.entries(siteData.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-10 h-10 rounded-full bg-[#fefae0] hover:bg-[#5A5A40] text-[#6b705c] hover:text-[#fefae0] border border-[#e5e1d8] flex items-center justify-center transition-all duration-300 shadow-xs"
                      title={`Follow on ${platform}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon platform={platform} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact/Feedback form */}
          <div className="lg:col-span-7 bg-[#f5f2e9] border border-[#e5e1d8] rounded-[32px] p-6 sm:p-8 shadow-xs">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="font-display font-bold text-xl text-[#283618] mb-1 italic">
                    Send Us A Message
                  </h3>
                  <p className="text-xs text-[#6b705c] leading-relaxed">
                    Leave your questions regarding sponsorship stalls, artist bookings, ticketing details or media passes below.
                  </p>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#283618] uppercase tracking-wider mb-2">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Osas Osagie"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#fefae0] border border-[#e5e1d8] focus:border-[#bc6c25] focus:outline-none text-sm text-[#283618] transition-all placeholder:text-[#6b705c]/50 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#283618] uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="e.g. osas@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#fefae0] border border-[#e5e1d8] focus:border-[#bc6c25] focus:outline-none text-sm text-[#283618] transition-all placeholder:text-[#6b705c]/50 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#283618] uppercase tracking-wider mb-2">
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fefae0] border border-[#e5e1d8] focus:border-[#bc6c25] focus:outline-none text-sm text-[#283618] transition-all font-medium"
                    >
                      <option value="General Inquiry">General Festival Inquiry</option>
                      <option value="Sponsorship &amp; Stall Booths">Sponsorship &amp; Stall Booths</option>
                      <option value="Artist Performance Booking">Artist Performance Booking</option>
                      <option value="Media, Press &amp; Ticketing">Media, Press &amp; Ticketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#283618] uppercase tracking-wider mb-2">
                      Message Content <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Write your message detail here..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fefae0] border border-[#e5e1d8] focus:border-[#bc6c25] focus:outline-none text-sm text-[#283618] transition-all placeholder:text-[#6b705c]/50 resize-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[16px] font-bold uppercase text-xs tracking-widest text-[#fefae0] bg-[#5A5A40] hover:bg-[#283618] transition-colors flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#fefae0] border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#bc6c25] mb-4 animate-bounce" />
                  <h3 className="font-display font-bold text-2xl text-[#283618] mb-2 italic">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b705c] max-w-sm leading-relaxed mb-8">
                    Thank you for reaching out to the Edo Reggae Festival Committee. A member of our support team will contact you back shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-[16px] text-xs font-bold uppercase tracking-wider bg-[#e9edc9] hover:bg-[#5A5A40] hover:text-[#fefae0] border border-[#e5e1d8] text-[#283618] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
