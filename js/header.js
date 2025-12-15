document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("header-root");
  if (!root) return;

  try {
    const res = await fetch("html/header.html");
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