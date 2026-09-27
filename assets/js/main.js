/* ══════════════════════════════════════════════
   BUSNESS TIME — JS léger, sans dépendance
   ══════════════════════════════════════════════ */

/* ── ⚠️ NUMÉRO WHATSAPP ──────────────────────────
   Remplacez la valeur ci-dessous par le numéro
   WhatsApp Business réel, au format international
   sans "+" ni espaces (ex : 261341234567).       */
const WHATSAPP_NUMBER = "261340000000";

/* Construit tous les liens WhatsApp de la page.
   Chaque lien .wa-link porte un data-message qui
   devient le message pré-rempli côté WhatsApp.   */
document.querySelectorAll(".wa-link").forEach((link) => {
  const message = link.dataset.message || "Bonjour Business Times !";
  link.href =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
});

/* Affiche le numéro lisible dans le footer */
document.querySelectorAll(".wa-number").forEach((el) => {
  const n = WHATSAPP_NUMBER;
  // 261 34 00 000 00 → formatage doux
  el.textContent =
    "+" + n.replace(/^(\d{3})(\d{2})(\d{2})(\d{3})(\d{2})$/, "$1 $2 $3 $4 $5");
});

/* ── Apparition douce au scroll ── */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

/* ── Année automatique ── */
document.getElementById("year").textContent = new Date().getFullYear();
