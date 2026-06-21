const termsSections = [
  ["1. Company Information", ["TechByus is a technology company providing digital solutions, software services, web development, IT consulting, and related technology services.", "For questions regarding these Terms, contact us at:"], ["Email: support@techbyus.com", "Website: www.techbyus.com"]],
  ["2. Acceptance of Terms", ["By accessing our Services, you confirm that:"], ["You are at least 18 years old or have legal parental/guardian consent.", "You have the legal authority to enter into these Terms.", "You agree to comply with all applicable laws and regulations."]],
  ["3. Services", ["TechByus may provide services including but not limited to:", "We reserve the right to modify, suspend, or discontinue any Service at any time without prior notice."], ["Website development", "Mobile application development", "Software solutions", "IT consulting", "Cloud services", "Maintenance and support", "Digital products and subscriptions"]],
  ["4. User Responsibilities", ["You agree not to:", "You are responsible for maintaining the confidentiality of your account credentials."], ["Use the Services for unlawful purposes", "Attempt unauthorized access to our systems", "Upload malicious code, viruses, or harmful content", "Copy, resell, or exploit our Services without permission", "Interfere with the security or operation of the Services"]],
  ["5. Intellectual Property", ["All content, software, branding, logos, designs, code, graphics, and materials provided by TechByus are owned by or licensed to TechByus and protected under intellectual property laws.", "You may not:"], ["Reproduce or redistribute our content", "Reverse engineer our software", "Use our trademarks without written permission"]],
  ["6. Payments and Billing", ["If you purchase any paid services:", "TechByus reserves the right to change pricing at any time with reasonable notice."], ["Fees must be paid according to the agreed pricing.", "Payments may be non-refundable unless stated otherwise.", "Late payments may result in suspension or termination of Services."]],
  ["7. Refund Policy", ["Refunds, if applicable, will be handled according to the specific agreement or project contract between TechByus and the client.", "Custom development work already completed is generally non-refundable."]],
  ["8. Third-Party Services", ["Our Services may include links or integrations with third-party services or platforms. TechByus is not responsible for the content, security, or practices of third-party providers.", "Use of third-party services is subject to their own terms and policies."]],
  ["9. Privacy", ["Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to the collection and use of information as described in that policy."]],
  ["10. Limitation of Liability", ["To the maximum extent permitted by law, TechByus shall not be liable for:", "Our total liability shall not exceed the amount paid by you for the Services in the preceding 12 months."], ["Indirect or consequential damages", "Loss of profits, data, or business opportunities", "Service interruptions or technical issues", "Unauthorized access to user data"]],
  ["11. Disclaimer", ['Services are provided "as is" and "as available" without warranties of any kind, whether express or implied.', "We do not guarantee uninterrupted, error-free, or completely secure Services."]],
  ["12. Termination", ["We may suspend or terminate access to our Services if you violate these Terms or engage in harmful or illegal activities.", "You may discontinue using our Services at any time."]],
  ["13. Governing Law", ["These Terms shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.", "Any disputes shall be subject to the jurisdiction of the courts located in Uttarakhand, India."]],
  ["14. Changes to Terms", ["TechByus reserves the right to update or modify these Terms at any time. Updated Terms will be posted on our website with the revised effective date.", "Continued use of the Services after updates constitutes acceptance of the revised Terms."]],
  ["15. Contact Information", ["If you have any questions regarding these Terms and Conditions, contact:"], ["TechByus", "Email: support@techbyus.com", "Website: www.techbyus.com"]],
];

export const metadata = {
  title: "Terms and Conditions | TechByus",
  description: "Terms and conditions for TechByus website services.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | TechByus",
    description: "Terms and conditions for TechByus website services.",
    url: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="section page-section terms-page">
        <div className="section-heading reveal"><p className="eyebrow">Terms and conditions</p><h1>Terms and Conditions - TechByus</h1><p>Last Updated: May 24, 2026</p></div>
        <div className="terms-content reveal">
          <p>Welcome to TechByus. These Terms and Conditions ("Terms") govern your access to and use of our website, products, software, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.</p>
          <p>If you do not agree with any part of these Terms, please do not use our Services.</p>
          {termsSections.map(([title, body, list]) => (
            <article className="terms-block" key={title}>
              <h2>{title}</h2>
              {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {list ? <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
