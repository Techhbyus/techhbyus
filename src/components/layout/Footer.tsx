import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { contactInfo, homeServices } from "@/data/site";

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
  className: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/techhbyus/",
    Icon: FaInstagram,
    className: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590411418974&sk=about",
    Icon: FaFacebookF,
    className: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/techhbyus-ours-to-yours-009479411",
    Icon: FaLinkedinIn,
    className: "linkedin",
  },
];

export default function Footer() {
  return (
      <footer className="site-footer">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand footer-col">
            <strong>Techhbyus</strong>

            <p>
              We build websites — you grow your business.
            </p>
          </div>

          {/* Services */}
          <nav className="footer-col" aria-label="Services">
            <h4>Services</h4>
            <div className="footer-links">
              {homeServices.map((service) => (
                <Link key={service.title} href="/services">{service.title}</Link>
              ))}
            </div>
          </nav>

          {/* Quick links */}
          <nav className="footer-col" aria-label="Quick links">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/avail-service">Contact</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </nav>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-links">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              {contactInfo.phone && (
                <a
                  href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.phone}
                </a>
              )}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Techhbyus. All rights reserved.</span>

          <div className="footer-social">
            <div className="social-links" aria-label="Social media links">
              {socialLinks.map(
                  ({ label, href, Icon, className }) => (
                      <a
                          className={`social-card ${className}`}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          key={label}
                          aria-label={label}
                      >
                        <Icon
                            size={22}
                            aria-hidden="true"
                            focusable="false"
                        />

                        <span>{label}</span>
                      </a>
                  )
              )}
            </div>
          </div>
        </div>
      </footer>
  );
}
