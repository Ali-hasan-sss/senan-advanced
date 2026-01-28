import { motion } from "motion/react";
import { useState } from "react";
import backgroundImage from "@/assets/0dd5df8bad17aa19cb9c79db49e5281a79c6e23a.png";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col lg:flex-row overflow-y-auto">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative w-full min-h-full flex flex-col lg:flex-row px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-16">
        <motion.div
          className="w-full lg:w-1/2 min-h-0 flex flex-col justify-start pt-4 md:pt-6 lg:pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-white mb-10 md:mb-16 lg:mb-24 text-2xl md:text-3xl lg:text-4xl xl:text-[42pt]"
            style={{
              fontFamily: "DIN Arabic, sans-serif",
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.contact.title}
          </motion.h1>
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                className="text-white mb-2 md:mb-3 text-sm md:text-base lg:text-[16pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.contact.visitUs}
              </h3>
              <p
                className="text-white/90 whitespace-pre-line text-xs md:text-sm lg:text-[13pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {t.contact.address}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3
                className="text-white mb-2 md:mb-3 text-sm md:text-base lg:text-[16pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.contact.callUs}
              </h3>
              <p
                className="text-white/90 text-xs md:text-sm lg:text-[13pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                +968 2446154
                <br />
                +968 5719085
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3
                className="text-white mb-2 md:mb-3 text-sm md:text-base lg:text-[16pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.contact.emailUs}
              </h3>
              <p
                className="text-white/90 text-xs md:text-sm lg:text-[13pt]"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                pr@sinan.om
                <br />
                marketing@sinan.om
                <br />
                sales@sinan.om
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 min-h-0 flex items-center justify-center lg:justify-end pt-8 lg:pt-0 pr-0 lg:pr-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full max-w-xl p-4 md:p-6 lg:p-10 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2"
                  style={{
                    fontSize: "12pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-gray-800"
                  style={{
                    fontSize: "11pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                  placeholder={t.contact.yourName}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2"
                  style={{
                    fontSize: "12pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.contact.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-gray-800"
                  style={{
                    fontSize: "11pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                  placeholder={t.contact.yourEmail}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="sector"
                  className="block text-white mb-2"
                  style={{
                    fontSize: "12pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.contact.sectorOfInterest}
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-gray-800 appearance-none cursor-pointer"
                  style={{
                    fontSize: "11pt",
                    fontFamily: "DIN Arabic, sans-serif",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "2.5rem",
                  }}
                  required
                >
                  <option value="">{t.contact.selectSector}</option>
                  <option value="defense">{t.contact.defenseSecurity}</option>
                  <option value="marine">{t.contact.marineSolutions}</option>
                  <option value="dynamics">{t.contact.uavDrones}</option>
                  <option value="frontiers">{t.contact.borderSecurity}</option>
                  <option value="other">{t.contact.other}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2"
                  style={{
                    fontSize: "12pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-gray-800 resize-none"
                  style={{
                    fontSize: "11pt",
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                  placeholder={t.contact.yourMessage}
                  required
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
