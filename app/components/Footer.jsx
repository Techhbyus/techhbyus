import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const socialLinks = [
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
          <div className="footer-brand">
            <strong>TechByus</strong>

            <p>
              We build websites — you grow your business.
            </p>
          </div>

          {/* Navigation */}
          <nav
              className="footer-links"
              aria-label="Footer navigation"
          >
            <Link href="/avail-service">
              Contact Us
            </Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </nav>

          {/* Social */}
          <div className="footer-social">

          <span className="social-heading">
            Connect With Us
          </span>

            <div
                className="social-links"
                aria-label="Social media links"
            >
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