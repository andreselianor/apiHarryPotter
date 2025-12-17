<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("footer-root");
  if (!root) return;

  try {
    const res = await fetch("html/footer.html");
    if (!res.ok) return;
    root.innerHTML = await res.text();
  } catch {
    return;
  }

  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("site-nav");
  const siteHeader = document.getElementById("siteHeader");

  if (!navToggle || !siteNav || !siteHeader) return;

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLAnchorElement)) return;
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  const applyScrollState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  applyScrollState();
  window.addEventListener("scroll", applyScrollState);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
=======
fetch("html/footer.html")
    .then(res => {
        if (!res.ok) throw new Error("Footer not found");
        return res.text();
    })
    .then(html => {
        const footer = document.getElementById("footer");
        if (footer) footer.innerHTML = html;
    });
>>>>>>> 7b32b6a (fix:correct footer injection and script order)
