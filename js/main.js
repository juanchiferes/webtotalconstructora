// Datos de contacto: cambiar acá y se actualizan en toda la página.
const CONTACT = {
  whatsapp: "5491100000000", // código de país + área + número, sin "+" ni espacios
  phone: "+54 9 11 0000-0000",
  email: "info@totalconstructora.com.ar",
};

// Aplicar datos de contacto
document.querySelectorAll("[data-contact]").forEach((el) => {
  const type = el.dataset.contact;
  if (type === "whatsapp") el.href = `https://wa.me/${CONTACT.whatsapp}`;
  if (type === "phone") {
    el.href = `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`;
    el.textContent = CONTACT.phone;
  }
  if (type === "email") {
    el.href = `mailto:${CONTACT.email}`;
    el.textContent = CONTACT.email;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Formulario: arma el mensaje y abre WhatsApp
const form = document.getElementById("form");
const note = document.getElementById("form-note");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = data.get("nombre").trim();
  const contacto = data.get("contacto").trim();
  const missing = [form.nombre, form.contacto].filter((f) => !f.value.trim());
  [form.nombre, form.contacto].forEach((f) => f.classList.toggle("invalid", missing.includes(f)));
  if (missing.length) {
    note.textContent = "Completá tu nombre y un teléfono o email de contacto.";
    note.classList.add("error");
    missing[0].focus();
    return;
  }
  note.classList.remove("error");
  const text = [
    "Hola, quisiera pedir un presupuesto.",
    `Nombre: ${nombre}`,
    `Contacto: ${contacto}`,
    `Necesito: ${data.get("servicio")}`,
    data.get("mensaje").trim() && `Detalle: ${data.get("mensaje").trim()}`,
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  note.textContent = "¡Gracias! Se abrió WhatsApp con tu consulta.";
});

// Animaciones de entrada al hacer scroll
const targets = document.querySelectorAll(".card, .steps li, .clients article, .values li, .section__head, .about__copy, .contact > *");
if ("IntersectionObserver" in window) {
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((el) => io.observe(el));
}
