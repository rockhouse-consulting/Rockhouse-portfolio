# Rockhouse Consulting portfolio

A static site (plain HTML, CSS, JavaScript; no build step) for GitHub Pages. It
uses the Rockhouse navy/teal palette, the same header and footer as
rockhouse-consulting.com, and a single data file for all work.

```
index.html          portfolio page (filters by sector, capability, type)
project.html        one page per project, addressed as project.html?id=<id>
data/projects.js    ALL project content. The only file you edit day to day.
css/styles.css      brand tokens at the top; change fonts/colors there
js/portfolio.js     rendering logic (no edits needed)
embed.js            "Selected work" band for the main website
case-studies/       full case-study decks, one folder per project
```

## 1. Publish it

1. **Repo.** In GitHub Desktop: File > New repository. Name it
   `rockhouse-portfolio`. Copy everything in this folder into it, commit,
   and publish. Consider creating a free GitHub *organization* (for example
   `rockhouse-consulting`) and publishing there, so nothing in the repo
   address points to a personal account.
2. **DNS first.** In GoDaddy, add a DNS record: type `CNAME`, name
   `portfolio`, value `<your-account-or-org>.github.io`.
3. **Pages.** Repo Settings > Pages > Deploy from a branch > `main` / root.
   Under Custom domain enter `portfolio.rockhouse-consulting.com`, save, then
   tick Enforce HTTPS once it becomes available (can take up to an hour).

A subdomain is the setting that makes the two sites feel like one: visitors
stay on rockhouse-consulting.com, and nothing in the address bar mentions a
personal account.

## 2. Connect it to the main site

- **Navigation.** Point the existing Portfolio link (and add one to the nav
  if it is missing) to `https://portfolio.rockhouse-consulting.com/`.
- **Selected work band.** On the home or Services page, paste:

  ```html
  <div id="rockhouse-selected-work"></div>
  <script src="https://portfolio.rockhouse-consulting.com/embed.js" data-limit="3"></script>
  ```

  It shows projects marked `featured: true`. Other options:
  `data-ids="cpg-decision-rights,transit-kpi-governance"` to hand-pick, or
  `data-tag="KPI architecture & governance"` to show one capability. That
  makes it easy to put relevant proof beside a specific phase on the
  Services page.
- **Deep links.** Any page can link into a filtered portfolio, for example
  `.../index.html?type=client` or `.../index.html?tag=Root%20cause%20analysis`.
- **Fonts and spacing.** I could not read the main site's stylesheet, so the
  fonts (IBM Plex Sans) are my choice. If the main site uses something
  different, change `--font-body` and `--font-metric` at the top of
  `css/styles.css`. Do the same for the `font-family` in `embed.js` if needed.
- **Logo.** The header loads the logo from rockhouse-consulting.com/assets/logo.png
  so the two sites always match. To make this site self-contained, copy the
  file into `assets/` and change the three `src` paths.

## 3. Add a project

1. Open `data/projects.js`.
2. Copy the TEMPLATE block at the bottom into the `projects` list, filling in
   each field (the field guide at the top explains them).
3. Commit and push. The portfolio, its filters, the project page, and the
   main-site embed all update. There is nothing else to touch.

For team work, use `role` ("Lead analyst, 4-person team") and `context`
("Delivered for ..., with ...") so prospects can see who did what.

## 4. Move the full case-study decks over

Each card's page has a "Request the full case study" button until you add a
deck. To add one:

1. Copy the deck from your personal portfolio repo into
   `case-studies/<project-id>/`.
2. In `data/projects.js`, set `deck: "case-studies/<project-id>/<first-page>.html"`.
   The button then reads "Open the full case study".

| Project id | Source folder in the personal repo |
|---|---|
| cpg-decision-rights | Projects/OrgChange |
| aerospace-agentic-ai | Projects/AgenticAERO |
| auto-service-smed | Projects/ECRS |
| powertrain-tpm-visibility | Projects/AutoTPM |
| freemium-conversion | Projects/Conversion |
| telecom-early-churn | Projects/churn |
| transit-kpi-governance | Projects/Transit |
| health-gtm-beachhead | Projects/bioGTM |
| retail-data-integrity | Projects/RevOps |

Before copying, search each deck for personal branding (your name, the
personal email, links back to the personal site) and replace it with
Rockhouse's. The SMED deck needs the teal version, since the HTML pages in the
personal repo are still in the older navy/gold style.

## Things to confirm before launch

- **Labels.** Each project keeps the type it carries on the personal site
  (client engagement, applied case study, academic project, onboarding
  exercise). Prospects see this, so keep it accurate. The optional `context`
  field is the place to say where and under whose banner a client engagement
  was delivered.
- **Client and employer permissions.** Confirm that you may publish each
  client engagement, and whether client names must stay out.
- **Capability tags and sector groups** were drawn from the wording of each
  case and your skills list. Edit freely; the filters follow the data.
