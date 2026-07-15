import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";
import logo from "../assets/images/logo.png";

// Brand-accurate WhatsApp glyph
function WhatsAppGlyph({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.822.738 5.58 2.14 8.005L0 32l8.2-2.1A15.93 15.93 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0zm0 29.09c-2.523 0-4.99-.678-7.14-1.96l-.512-.303-4.865 1.246 1.298-4.744-.334-.487A13.06 13.06 0 0 1 2.91 16c0-7.22 5.874-13.09 13.094-13.09 7.22 0 13.086 5.87 13.086 13.09 0 7.22-5.866 13.09-13.086 13.09zm7.18-9.79c-.393-.196-2.323-1.146-2.683-1.276-.36-.132-.622-.196-.884.196-.262.393-1.014 1.276-1.243 1.538-.23.262-.458.295-.85.098-.393-.196-1.658-.61-3.158-1.947-1.167-1.04-1.955-2.325-2.184-2.718-.23-.393-.025-.605.172-.8.176-.176.393-.458.59-.687.196-.23.262-.393.393-.655.13-.262.065-.49-.033-.687-.098-.196-.884-2.13-1.212-2.918-.32-.767-.645-.663-.884-.676-.229-.011-.49-.013-.753-.013-.262 0-.687.098-1.047.49-.36.393-1.375 1.343-1.375 3.277s1.408 3.802 1.604 4.064c.196.262 2.77 4.23 6.71 5.933.937.405 1.668.647 2.238.828.94.299 1.796.257 2.472.156.754-.113 2.323-.95 2.65-1.865.327-.916.327-1.702.229-1.865-.098-.164-.36-.262-.753-.458z" />
    </svg>
  );
}

// Simple custom component to render social icons.
// Only WhatsApp, phone, and email are supported channels for this site.
function SocialIcon({ platform, className }) {
  switch (platform) {
    case "whatsapp":
      return <WhatsAppGlyph className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "email":
      return <Mail className={className} />;
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