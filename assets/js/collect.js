/* Sends a form to the teacher's Google Sheet (via Google Apps Script).
   GitHub Pages can't receive forms itself, so we POST straight to the script.
   "no-cors" means we can't read the reply, so we treat a completed request as success. */
window.sendToSheet = function (form) {
  var url = (window.KATIPUNERO && window.KATIPUNERO.SHEET_URL) || "";
  var body = new URLSearchParams(new FormData(form));
  body.set("page", location.pathname);
  body.set("submitted_at", new Date().toISOString());
  if (!url) {
    console.info("[preview mode] SHEET_URL is empty in assets/js/config.js, so nothing was sent:", body.toString());
    return Promise.resolve({ preview: true });
  }
  return fetch(url, { method: "POST", mode: "no-cors", body: body });
};
