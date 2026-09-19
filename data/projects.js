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
    client:     { label: "Client engagement",   blurb: "Delivered for an organization." },
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
    { title: "Client engagements",         note: "Delivered for an organization.",                                        types: ["client"] },
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
      metric: { value: "$7M+", label: "in tracked, validated savings over two years" },
      summary: "A multi-site beverage manufacturer was well-intentioned but out of sync: leadership decisions ran on opinion, not data. Redesigned decision rights, information flow, and incentives rather than pushing for more effort, delivering $7M+ in tracked, validated savings across two years.",
      highlights: [
        "Multi-site beverage manufacturer whose decisions ran on opinion, not data",
        "Redesigned decision rights, information flow, and incentives instead of pushing for more effort",
        "$7M+ in tracked, validated savings across two years"
      ],
      capabilities: ["Operating model design", "Decision rights", "Change management"],
      role: "", context: "", deck: null, featured: true, order: 1
    },
    {
      id: "transit-kpi-governance",
      type: "client",
      sector: "Transportation & Public Sector",
      industry: "Public Transportation",
      title: "The Fix Wasn't More Headcount. It Was Visibility.",
      metric: { value: "$3M", label: "in annual savings, with no added headcount or capital" },
      summary: "Leadership assumed slower performance meant the fix was more staff and capital. The real gap was work-sequencing, not staffing. Built the integrated KPI governance and visibility layer that unlocked $3M in annual savings without adding headcount or capital.",
      highlights: [
        "Leadership assumed the answer was more staff and capital",
        "The real gap was work-sequencing, not staffing",
        "Integrated KPI governance and visibility layer",
        "$3M in annual savings with no added headcount or capital"
      ],
      capabilities: ["KPI architecture & governance", "Executive dashboards", "Operational diagnostics"],
      role: "", context: "", deck: null, featured: true, order: 2
    },
    {
      id: "powertrain-tpm-visibility",
      type: "client",
      sector: "Industrial & Manufacturing",
      industry: "Automotive Manufacturing",
      title: "39 Sites Had Sponsorship. They Didn't Have Visibility.",
      metric: { value: "5,800+ hrs", label: "of verified availability improvement from a 39-plant TPM program" },
      summary: "A global powertrain manufacturer's TPM program had executive backing across 39 plants, but no way to see which sites were on track. Advised on the unified analytics and governance layer that delivered 5,800+ hours of verified availability improvements and shifted the program to objective management.",
      highlights: [
        "Executive backing across 39 plants, but no view of which sites were on track",
        "Advised on the unified analytics and governance layer",
        "5,800+ hours of verified availability improvement",
        "Program shifted to objective management"
      ],
      capabilities: ["Total productive maintenance", "KPI architecture & governance", "Asset performance management"],
      role: "", context: "", deck: null, featured: true, order: 3
    },

    /* ------------------------ CASE STUDIES AND EXERCISES ------------------------ */

    {
      id: "aerospace-agentic-ai",
      type: "academic",
      sector: "Industrial & Manufacturing",
      industry: "Aerospace Manufacturing",
      title: "Agentic AI Implementation Strategy",
      metric: { value: "30–50%", label: "projected reduction in planning effort" },
      summary: "Designed a full agentic AI strategy for a precision manufacturer: a 5-part agent architecture, 4-layer governance safeguards, and a phased autonomy path. Built a board-level ROI projecting a 30–50% planning effort reduction.",
      highlights: [
        "5-part agent architecture",
        "4-layer governance safeguards",
        "Phased autonomy path",
        "Board-level ROI projecting a 30–50% planning effort reduction"
      ],
      capabilities: ["Agentic AI strategy", "Decision governance", "Business case development"],
      role: "", context: "", deck: null, featured: false, order: 1
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
      summary: "Predictive modeling found premium subscribers were 24x more profitable than free users, redirecting spend from broad free-tier growth toward targeted conversion of the platform's highest-value 3%.",
      highlights: [
        "97% of users were on the free tier",
        "Premium subscribers were 24x more profitable than free users",
        "Spend redirected from broad free-tier growth to targeted conversion of the highest-value 3%"
      ],
      capabilities: ["Predictive analytics", "Customer segmentation", "Revenue growth analytics"],
      role: "", context: "", deck: null, featured: false, order: 3
    },
    {
      id: "telecom-early-churn",
      type: "applied",
      sector: "Commercial, Digital & Health",
      industry: "Telecommunications",
      title: "Leadership Certain Churn Was Pricing. It Wasn't.",
      metric: { value: "$1–2M", label: "projected revenue preserved by cutting early-life churn" },
      summary: "Root-cause analysis found churn concentrated in the first 90 days, driven by a fragmented early-life customer experience, not pricing or network quality. Projected $1–2M in preserved revenue and a 20–35% cut in early-life churn.",
      highlights: [
        "Churn concentrated in the first 90 days",
        "Driven by fragmented early-life customer experience, not pricing or network quality",
        "Projected $1–2M in preserved revenue",
        "Projected 20–35% cut in early-life churn"
      ],
      capabilities: ["Root cause analysis", "Performance analytics"],
      role: "", context: "", deck: null, featured: false, order: 4
    },
    {
      id: "health-gtm-beachhead",
      type: "academic",
      sector: "Commercial, Digital & Health",
      industry: "HealthTech",
      title: "The Fastest Path to Revenue Wasn't the Obvious One",
      metric: { value: "State + municipal", label: "health agencies recommended as the beachhead, ahead of pharma and insurance" },
      summary: "Found that the fastest path to revenue wasn't the obvious one: recommended state and municipal health agencies as the beachhead ahead of higher-margin pharma and insurance. Reframed strategy around insights over hardware deployment.",
      highlights: [
        "State and municipal health agencies recommended as the beachhead",
        "Sequenced ahead of higher-margin pharma and insurance",
        "Strategy reframed around insights over hardware deployment"
      ],
      capabilities: ["Go-to-market analytics", "Strategic planning"],
      role: "", context: "", deck: null, featured: false, order: 5
    },
    {
      id: "retail-data-integrity",
      type: "applied",
      sector: "Commercial, Digital & Health",
      industry: "Retail Food & Beverage",
      title: "Dashboard Looked Fine. The Data Was 84% Wrong.",
      metric: { value: "84%", label: "of customer-feedback data was corrupted while sales ran 14% ahead of target" },
      summary: "Sales were beating target by 14%, but 84% of the customer feedback data was corrupted, masking that 61% of customers were actually dissatisfied. Caught the integrity problem before it could distort every decision built on it.",
      highlights: [
        "Sales were beating target by 14%",
        "84% of the customer feedback data was corrupted",
        "61% of customers were actually dissatisfied",
        "Integrity problem caught before it distorted every decision built on it"
      ],
      capabilities: ["Data governance", "Executive dashboards", "Root cause analysis"],
      role: "", context: "", deck: null, featured: false, order: 6
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
