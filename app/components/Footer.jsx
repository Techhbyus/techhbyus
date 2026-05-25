import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram, className: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF, className: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedinIn, className: "linkedin" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>TechByus</strong>
          <p>We build website - you grow your business</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/avail-service">Contact us</Link>
          <Link href="/terms-and-conditions">Terms and conditions</Link>
        </nav>
        <div className="footer-social">
          <span>Connect us</span>
          <div className="social-links" aria-label="Social media links">
            {socialLinks.map(({ label, href, Icon, className }) => (
              <a className={className} href={href} target="_blank" rel="noreferrer" key={label} aria-label={label}>
                <Icon size={20} aria-hidden="true" focusable="false" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
