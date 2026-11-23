export const scopeSections = [
  {
    index: "01",
    title: "Approach",
    clauses: [
      {
        title: "Staged, not all at once",
        body: "A staged build that puts provider onboarding and client review in front of you before the complete pilot. The same structured provider database then supports public search, professional tools and secure information sharing, so verification work can start while later functionality is still being built.",
      },
      {
        title: "Two options, priced separately",
        body: "Option A is the pilot. Option B includes Option A and adds automated subscriptions, SMS-credit purchases and fuller organisation self-service. Optional additions and ongoing operating costs sit outside both totals.",
      },
      {
        title: "Estimates, not a fixed price yet",
        body: "Planning allowances use A$85 per project hour. They become agreed stage fees or approved hourly caps in the written development agreement, once discovery settles the scope.",
      },
    ],
  },
  {
    index: "02",
    title: "What's included",
    clauses: [
      {
        title: "Discovery and design",
        body: "Confirm the pilot journeys, field definitions, visibility rules and role permissions. Refine the desktop and mobile concepts, agree the first deliverable and document acceptance criteria. Two consolidated rounds of interface feedback are included; materially changed workflows get a revised estimate.",
      },
      {
        title: "Shared provider database",
        body: "Provider → service stream → location or service area → capacity → referral pathway. One provider can hold multiple services and locations, each with its own capacity, eligibility and referral information. Capacity uses OPEN, WAITLIST, CLOSED and LIMITED states with explanatory text where needed. The model supports additional regions without hardcoding the pilot geography.",
      },
      {
        title: "Information classifications",
        body: "Every field carries a Search, Public, Professional, Shareable or Internal classification. Access checks run on the server and against documents, rather than relying on hidden interface elements.",
      },
      {
        title: "Provider accounts and staff",
        body: "An organisation administrator plus service-location editors. Administrators invite, deactivate and reassign staff; editors only touch their assigned locations. Information belongs to the organisation and survives staff changes. Provider access stays separate from paid professional access, and one person can hold both.",
      },
      {
        title: "Structured submissions",
        body: "Organisation details, service streams, locations, populations supported, eligibility, funding, referral pathways, capacity, public and professional contacts and approved documents — with saved drafts, review confirmation, publication declarations, submission status and verification dates.",
      },
      {
        title: "Review and publication",
        body: "Proposed and published versions are kept separately. The client can compare changes, approve and publish, return a submission for clarification, or reject it. Nothing becomes publicly visible before approval, and an audit record covers submissions, decisions and material account actions.",
      },
      {
        title: "Verification and administration",
        body: "Last verified and next verification due fields with scheduled email reminders, initially every three months. A reminder asks for confirmation or an update; it does not itself verify accuracy. Administrators manage categories, structured options, providers, submissions and incorrect-information reports without routine database changes.",
      },
      {
        title: "Public search",
        body: "Account-free search by service or support category and location or service area, with filters for age group, delivery method and funding, service-level results, public details and a way to report incorrect information. Structured fields with basic keyword support; advanced matching and live capacity feeds are excluded.",
      },
      {
        title: "Professional workspace",
        body: "Authenticated access to approved professional information, capacity and wait details, referral pathways, contacts and authorised documents. Search context is preserved when moving between results. Access needs an active individual or organisation entitlement, and one user can hold multiple legitimate roles.",
      },
      {
        title: "Tailored sharing by SMS",
        body: "A professional selects approved shareable fields, adds a permitted note of up to 250 words, enters an Australian mobile number, previews the package and sends a link. Includes usage records, a basic credit ledger, failure handling and delivery status where the provider supports it. Each share uses an unpredictable token with server-side validation, configurable expiry (seven days initially) and revocation. The recipient sees only the selected package, and each share keeps a snapshot of what was sent.",
      },
      {
        title: "Recipient pages and documents",
        body: "Responsive pages with the selected service information, contact links, next steps and directions. No account or app needed. Invalid, expired and revoked links each show an appropriate message. Documents can be uploaded, reviewed and downloaded or linked externally under their agreed classification. Editable form conversion is priced separately.",
      },
      {
        title: "Organisation access and manual billing",
        body: "In Option A the client administers seats, invitations, account status, paid entitlements and SMS credits through the internal interface. Organisation administrators see their account, allocation and balance; full self-service and automated purchasing are Option B. The client invoices and records payments, and an administrator activates access or credits after confirming payment. No direct card collection, automatic renewal or accounting sync.",
      },
    ],
  },
  {
    index: "03",
    title: "What's excluded",
    bullets: [
      "Native mobile apps",
      "Direct referral submission or outcome tracking",
      "Clinical records",
      "Provider-system integrations",
      "Real-time capacity feeds",
      "AI recommendations",
      "Enterprise SSO",
      "Custom enterprise deployments",
      "Advanced analytics",
      "Multilingual translation",
      "A full marketing website or CMS",
    ],
    clauses: [
      {
        title: "The existing client website",
        body: "It stays a separate project unless an integration or replacement is expressly added.",
      },
      {
        title: "Client responsibilities",
        body: "Legal policies, consent wording and content approval sit with the client. Concept screens guide the workflows; final styling follows approved brand assets.",
      },
      {
        title: "Information summaries",
        body: "Interaction summaries cover factual information-sharing events, not clinical case notes or referral outcomes. Voice recording needs agreement on who records, who listens, retention, file limits and consent before it can be quoted.",
      },
    ],
  },
  {
    index: "04",
    title: "Assumptions",
    clauses: [
      {
        title: "Pilot volumes",
        body: "A regional pilot with up to 20 providers, 100 service-location records, five initial service categories and 50 professional users. These are quotation assumptions for initial setup and testing, not licence limits or confirmed volumes.",
      },
      {
        title: "Data supplied by the client",
        body: "One import of clean client-supplied data up to those volumes, using an agreed template. Accurate content, taxonomy choices, authorised documents and current brand assets are the client's. Large-scale research, cleansing, transcription and national directory population are excluded.",
      },
      {
        title: "Documents",
        body: "PDF files up to 10 MB initially; other formats by agreement.",
      },
      {
        title: "One payment provider",
        body: "For Option B: AUD billing, no more than three standard subscription plans and three SMS-credit bundles. Accounting sync, custom enterprise agreements and complex proration are separately scoped.",
      },
      {
        title: "Infrastructure",
        body: "Infrastructure figures are budgeting allowances, not verified supplier prices. The client owns the production accounts and pays supplier charges directly; usage charges and maintenance are separate.",
      },
    ],
  },
  {
    index: "05",
    title: "Changes",
    clauses: [
      {
        title: "Nothing moves without a written impact",
        body: "Any material change gets a written scope, cost and schedule impact for approval before work proceeds.",
      },
      {
        title: "Caps are raised, not exceeded",
        body: "If forecast effort approaches an agreed cap, that gets raised before the cap is exceeded. The A$85 hourly rate applies to approved additional work.",
      },
      {
        title: "Fixed price comes after discovery",
        body: "A later fixed-price offer may include an explicitly stated risk allowance, once discovery has shown what the risk actually is.",
      },
    ],
  },
  {
    index: "06",
    title: "Money and stages",
    clauses: [
      {
        title: "Payment stages",
        body: "Before each stage, agree its deliverables, acceptance criteria and a fixed fee or approved hourly cap. Invoicing is 30% at the start of the stage, 40% when the deliverable is available for acceptance testing, and 30% on acceptance and handover. No deposit on the indicative proposal. Terms are 14 days.",
      },
      {
        title: "Included defect support",
        body: "30 calendar days of defect rectification from acceptance of each deployed release. A covered defect is a reproducible failure of delivered code to meet the agreed scope, including security defects in that code. New features, changed requirements, unauthorised modifications and third-party failures are not covered.",
      },
      {
        title: "Ongoing maintenance",
        body: "A$340 per month for up to four hours of dependency and security updates, backup oversight, monitoring review and incident investigation. Additional approved work is A$85 per hour. Unused hours do not roll over. Hosting and third-party fees are separate.",
      },
      {
        title: "Support windows",
        body: "Australia/Sydney time: Monday, Wednesday and Friday 9am to 5pm; Thursday 9am to 10am and 4pm to 5pm; Saturday 9am to noon. Tuesday and Sunday unavailable. These are acknowledgement targets, not guaranteed resolution times, and not a 24-hour service.",
      },
    ],
  },
  {
    index: "07",
    title: "Delivery and acceptance",
    clauses: [
      {
        title: "First functional beta",
        body: "Targeted within 14 calendar days of commencement: secure provider and admin login, a limited structured submission, visible pending status, and a basic review and approval flow using sample records. It is an early testable slice, not completion. Permissions, publication controls, backup verification, document safeguards and privacy configuration come before real onboarding.",
      },
      {
        title: "Effort and calendar",
        body: "Allow 22 to 24 project hours per week. The pilot is roughly 12 to 20 weeks of project effort; the calendar range allows for review and acceptance. Stages overlap where practical. Content delays, changed requirements, supplier approvals or delayed testing all move dates.",
      },
      {
        title: "What gets tested",
        body: "Public and professional journeys, submissions and publication, multiple roles, cross-organisation access denial, field and document visibility, link selection, expiry and revocation, SMS errors, credit accounting, desktop and mobile layouts, current Chrome, Edge, Firefox and Safari, keyboard use, screen-reader spot checks, common security checks and backup restoration.",
      },
      {
        title: "Acceptance",
        body: "A staging build and an agreed checklist. Five business days of client testing for the onboarding release, ten for the complete pilot. One nominated decision-maker supplies consolidated feedback, normally within three business days. Defects are recorded with severity and a reproduction example. Acceptance needs the agreed journeys completed and critical or major defects resolved; minor items get an agreed correction plan. Acceptance is confirmed in writing, and new functions go through change requests.",
      },
      {
        title: "Separately procured",
        body: "Independent penetration testing and specialist accessibility assessment are recommended before a broader commercial release, and are not part of this scope.",
      },
    ],
  },
  {
    index: "08",
    title: "Security and data",
    clauses: [
      {
        title: "Security baseline",
        body: "Secure sessions, password recovery, email verification, MFA for privileged accounts, server-side organisation and field permissions, input validation, rate limits, secret management, protected document access, HTTPS, storage encryption and audit logging with personal information minimised. Secure-link tokens are redacted from operational logs.",
      },
      {
        title: "Accessibility",
        body: "Target WCAG 2.2 AA through labelled forms, keyboard operation, visible focus, screen-reader structure, contrast, text scaling and accessible validation. Internal testing supports the target; independent conformance assessment is separate. Capacity is never communicated by colour alone.",
      },
      {
        title: "Data residency",
        body: "Application, database, document storage and backups in Australia. Each service's processing, support access, logging and backup arrangements are checked before procurement, because choosing an Australian server region does not establish every service's residency. Any exception is resolved with the client before use.",
      },
      {
        title: "Recovery",
        body: "Separate staging and production environments, automated daily database and file backups, at least two backup destinations separate from the application host, 30-day retention and a restoration test before pilot release. Recovery objectives are finalised in discovery and aligned with the agreed deletion policy. Automated alerts only; no 24-hour staffed response.",
      },
    ],
  },
  {
    index: "09",
    title: "Ownership and handover",
    clauses: [
      {
        title: "Ownership",
        body: "Client ownership of custom code and project-specific intellectual property on payment of the corresponding fees, subject to the final agreement. Pre-existing and third-party components keep their licences and are disclosed. Repository access during development, and client control of production accounts throughout.",
      },
      {
        title: "Handover",
        body: "Architecture and database documentation, deployment instructions, configuration and integration notes, role guidance, backup and restoration procedures, known limitations and maintenance requirements. Two remote sessions of up to an hour each. Credentials transferred securely so developer access can be removed without losing the platform.",
      },
    ],
  },
];

export const scopeNotes = [
  {
    title: "What's been removed",
    body: "A real proposal, sent to a real client. Their name, contact details, project totals and the documents they supplied are gone. The structure, inclusions, exclusions, assumptions and commercial terms are exactly as issued.",
  },
  {
    title: "Why it's on the site",
    body: "Most quotes hide the boundaries until they matter. This one says what isn't included, what it assumes, and what happens when something changes, because that is where projects go wrong.",
  },
  {
    title: "Not an offer",
    body: "The original was valid for 30 days from issue. The rates and terms shown here are a sample of how I quote, not a standing offer for your project.",
  },
];