# Verification — course modals

- Tested at 1440, 1024, 768, 390 and 320 pixel widths in Microsoft Edge.
- All three complete course descriptions match the previously approved paragraphs exactly.
- Desktop cards retain equal widths and heights and aligned content rows. Mobile cards remain stacked with natural heights.
- Card widths and heights remain exactly unchanged before, during and after opening every modal at every tested width.
- Each modal opens with keyboard focus on its course title. Tab and Shift+Tab remain inside; background content is inert while open.
- Both the Close button and Escape close the modal and restore focus to the triggering details button. Page scrolling is restored afterward.
- Long descriptions scroll within the modal on mobile. The dialog stays inside a 640px-high viewport at both 390px and 320px widths, with the Close and Enroll controls visible.
- Clicked all three modal Enroll links and verified their course-specific WhatsApp destinations at +96179123991. Requests were intercepted locally; no messages were sent.
- No browser exceptions during modal checks. Desktop and mobile dialogs were visually reviewed.
- Previous site checks cover local images/fonts, relative links, navigation, sampled navy #05325E, red #FE421F, white #FFFFFF and info@inkaz.me.
- Callback behavior is unchanged: validate details, open a WhatsApp draft, and instruct the visitor to send it. No false delivery-success message is displayed.

The ZIP contains plain HTML, CSS, JavaScript, local assets and publishing instructions. No framework installation or build step is required. No website has been published.

Certificate update verification:
- All three supplied PDF files were copied byte-for-byte with the specified course mapping.
- Verified HTTP 200 responses with application/pdf content type for every relative PDF URL under the repository path.
- Verified new-tab link activation and downloaded filenames and bytes for every certificate.
- Checked desktop (1440px) and mobile (390px and 320px) modal layouts: no overflow, unchanged card dimensions, and correct focus trapping/restoration including the new links.
- Full course descriptions and course-card HTML are unchanged. Certificate actions appear only in modal footers. No site was published.
