/* ==========================================================================
   Tagalog / English switch for the landing page.

   How it works:
   - The page's HTML is written in TAGALOG (the default). Any element with
     data-i18n="key" remembers its Tagalog HTML on load.
   - EN below holds the English for each key. Switching to English swaps it in;
     switching back restores the remembered Tagalog. So each string lives in
     exactly one place: Tagalog in index.html, English here.
   - data-i18n-attr="alt:key; aria-label:key2" does the same for attributes.
   - UI holds the short strings the page script builds at runtime (trial
     verdicts, form messages, the sound button), in both languages.
   - The choice is remembered per browser; ?lang=en in the URL forces English.
   ========================================================================== */
(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "loader": "Tondo, Manila · dusk",
    "nav.story": "Story",
    "nav.parry": "Parry",
    "nav.moves": "Moves",
    "nav.foes": "Enemies",
    "nav.enlist": "Enlist",

    "hero.alt": "Enteng stands in a lamp-lit Tondo alley among fallen Guardia Civil, a rattan stick in hand.",
    "hero.kicker": "Combat prototype · Open playtest",
    "hero.tag": "Not for the flag.<br />For her.",
    "hero.sub": "A third-person arnis action game. Tondo, Manila, August 1896.",
    "hero.cta1": "Join the playtest",
    "hero.cta2": "Try the parry first",
    "hero.scroll": "Scroll ↓",
    "marquee": "One stick",

    "story.kicker": "The story",
    "story.title": "The wrong<br />door.",
    "story.lede": "Vicente “Enteng” Magbanua buried his blade and left the <i>juego todo</i> pits to raise his daughter in a quiet Tondo alley. Then a patrol hunting Katipuneros kicked in the wrong door.",
    "mural.aria": "Story panels, scroll sideways",
    "p1.alt": "Ink-wash illustration: Enteng's hands binding a rattan stick at his workbench while a child's hand sets down a carved wooden bird.",
    "p1.h": "A quiet workbench",
    "p1.p": "The fighter from the pits is now a rattan-cutter. He binds sticks for a living, and his daughter leaves her carved bird on the bench.",
    "p2.alt": "Ink-wash illustration: Guardia Civil soldiers kick in a bamboo door; pamphlets and the wooden bird lie scattered on the floor.",
    "p2.h": "The wrong door",
    "p2.p": "A Katipunero runner drops <i>Kalayaan</i> pamphlets in his yard. Minutes later a patrol kicks in his door and takes the one thing he swore to protect.",
    "p3.alt": "Ink-wash illustration: Enteng, stick in hand, faces a rain-soaked street filling with torch-bearers under a red flag.",
    "p3.h": "A vendetta becomes a spark",
    "p3.p": "He takes up a seasoned rattan <i>baston</i>, no steel, and curses the Spanish and the rebels alike. But every street he walks wakes up a little more of Tondo.",
    "mural.hint": "← Swipe →",

    "man.aria": "Why a stick",
    "man.kicker": "Why a stick?",
    "man.text": "Spanish law forbade Filipinos to carry blades. So the masters hid the blade inside the stick.",
    "fact1": "The perfect <i>sangga</i> window. Hit it and the officer staggers wide open.",
    "fact2.unit": "waves",
    "fact2": "A Tondo street at dusk. Two Guardia Civil, then sabers and rifles together.",
    "fact3": "No steel until they bring it to you. Then you take it from them.",

    "trial.kicker": "The trial",
    "trial.title": "Can you<br /><span class=\"crim\">sangga?</span>",
    "trial.lede": "The ring closes as the officer raises his saber. When it <b>flashes white</b>, he commits. Press <kbd>Q</kbd>, <kbd>Space</kbd>, or tap the arena just before the blade lands. Five strikes. This is the same window as the game.",
    "legend1": "Perfect: last 150 ms before impact",
    "legend2": "Sangga: blocked, but you take chip damage",
    "legend3": "Too early, or hit",
    "arena.aria": "Parry trial. Press Q or Space when the ring flashes white.",

    "moves.kicker": "The moveset",
    "moves.lede": "Real arnis vocabulary, built into the controls. Corrections from practitioners are welcome. That's what this playtest is for.",
    "m1.h": "Angles 1·2·5<em>Light chain</em>",
    "m1.p": "Forehand diagonal, backhand diagonal, thrust to the middle. Fast, low damage, and the base of everything else.",
    "m2.h": "Punyo<em>Butt-end strike</em>",
    "m2.p": "Get close and the light strike turns into a short punch with the butt of the stick. It interrupts enemy attacks.",
    "m2.key": "Light, up close",
    "m3.h": "Redonda<em>Circular finisher</em>",
    "m3.p": "Three lights, then heavy: a continuous circular flurry that hits everyone close to you.",
    "m4.h": "Sangga<em>Timed parry</em>",
    "m4.p": "Meet the blade in the last 150 ms. A perfect sangga freezes time for a beat and opens a counter. A late one still costs you.",
    "m5.h": "Ilag<em>Triangle footwork</em>",
    "m5.p": "A short angled sidestep, <i>tatsulok</i> footwork rather than a roll. Step off the line of a rifle shot or around a guard.",
    "m6.h": "Agaw<em>Disarm</em>",
    "m6.p": "Right after a perfect sangga, strip the saber from his hand. Pick it up and fight with his steel for a while.",

    "foes.kicker": "Know the enemy",
    "foes.title": "Read them<br />before they move.",
    "gc.alt": "A Guardia Civil officer in striped uniform swings a saber.",
    "gc.arm": "Saber · Close range",
    "dt.attacks": "Attacks",
    "gc.attacks": "A quick slash, and a telegraphed overhead. Both can be parried.",
    "dt.guard": "Guard",
    "gc.guard": "Blocks light strikes from the front. Break it with a heavy, or flank him.",
    "dt.tell": "Tell",
    "gc.tell": "He flashes before he commits. That's your cue.",
    "gc.agaw": "Drops his saber when disarmed.",
    "cz.alt": "A Cazador rifleman fires down a rainy alley as Enteng dives aside.",
    "cz.stamp": "Rifle",
    "cz.arm": "Rifle · Long range",
    "cz.attacks": "Aims for about 1.5 s with a visible aim line, then fires. Up close, a slow rifle-butt swing.",
    "dt.counter": "Counter",
    "cz.counter": "<i>Ilag</i> through the shot, or put a cart or bamboo crate between you.",
    "dt.opening": "Opening",
    "cz.opening": "About 2 s of reloading after every shot. Close the distance.",

    "film.kicker": "Watch",
    "film.title": "The stick.",
    "film.aria": "Play trailer",
    "film.play": "PLAY",

    "enlist.kicker": "Enlist",
    "enlist.title": "Take the<br />oath.",
    "enlist.lede": "Katipunan members swore an oath and took a war name. Bonifacio's was <i>Maypagasa</i>, “there is hope.” Pick yours, sign up, and you can play right away in your browser.",
    "req1.k": "Plays in",
    "req1.v": "Chrome, Edge or Firefox · laptop / desktop",
    "req2.k": "Controls",
    "req2.v": "Keyboard + mouse, or a controller",
    "req3.k": "Time",
    "req3.v": "About 10–15 minutes",
    "req4.k": "After",
    "req4.v": "A short feedback form",

    "oath.title": "The Oath",
    "oath.no": "No.",
    "o.s1": "I am",
    "o.s2": ", known in battle as",
    "o.s3": ". Reach me at",
    "o.s4": "from",
    "o.s5": ". In arnis, I am",
    "o.s6": "and I will fight with",
    "o.lbl.name": "Your full name",
    "o.ph.name": "your full name",
    "o.lbl.alias": "Your war name (nickname)",
    "o.ph.alias": "war name",
    "o.lbl.section": "Class or section (optional)",
    "o.ph.section": "class / section",
    "o.lbl.exp": "Arnis experience",
    "o.exp1": "new to it",
    "o.exp2": "I know a little",
    "o.exp3": "I train",
    "o.exp4": "I teach",
    "o.lbl.ctl": "Controls",
    "o.ctl1": "keyboard + mouse",
    "o.ctl2": "controller",
    "consent": "I agree that my answers and playtest feedback can be used by my instructor for this class project. I can ask for them to be deleted at any time.",
    "sigcap": "Signature: your war name in baybayin, the old Tagalog script",
    "submit": "Seal the oath",
    "after.p": "You're on the list. The street is ready when you are. Play on a computer, and keep this tab open for the feedback form after.",
    "after.cta": "Enter Tondo",

    "ai.kicker": "AI declaration · Proof of concept",
    "ai.title": "How this<br />was made.",
    "ai.p1": "This build is a <b>proof of concept</b>. We used generative AI to make it quickly enough to put in your hands and find out whether the combat is fun. The AI-made pieces are placeholders and starting points, not the finished game.",
    "ai.p2": "The game's UX is <b>human-centred</b>. Playtesting, fine-tuning and finalising the narrative, gameplay and illustration will be done by people, starting with your feedback.",
    "ai.table": "Where AI was used, and the human role",
    "ai.th1": "Part of the game",
    "ai.th2": "AI tool (proof of concept)",
    "ai.th3": "What the AI did",
    "ai.th4": "Human role: now → final",
    "ai.r1a": "<b>Illustrations</b> (story art, posters)",
    "ai.r1c": "Generated the ink-wash, noir and woodcut concept images",
    "ai.r1d": "Art direction and selection now; final illustration by human artists",
    "ai.r2a": "<b>3D characters</b>",
    "ai.r2c": "Turned concept art into 3D models; auto-rigged and animated them",
    "ai.r2d": "Choosing and importing models now; final characters refined by people",
    "ai.r3a": "<b>Voice, music &amp; sound</b>",
    "ai.r3c": "Generated the trailer narration and music, and the hit, parry and ambience sounds",
    "ai.r3d": "Picking and placing sounds now; tuned against playtest feedback",
    "ai.r4a": "<b>Narrative</b> (story &amp; characters)",
    "ai.r4c": "Drafted the backstory and character bible from the creator's premise",
    "ai.r4d": "Premise and history now; the final narrative is written and approved by people",
    "ai.r5a": "<b>Arnis technique &amp; terms</b>",
    "ai.r5b": "AI (starting point)",
    "ai.r5c": "Suggested the first moveset, strike angles and Tagalog terms",
    "ai.r5d": "Fine-tuned and finalised by people: arnis experts, practitioners and the literature",
    "ai.r6a": "<b>Gameplay &amp; UX</b>",
    "ai.r6d": "Designed, playtested and tuned by people. This playtest is that step.",
    "ai.r7a": "<b>Code</b> (game + this website)",
    "ai.r7c": "Wrote the Unity C# scripts, the web build and this site",
    "ai.r7d": "Design rules, feel-testing and approval of every step",
    "ai.r8a": "<b>Logo &amp; page text</b>",
    "ai.r8c": "Built the logo from the open-licence Big Shoulders font, drafted the copy and its Tagalog translation",
    "ai.r8d": "The struck-through logo idea, and final wording",
    "ai.note": "Your sign-up and feedback go only to the instructor's Google Sheet. They are not sent to any AI tool.",

    "foot.big": "One stick.",
    "foot.made": "Katipunero · combat prototype, playtest build · made in Unity 6",
    "foot.arnis": "Arnis has been the national martial art and sport of the Philippines since 2009 (RA 9850).",
    "foot.play": "Play",
    "foot.feedback": "Feedback",
    "foot.ai": "AI declaration",
    "foot.hist": "History",
    "hist.kicker": "Historical note",
    "hist.title": "Fiction,<br />in a real moment.",
    "hist.p": "<b>Katipunero</b> is fiction. Enteng, his family and his story are invented, but they are set in a real time and place: Tondo at the outbreak of the Philippine Revolution of 1896. It is a game, not a history lesson.",
    "hist.l1": "<b>Real people</b>The Katipunan, Andres Bonifacio and his nom de guerre <i>Maypagasa</i> are real. The scenes in the game did not happen, and it makes no claim about what real people did or thought.",
    "hist.l2": "<b>The blade ban</b>A well-known story in arnis says the Spanish banned blades, so the techniques were hidden in the stick and in dance. Historians still debate it. We use it as the legend of the game's world, not as settled history.",
    "hist.l3": "<b>The enemies</b>The Guardia Civil and the Cazadores are based on real colonial forces, simplified for play. One liberty: Spain's Cazador battalions only reached Manila in October 1896, two months after Enteng's story. We bring them in early as the rifleman enemy. They stand for a system of colonial rule, not for a people or a nation.",
    "hist.l4": "<b>Simplified details</b>Arnis technique, uniforms, weapons and the street are simplified for this prototype, and some early details came from AI. If something is wrong, tell us in the feedback form. That is what the playtest is for.",
    "hist.why": "Why we made this",
    "hist.teaser": "What is real and what is fiction, plus books to read after you play.",
    "hist.more": "Read the full note",
    "ai.more": "See the full breakdown",
    "after.read": "After you play: <a href=\"kasaysayan/#alamin\">learn the real history →</a>",
    "sub.back": "← Back",
    "hist.intent": "We want you to leave the game with questions. Who were the Katipuneros, really? What was life in Tondo like in 1896? Where does arnis come from? If one street fight makes you open a book, ask your lolo and lola, or visit a museum, the game has done its job. <b>Know our history, and learn to love it.</b>",
    "hist.readh": "Know more",
    "hist.r1": "<i>The Revolt of the Masses</i>, Teodoro Agoncillo (1956). The classic account of the Katipunan and Bonifacio.",
    "hist.r2": "<i>Pasyon and Revolution</i>, Reynaldo Ileto (1979). How ordinary Filipinos understood the revolution.",
    "hist.r3": "<i>Kartilya ng Katipunan</i>, Emilio Jacinto. The teachings every member swore to. Short enough to read today.",
    "hist.r4": "<i>Filipino Martial Culture</i>, Mark V. Wiley (1997). The history and masters of arnis, eskrima and kali.",
    "hist.r5": "Visit the Museo ng Katipunan at the Pinaglabanan Shrine in San Juan, and the <a href=\"https://nhcp.gov.ph/\" target=\"_blank\" rel=\"noopener\">National Historical Commission of the Philippines</a>."
  };

  /* Strings the page script builds at runtime. {n}, {ms} etc. are filled in. */
  var UI = {
    fil: {
      sndOff: "Sound off", sndOn: "Sound on",
      ready: "Ready", strike: "Taga {n} / {t}", done: "Tapos",
      start: "Simulan", again: "Ulit",
      earlyL: "Masyadong maaga", earlyS: "Nabasa ka niya, kaya pinigil niya ang taga.",
      hitL: "Tinamaan ka", hitS: "Tumama ang talim.",
      perfectL: "Perfect", perfectS: "Perfect na sangga · {ms} ms bago tumama",
      goodL: "Sangga", goodS: "Nasalag, {ms} ms na maaga. May kaunting damage.",
      sumPerfect: "perfect na sangga", sumClosest: " · pinakamalapit: {ms} ms bago tumama",
      sumT1: "Maestro.", sumT2: "Handa ka na.", sumT3: "Tuturuan ka ng Tondo.",
      sumCta: "Manumpa at lumaban nang totoo →",
      missing: "Kulang pa: {list}.", mName: "pangalan mo", mEmail: "valid na email", mConsent: "pagpayag mo",
      submit: "Tatakan ang panunumpa", sealing: "Tinatatakan…",
      sendFail: "Hindi naipadala. I-check ang connection mo at subukan ulit."
    },
    en: {
      sndOff: "Sound off", sndOn: "Sound on",
      ready: "Ready", strike: "Strike {n} / {t}", done: "Done",
      start: "Begin trial", again: "Again",
      earlyL: "Too early", earlyS: "He read you and held the strike.",
      hitL: "Hit", hitS: "The blade landed.",
      perfectL: "Perfect", perfectS: "Perfect sangga · {ms} ms before impact",
      goodL: "Sangga", goodS: "Blocked, {ms} ms early. Chip damage.",
      sumPerfect: "perfect sangga", sumClosest: " · closest: {ms} ms before impact",
      sumT1: "Maestro.", sumT2: "You're ready.", sumT3: "Tondo will teach you.",
      sumCta: "Take the oath and fight for real →",
      missing: "Still missing: {list}.", mName: "your name", mEmail: "a valid email", mConsent: "your consent",
      submit: "Seal the oath", sealing: "Sealing…",
      sendFail: "Couldn't send. Check your connection and try again."
    }
  };

  var STORE_KEY = "katipunero.lang";
  var html = document.documentElement;
  var textEls = [].slice.call(document.querySelectorAll("[data-i18n]"));
  var attrEls = [].slice.call(document.querySelectorAll("[data-i18n-attr]"));
  var listeners = [];

  // Remember the Tagalog that is written in the HTML.
  textEls.forEach(function (el) { el._fil = el.innerHTML; });
  attrEls.forEach(function (el) {
    el._pairs = el.getAttribute("data-i18n-attr").split(";").map(function (p) {
      var kv = p.split(":"); return { attr: kv[0].trim(), key: kv[1].trim() };
    });
    el._filAttr = {};
    el._pairs.forEach(function (p) { el._filAttr[p.attr] = el.getAttribute(p.attr); });
  });

  // Catch a missing English string during development instead of silently showing Tagalog.
  textEls.forEach(function (el) { if (!(el.getAttribute("data-i18n") in EN)) console.warn("[i18n] no English for", el.getAttribute("data-i18n")); });
  attrEls.forEach(function (el) { el._pairs.forEach(function (p) { if (!(p.key in EN)) console.warn("[i18n] no English for", p.key); }); });

  function pick() {
    var q = /[?&]lang=(en|fil|tl)\b/.exec(location.search);
    if (q) return q[1] === "en" ? "en" : "fil";
    try { var s = localStorage.getItem(STORE_KEY); if (s === "en" || s === "fil") return s; } catch (e) {}
    return "fil"; // default: Tagalog
  }

  var lang = pick();

  function apply(next, save) {
    lang = next === "en" ? "en" : "fil";
    var en = lang === "en";
    html.lang = en ? "en" : "fil";
    textEls.forEach(function (el) { el.innerHTML = en ? EN[el.getAttribute("data-i18n")] : el._fil; });
    attrEls.forEach(function (el) {
      el._pairs.forEach(function (p) { el.setAttribute(p.attr, en ? EN[p.key] : el._filAttr[p.attr]); });
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    if (save) { try { localStorage.setItem(STORE_KEY, lang); } catch (e) {} }
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.getAttribute("data-lang") !== lang) apply(b.getAttribute("data-lang"), true);
    });
  });

  window.I18N = {
    get lang() { return lang; },
    set: function (l) { apply(l, true); },
    t: function (key, vars) {
      var s = UI[lang][key] != null ? UI[lang][key] : UI.fil[key];
      if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
      return s;
    },
    onChange: function (fn) { listeners.push(fn); }
  };

  apply(lang, false);
})();
