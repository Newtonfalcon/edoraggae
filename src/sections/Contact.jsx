import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteData } from "../data/siteData";
import { SocialIcon } from "../components/Footer";

export default function Contact() {
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

        {/* Contact details card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f5f2e9] border border-[#e5e1d8] rounded-[32px] p-6 sm:p-10 space-y-6 relative overflow-hidden shadow-xs">
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


                   <a
                    href={siteData.socials.phone2}
                    className="text-sm text-[#283618] hover:text-[#bc6c25] transition-colors block mt-1 font-bold"
                  >
                    +12144699062
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

      </div>
    </section>
  );
}