/* Anonymous gameplay stats — the page side of the game's TelemetryBridge.

   Privacy by design (Data Privacy Act, RA 10173 — proportionality):
   - Only gameplay counters are sent: waves, times, parries, strikes, grades. No name, alias,
     email or device details. The random id ("sid") lives only in this browser.
   - Players can switch stats off (stored in this browser only). Off = nothing is sent.
   - A run is linked to written feedback ONLY if the player ticks the box on the feedback form.
   - Nothing is sent while SHEET_URL in config.js is empty ("preview mode").
*/
(function () {
  var KEY_OFF = "katipunero.stats.off";
  var KEY_SID = "katipunero.sid";

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }

  function enabled() { return get(KEY_OFF) !== "1"; }

  function sid() {
    var s = get(KEY_SID);
    if (!s) {
      var bytes = new Uint8Array(8);
      (window.crypto || window.msCrypto).getRandomValues(bytes);
      s = Array.prototype.map.call(bytes, function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
      set(KEY_SID, s);
    }
    return s;
  }

  function toParams(json) {
    var row = {};
    try { row = JSON.parse(json); } catch (e) {}
    var p = new URLSearchParams();
    p.set("form-name", "playtest-run");
    p.set("sid", sid());
    Object.keys(row).forEach(function (k) { p.set(k, row[k]); });
    p.set("submitted_at", new Date().toISOString());
    return p;
  }

  function post(json, useBeacon) {
    if (!enabled()) return;
    var url = (window.KATIPUNERO && window.KATIPUNERO.SHEET_URL) || "";
    var body = toParams(json);
    if (!url) { console.info("[preview mode] run stats not sent:", body.toString()); return; }
    if (useBeacon && navigator.sendBeacon) { navigator.sendBeacon(url, body); return; }
    fetch(url, { method: "POST", mode: "no-cors", body: body, keepalive: true }).catch(function () {});
  }

  var pending = null; // latest in-progress snapshot; sent only if the tab closes mid-fight

  window.katipuneroRun = {
    snapshot: function (json) { pending = json; },
    finished: function (json) { pending = null; post(json, false); },
    enabled: enabled,
    setEnabled: function (on) { set(KEY_OFF, on ? null : "1"); if (!on) pending = null; },
  };

  window.addEventListener("pagehide", function () {
    if (pending) { post(pending, true); pending = null; }
  });
})();
