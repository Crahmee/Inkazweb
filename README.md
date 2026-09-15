# InKAZ website

This is a complete plain HTML, CSS and JavaScript website. No Node.js, npm, framework, build command or server backend is needed.

## Files

- `index.html` — all page content and navigation.
- `styles.css` — standard browser CSS, including the existing responsive layout and exact brand colors: navy `#05325E`, red `#FE421F`, white `#FFFFFF`.
- `script.js` — mobile navigation and the WhatsApp callback draft.
- `assets/` — supplied InKAZ logo, training photograph, facility equipment photograph, and local fonts with their licenses.
- `.nojekyll` — tells GitHub Pages to serve the files directly.

Open `index.html` to view the website locally. Keep the files and assets folder together. All local links are relative, so the same files work under any GitHub repository name or at a domain root without rebuilding.

## Publish on GitHub Pages

1. Create or open your GitHub repository.
2. Add the **contents** of this ZIP to the repository: `index.html`, `styles.css`, `script.js`, `assets`, and `.nojekyll`. Place `index.html` at the repository root, not inside an extra enclosing folder.
3. Commit the files to your `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
5. Select **main** and **/ (root)**, then click **Save**.
6. Once GitHub finishes publishing, open the URL shown in Pages settings, usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

If you previously configured a framework deployment workflow, disable that old workflow and use the branch publishing settings above for this plain-file version. There is no build output folder to deploy.

GitHub's [publishing source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) explain these settings. No site has been published as part of this delivery.

## Booking, quotation and callback behavior

All booking, enrollment, Kachef and quotation links open WhatsApp at **+96179123991**. The quotation message is general and does not specify AED.

The callback form keeps the existing name, setting and email fields. It validates the fields, then opens a WhatsApp draft containing those details. **The visitor must send the message in WhatsApp to complete the request.** The page does not claim the request has been received, and it provides an “Open WhatsApp draft” link if the new tab is blocked. Nothing is stored by the website. Without JavaScript, use the direct WhatsApp contact link.

The email contact remains `info@inkaz.me`.

## Content and maintenance

The navy is **#05325E**, sampled from the original supplied logo as its most frequent dark-blue pixel (RGB 5, 50, 94). It is used for the header, navy sections, footer and headings on white. Body text on white is charcoal **#30363D**. The logo artwork itself has not been recolored.

The three courses use equal-width, equal-height cards in one row from 1024px upward. Shared content-sized rows align titles, introductions, dividers, details controls and Enroll buttons. Opening course details never changes the card sizes. Below 1024px, the cards stack and retain independent natural heights. The “(A) PROGRAMS” label is restored above them. Each card has a short two-sentence introduction, “View course details” button and a WhatsApp Enroll button. Details open a native modal dialog containing the complete approved description and a matching Enroll button. Each modal has a Close button and Escape-to-close, keeps keyboard focus inside, and returns focus to its triggering button on close. Long descriptions scroll inside the modal, with its title, Close button and Enroll button remaining visible. JavaScript is required to open the modals.

The completed content and assets from the previous version were reused. The six main sections alternate navy and white. “Equip your organization” points to the fifth section, Emergency Care Solutions. The original `#devices` and `#schools` anchors remain as aliases.

Edit wording directly in `index.html`. The styles are already compiled into ordinary CSS; no Tailwind installation is required. Keep `script.js` included for the mobile menu, course modals and callback form. The original project and previous ZIP were not overwritten.

Local fonts are Inter, Inter Tight and JetBrains Mono. Their licenses are included under `assets/fonts`. The InKAZ logo is the supplied artwork, unchanged. The facility image was already included in the provided project and shows a wall-mounted AED cabinet with first-aid and oxygen equipment.

## Instructor certificates

Original PDFs are included, unchanged, under `assets/certificates/`:

| Course | Certificate file |
| --- | --- |
| Adult, Child & Infant CPR, AED & First Aid | `cpr-instructor.pdf` |
| O2 Administration | `oxygen-instructor.pdf` |
| Bloodborne Pathogens | `bloodborne-instructor.pdf` |

Each course modal includes a navy-outline “View instructor certificate” link beside the primary Enroll action, plus a small “Download PDF” link. Buttons wrap on narrow screens. Certificate links use relative paths, `target="_blank"` and `rel="noopener"`; download links use the `download` attribute. Include the certificates folder when uploading the site to GitHub Pages.
