(() => {
  const WA = "5491144712301";
  const btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  const close = () => { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); btn.setAttribute("aria-expanded", String(open)); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.getElementById("year").textContent = new Date().getFullYear();
  const form = document.getElementById("form"), note = document.getElementById("note");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    ["nombre", "contacto"].forEach(id => {
      const el = form.elements[id], bad = !el.value.trim();
      el.classList.toggle("is-invalid", bad);
      el.nextElementSibling.hidden = !bad;
      if (bad) ok = false;
    });
    if (!ok) return;
    const f = form.elements;
    const text = "Hola Total Constructora, quiero pedir un presupuesto.\n\n" +
      "Nombre: " + f.nombre.value.trim() + "\n" +
      "Contacto: " + f.contacto.value.trim() + "\n" +
      "Servicio: " + f.servicio.value + "\n" +
      (f.mensaje.value.trim() ? "Mensaje: " + f.mensaje.value.trim() : "");
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    note.textContent = "¡Gracias! Se abrió WhatsApp con tu consulta.";
  });
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(el => el.classList.add("is-in"));
    return;
  }
  items.forEach(el => {
    const sibs = el.parentElement.querySelectorAll(":scope > [data-reveal]");
    el.style.setProperty("--i", Array.prototype.indexOf.call(sibs, el));
  });
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(el => io.observe(el));
})();
