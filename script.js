"use strict";

// Navigation is ordinary anchor navigation; no router or framework is needed.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
function setMenu(open) {
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
}
menuButton.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("header")) setMenu(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1280) setMenu(false);
});

// A static GitHub Pages site cannot receive form submissions. Prepare a
// WhatsApp draft instead; the visitor must send it to complete the request.
const callbackForm = document.querySelector("#callback-form");
callbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#callback-name");
  name.setCustomValidity(name.value.trim() ? "" : "Please enter your name.");
  if (!callbackForm.reportValidity()) return;
  const setting = document.querySelector("#callback-setting").value;
  const email = document.querySelector("#callback-email").value.trim();
  const message = `Hello InKAZ, I'd like to request a callback.\nName: ${name.value.trim()}\nSetting: ${setting}\nEmail: ${email}`;
  document.querySelector("#callback-message").value = message;
  const url = `https://wa.me/96179123991?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  const status = document.querySelector("#callback-status");
  status.replaceChildren(
    document.createTextNode(
      "Your draft is ready. Send the message in WhatsApp to complete your callback request. ",
    ),
  );
  const fallback = document.createElement("a");
  fallback.href = url;
  fallback.target = "_blank";
  fallback.rel = "noopener noreferrer";
  fallback.textContent = "Open WhatsApp draft";
  status.append(fallback);
  status.hidden = false;
});
document
  .querySelector("#callback-name")
  .addEventListener("input", (event) => event.target.setCustomValidity(""));
document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

// Native dialogs make the background inert. Explicit focus handling also
// restores the invoking button and wraps keyboard navigation inside the modal.
document.querySelectorAll(".course-dialog").forEach((dialog) => {
  let opener = null;
  const trigger = document.querySelector(`[aria-controls="${dialog.id}"]`);
  trigger.addEventListener("click", () => {
    opener = trigger;
    dialog.showModal();
    document.documentElement.classList.add("course-modal-open");
    dialog.querySelector(".course-dialog-body").scrollTop = 0;
    dialog.querySelector("h2").focus({ preventScroll: true });
  });
  dialog
    .querySelector(".course-dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("course-modal-open");
    opener?.focus({ preventScroll: true });
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [
      ...dialog.querySelectorAll('button, a[href], [tabindex="0"]'),
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !focusable.includes(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });
});
