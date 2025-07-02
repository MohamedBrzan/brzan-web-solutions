import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-neutral-100 dark:text-neutral-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Mohamed Brzan Portfolio</strong>, accessible from your
        personal domain or GitHub page, one of my main priorities is the privacy
        of visitors. This Privacy Policy document outlines the types of
        information collected and how it is used.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Information I Collect
      </h2>
      <p className="mb-4">
        I do not collect personal data unless you explicitly provide it (e.g.,
        via a contact form). When you visit the site, your browser may
        automatically send some non-identifiable data like IP address, browser
        version, and visited pages, which may be collected by analytics tools.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. Use of Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>To improve the portfolio experience.</li>
        <li>To respond to contact requests submitted via forms or email.</li>
        <li>To monitor traffic and usage patterns (via analytics tools).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Cookies & Tracking
      </h2>
      <p className="mb-4">
        This website may use cookies or third-party services (like Google
        Analytics or Vercel Analytics) to monitor traffic. These cookies do not
        store personally identifiable information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        4. Third-Party Services
      </h2>
      <p className="mb-4">
        I may use third-party services for hosting, analytics, or contact forms.
        These providers may have their own privacy policies and terms of
        service. You are encouraged to review them when using the site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        All reasonable steps are taken to ensure your data is secure. However,
        no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may request that I delete or correct any information you’ve
        voluntarily submitted via forms. Simply contact me at your provided
        email address.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        I may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact me
        at:
        <br />
        <a
          href="mailto:mohamedbrzan.dev@email.com"
          className="text-blue-600 underline dark:text-blue-400"
        >
          mohamedbrzan.dev@email.com
        </a>
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-10">
        Effective Date: July 2, 2025
      </p>
    </main>
  );
};

export default PrivacyPolicy;
