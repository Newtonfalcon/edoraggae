import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Instagram, ShieldCheck, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";
import logo from "../assets/images/logo.png";

// Simple custom component to render social icons
function SocialIcon({ platform, className }) {
  switch (platform) {
    case "whatsapp":
      return <MessageSquare className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "email":
      return <Mail className={className} />;
    case "tiktok":
      // A music/video indicator represents TikTok gracefully
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.09 1.25 2.62 2.01 4.22 2.21v3.17c-1.44-.01-2.86-.38-4.13-1.07-.63-.34-1.2-.79-1.68-1.32v6.62c.04 1.84-.52 3.69-1.6 5.12-1.38 1.83-3.66 2.87-5.93 2.72-2.45-.16-4.75-1.57-5.83-3.8-1.2-2.47-.93-5.59.69-7.79 1.24-1.68 3.25-2.61 5.34-2.52v3.22c-1.15-.05-2.3.43-2.92 1.4-.73 1.14-.54 2.7.43 3.63.95.91 2.45.92 3.4.03.65-.6.98-1.48.95-2.35V0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="main-footer" className="bg-[#283618] border-t border-[#5A5A40]/30 text-[#e5e1d8]">
      {/* Upper Footer: Brand and Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 overflow-hidden flex items-center justify-center bg-transparent shrink-0">
                {!logoError ? (
                  <img
                    src={logo}
                    alt="EDO International Reggae Festival Logo"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#bc6c25] via-[#5A5A40] to-[#e9edc9] flex items-center justify-center p-0.5 shadow">
                    <div className="w-full h-full rounded-full bg-[#283618] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#faedcd]" />
                    </div>
                  </div>
                )}
              </div>
              <span className="font-display font-bold text-lg text-[#fefae0] tracking-tight italic">
                {siteData.festivalName}
              </span>
            </a>
            <p className="text-sm italic text-[#e9edc9] font-medium tracking-wide">
              &ldquo;{siteData.slogan}&rdquo;
            </p>
            <p className="text-sm text-[#e5e1d8] max-w-sm leading-relaxed">
              An annual landmark celebration fusing rich traditional Edo majesty with the powerful global vibrations of reggae. Supported by the state to foster culture, tourism, and community.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {Object.entries(siteData.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="w-10 h-10 rounded-full bg-[#fefae0]/10 hover:bg-[#faedcd] text-[#e5e1d8] hover:text-[#283618] border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  title={`Follow us on ${platform}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon platform={platform} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h3 className="text-[#fefae0] font-bold text-sm uppercase tracking-wider font-display italic">
              Festival Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#e9edc9] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#e5e1d8]">{siteData.office}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#faedcd] shrink-0" />
                <a href={siteData.socials.phone} className="text-[#e5e1d8] hover:text-[#fefae0] transition-colors">
                  {siteData.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#e9edc9] shrink-0" />
                <a href={siteData.socials.email} className="text-[#e5e1d8] hover:text-[#fefae0] transition-colors">
                  {siteData.contact.emailDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Administration & Legal */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h3 className="text-[#fefae0] font-bold text-sm uppercase tracking-wider font-display italic">
              Administration
            </h3>
            <div className="bg-[#f5f2e9]/10 border border-white/15 rounded-2xl p-5">
              <span className="text-xs text-[#e9edc9] uppercase font-mono tracking-wider font-bold block">
                Chief Executive Officer
              </span>
              <span className="text-base text-white font-semibold block mt-0.5 font-display italic">
                {siteData.ceo}
              </span>
              <span className="text-xs text-[#e5e1d8]/80 block mt-1 font-medium">
                Edo Reggae Festival Committee
              </span>
              <div className="flex items-center space-x-2 mt-3.5 text-xs text-[#e9edc9] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Edo Tourism Board Endorsed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="bg-[#1e2a12] py-6 border-t border-[#5A5A40]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#e5e1d8]/60 space-y-3 sm:space-y-0">
          <p>
            &copy; {currentYear} {siteData.festivalName}. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#tickets" className="hover:text-white transition-colors">Tickets</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { SocialIcon };
