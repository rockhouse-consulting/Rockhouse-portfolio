/* ==========================================================================
   Rockhouse Consulting portfolio data
   --------------------------------------------------------------------------
   This is the ONLY file you edit to add or change work.
   The portfolio page, the case-study pages, and the embed for the main
   website all read from it.

   TO ADD A PROJECT: copy the TEMPLATE block at the bottom of this file into
   the `projects` list (before the closing bracket), fill it in, save, push.

   FIELD GUIDE
   id            Short, lowercase, hyphenated. Becomes the page address:
                 project.html?id=your-id  (never change it once shared)
   type          One of: client | applied | academic | onboarding
                 (see `types` below; add a new type there if you need one)
   sector        Must match one entry in `sectors` below
   industry      Free text shown on the card, e.g. "Aerospace Manufacturing"
   title         The finding, written as a headline
   metric        { value: "$3M", label: "what the number means" }
                 Say "projected" or "modeled" in the label if it is not realized.
   summary       2-3 sentences: situation, what changed, result
   highlights    3-4 short bullet points (optional)
   capabilities  2-3 tags. Clicking one filters the portfolio.
   role          Optional. Rockhouse's role, e.g. "Lead analyst, 4-person team"
   context       Optional. Provenance, e.g. "Led by Patrick Munduga at EFESO"
   deck          Optional. Path to the full case-study deck inside this repo,
                 e.g. "case-studies/transit-kpi-governance/Transit-01.html".
                 Leave null to show "Request the full case study" instead.
   featured      true = also shown on the main website's "Selected work" band
   order         Sort position inside its group (lower = earlier)
   ========================================================================== */

