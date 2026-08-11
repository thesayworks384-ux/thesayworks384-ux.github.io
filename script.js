// ============================================================
// DibuTech V1 — CAMBIA ESTE NÚMERO ANTES DE PUBLICAR
// Formato: código de país + número, SIN +, espacios ni guiones.
// México: 52 + número de 10 dígitos.
// Ejemplo: "5215512345678"
// ============================================================
const WHATSAPP_NUMBER = "525554738293";

function openWhatsApp(service = "") {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Configura primero tu número de WhatsApp en script.js.");
    return;
  }
  const text = service
    ? `Hola DibuTech. Quiero cotizar un servicio de ${service}.`
    : "Hola DibuTech. Quiero solicitar una cotización.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

document.querySelectorAll("[data-wa]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    openWhatsApp();
  });
});

document.querySelectorAll("[data-service]").forEach(el => {
  el.addEventListener("click", () => openWhatsApp(el.dataset.service));
});