window.ROCKHOUSE_PORTFOLIO = {

  /* How each kind of work is labeled. Shown on cards and in the key. */
  types: {
    client:     { label: "Client engagement",   blurb: "Prior client work from a consulting career before Rockhouse was founded. Role stated on each page." },
    applied:    { label: "Applied case study",  blurb: "A worked analysis of a specific business problem. Not a live client engagement." },
    academic:   { label: "Academic project",    blurb: "Completed within a graduate program." },
    onboarding: { label: "Onboarding exercise", blurb: "Completed as part of a firm onboarding program." }
  },

  /* The sector filter, in display order. */
  sectors: [
    "Industrial & Manufacturing",
    "Transportation & Public Sector",
    "Commercial, Digital & Health"
  ],

  /* The sections on the portfolio page, in display order. */
  groups: [
    { title: "Client engagements",         note: "Prior client work, before Rockhouse was founded. Roles stated on each page.",                                        types: ["client"] },
    { title: "Case studies and exercises", note: "Applied, academic, and onboarding work that shows the method in use.", types: ["applied", "academic", "onboarding"] }
  ],

  projects: [

    /* ---------------------------- CLIENT ENGAGEMENTS ---------------------------- */

    {
      id: "cpg-decision-rights",
      type: "client",
      sector: "Industrial & Manufacturing",
      industry: "CPG Manufacturing",
      title: "Perfectly Designed to Get the Results It Was Getting",
      metric: { value: "$7M+", label: "in tracked, validated savings at one plant over two years (combined organizational-design and TPM workstreams)" },
      summary: "At one plant of a multi-site beverage manufacturer, functions worked in silos and leadership decisions ran on opinion, not data. Redesigned decision rights, information flow, and incentives instead of pushing for more effort. The plant tracked $7M+ in validated savings across two years, the combined result of this work and a parallel TPM workstream.",
      highlights: [
        "One plant in a multi-site network, with functions operating in silos",
        "Redesigned decision rights, information flow, and incentives instead of pushing for more effort",
        "$7M+ in validated savings at that plant: the combined result of the organizational-design and TPM workstreams, not a network-wide figure"
      ],
      capabilities: ["Operating model design", "Decision rights", "Change management"],
      role: "Manager, Transformation & Performance Improvement; co-facilitated the diagnostic and designed the site's governance",
      context: "Prior client work at a management consulting firm, before Rockhouse was founded.",
      deck: null, featured: true, order: 1
    },
    {
      id: "transit-kpi-governance",
      type: "client",
      sector: "Transportation & Public Sector",
      industry: "Public Transportation",
      title: "The Fix Wasn't More Headcount. It Was Visibility.",
      metric: { value: "$3M", label: "in annual savings identified in the diagnostic; realized by the client after the engagement ended" },
      summary: "A transit agency's maintenance and workforce constraints looked like a staffing problem. Shop-floor observation showed technicians spending as little as 3-44% of their time on value-added work against a 55-65% benchmark. Ran the diagnostic and built the opportunity case, identifying $2.7M+ in improvement opportunity. The client later realized about $3M a year in savings with no added capital or headcount.",
      highlights: [
        "Leadership assumed the answer was more staff and capital",
        "Structured time-motion observation across PM inspection, running repair, heavy repair, electrical repair, and body shop",
        "Technician wrench time of 3-44% against a 55-65% industry benchmark",
        "$2.7M+ improvement opportunity identified; savings later realized by the client after the engagement ended"
      ],
      capabilities: ["Maintenance & workforce diagnostics", "Wrench-time analysis", "Business case development"],
      role: "Manager, Transformation & Performance Improvement; ran the diagnostic and shaped the improvement case",
      context: "Prior client work at a management consulting firm, before Rockhouse was founded. Savings were realized by the client after the engagement ended.",
      deck: null, featured: true, order: 2
    },
    {
      id: "powertrain-tpm-visibility",
      type: "client",
      sector: "Industrial & Manufacturing",
      industry: "Automotive Manufacturing",
      title: "39 Sites Had Sponsorship. They Didn't Have Visibility.",
      metric: { value: "5,845 hrs", label: "of verified availability improvement across the program's 95 tracked lines (not all 39 sites)" },
      summary: "A global powertrain manufacturer's TPM program spanned 39 sites with executive backing, but leadership had no common view of which were on track. Supported the unified analytics and governance layer as a Power BI translator and analyst. Verified availability hours across the tracked lines rose from 495 to 5,845 (12x) as the lines in focus grew from 58 to 95.",
      highlights: [
        "Executive backing across a 39-site program, but no common view of which sites were on track",
        "Supported the analytics and governance layer; interpreted the Power BI platform data into governance and reporting outputs",
        "Verified availability hours across tracked lines: 495 to 5,845, as lines in focus grew from 58 to 95",
        "Hours are scoped to the tracked lines, not the full site network"
      ],
      capabilities: ["Total productive maintenance", "KPI architecture & governance", "Asset performance management"],
      role: "Manager on the engagement; supported value-capture prioritization and executive reporting",
      context: "Prior client work at a management consulting firm, before Rockhouse was founded. One of several workstreams; site-level decisions also depended on other analyses.",
      deck: null, featured: true, order: 3
    },

    /* ------------------------ CASE STUDIES AND EXERCISES ------------------------ */

    {
      id: "aerospace-agentic-ai",
      type: "academic",
      sector: "Industrial & Manufacturing",
      industry: "Aerospace Manufacturing",
      title: "Agentic AI Implementation Strategy",
      metric: { value: "30–50%", label: "projected reduction in planning effort" },
      summary: "Designed an agentic AI implementation strategy for a high-mix precision aerospace manufacturer: a 5-part agent architecture, 4-layer governance safeguards, and a phased autonomy path. Built a board-level ROI case projecting a 30-50% reduction in planning effort. The projection is not realized savings.",
      highlights: [
        "5-part agent architecture",
        "4-layer governance safeguards",
        "Autonomy calibrated from supervised to delegated over 12 months",
        "Board-level ROI case with a projected (not realized) 30-50% planning effort reduction"
      ],
      capabilities: ["Agentic AI strategy", "Decision governance", "Business case development"],
      role: "Led design of the implementation strategy: architecture, governance, and ROI work (no hands-on agent building)",
      context: "MIT Sloan Executive Education Action Learning Lab capstone. Academic work, not commercial client delivery.",
      deck: null, featured: false, order: 1
    },
    {
      id: "auto-service-smed",
      type: "onboarding",
      sector: "Industrial & Manufacturing",
      industry: "Automotive Service Ops",
      title: "The Fix Wasn't Working Faster. But Differently.",
      metric: { value: "19.5 min", label: "modeled cycle time, down from 62 minutes" },
      summary: "The bay and crew were capable of far more than 62 minutes; the fix was separating internal work from external. Modeled cycle time dropped to 19.5 minutes, backed by the contribution-margin case behind the redesign.",
      highlights: [
        "The bay and crew were capable of far more than 62 minutes",
        "The fix was separating internal work from external work",
        "Modeled cycle time dropped to 19.5 minutes",
        "Backed by the contribution-margin case for the redesign"
      ],
      capabilities: ["Process redesign (SMED)", "Operational diagnostics", "Business case development"],
      role: "", context: "", deck: null, featured: false, order: 2
    },
    {
      id: "freemium-conversion",
      type: "academic",
      sector: "Commercial, Digital & Health",
      industry: "Digital Media",
      title: "97% of Users Were Free. Profit Was in the Other 3%.",
      metric: { value: "24×", label: "more profitable: premium subscribers vs. free users" },
      summary: "For a streaming platform with 1.2M+ users, predictive modeling found premium subscribers were 24x more profitable than free users. The finding informed the monetization strategy toward targeted conversion of the platform's highest-value users.",
      highlights: [
        "Streaming platform with 1.2M+ users",
        "Logistic regression, SHAP feature importance, and propensity score matching",
        "Premium subscribers were 24x more profitable than free users",
        "Finding informed a shift toward targeted conversion"
      ],
      capabilities: ["Predictive analytics", "Customer segmentation", "Revenue growth analytics"],
      role: "Team analyst and modeler",
      context: "Academic team project, not employment or commercial consulting.",
      deck: null, featured: false, order: 3
    },
    {
      id: "telecom-early-churn",
      type: "applied",
      sector: "Commercial, Digital & Health",
      industry: "Telecommunications",
      title: "Leadership Certain Churn Was Pricing. It Wasn't.",
      metric: { value: "$1–2M", label: "projected revenue preserved by cutting early-life churn" },
      summary: "In a practicum case, a 5-Why root-cause analysis overturned the assumption that churn came from pricing or network quality. Churn concentrated in the first 90 days, driven by a fragmented early-life customer experience. Projected $1-2M in preserved revenue and a 20-35% cut in early-life churn.",
      highlights: [
        "Starting assumption: churn came from pricing or network quality",
        "5-Why root-cause diagnostic overturned it",
        "Churn concentrated in the first 90 days, driven by customer-experience gaps",
        "Projected (not realized) $1-2M in preserved revenue and 20-35% cut in early-life churn"
      ],
      capabilities: ["Root cause analysis", "Performance analytics"],
      role: "Team lead and analyst",
      context: "10Alytics data analytics practicum case. Not a live client engagement.",
      deck: null, featured: false, order: 4
    },
    {
      id: "health-gtm-beachhead",
      type: "academic",
      sector: "Commercial, Digital & Health",
      industry: "HealthTech",
      title: "The Fastest Path to Revenue Wasn't the Obvious One",
      metric: { value: "State + municipal", label: "health agencies recommended as the beachhead, ahead of pharma and insurance" },
      summary: "For a public-health analytics startup, analyzed government, healthcare, pharma, and insurance segments and recommended state and municipal public-health agencies as the beachhead, for faster adoption and clearer funding. Pharma and insurance were positioned as later-phase, higher-margin markets, with insights and analytics services ahead of hardware deployment.",
      highlights: [
        "State and municipal health agencies recommended as the beachhead",
        "Pharma and insurance positioned as later-phase, higher-margin markets",
        "Recommended leading with insights and analytics over hardware deployment"
      ],
      capabilities: ["Go-to-market analytics", "Strategic planning"],
      role: "GTM analytics and strategy consultant, 4-person team",
      context: "Academic team engagement; client identity withheld for confidentiality.",
      deck: null, featured: false, order: 5
    },
    {
      id: "retail-data-integrity",
      type: "applied",
      sector: "Commercial, Digital & Health",
      industry: "Retail Food & Beverage (simulated business)",
      title: "Dashboard Looked Fine. The Data Was 84% Wrong.",
      metric: { value: "84%", label: "of customer-feedback records mismatched, while sales ran 14% ahead of target (simulated business)" },
      summary: "In an individually authored practicum capstone on a simulated four-location coffee-shop business, sales were beating target by 14%. But 84% of customer-feedback records were mismatched, masking that, after correction, 61% of customers were dissatisfied, with 39% of revenue ($2,972) at risk.",
      highlights: [
        "Practicum capstone on a simulated business, not a client engagement",
        "Sales at 114% of target while 84% of feedback records were mismatched",
        "After correction, 61% of customers were dissatisfied; 39% of revenue ($2,972) at risk",
        "Dissatisfaction was even across age and gender, pointing to service inconsistency rather than product failure"
      ],
      capabilities: ["Data governance", "Executive dashboards", "Root cause analysis"],
      role: "Sole author and analyst; built the Excel dashboard suite",
      context: "10Alytics / Pod Astra practicum capstone (Feb 2026). A simulated business, not a live client or a real company.",
      deck: null, featured: false, order: 6
    }

    /* ---------------------------- TEMPLATE (copy me) ----------------------------
    ,{
      id: "short-hyphenated-id",
      type: "client",
      sector: "Industrial & Manufacturing",
      industry: "Industry name",
      title: "The finding, written as a headline",
      metric: { value: "$0M", label: "what the number means" },
      summary: "Situation, what changed, result.",
      highlights: ["Point one", "Point two", "Point three"],
      capabilities: ["Capability one", "Capability two"],
      role: "", context: "", deck: null, featured: false, order: 10
    }
    ------------------------------------------------------------------------------ */
  ]
};
