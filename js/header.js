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


let filtersOn = true;
function openFilters() {
  if (filtersOn)
    document.getElementById("filters").style.display = "flex";
  else
    document.getElementById("filters").style.display = "none";
  filtersOn = !filtersOn;
}

function openCharacters() {
  document.getElementById("filters").style.display = "none";
  filtersOn = true;
  displayHarry(urlCharacters);
}

function openInfo() {
  // Evita duplicados
  if (document.querySelector(".alert")) return;

  const node = document.createElement("div");
  node.classList.add("alert");

  node.innerHTML = `
    <button class="closeAlert">✕</button>
    <h3>Sobre esta API</h3>
    <p>
      La Harry Potter API alojada en 
      <br><a href="https://hp-api.onrender.com/" target="_blank" rel="noopener noreferrer">
        https://hp-api.onrender.com/
      </a><br>
      ofrece acceso libre a un universo de datos del mundo mágico de Harry Potter.
    </p>
    <p>
      Proporciona información sobre personajes, hechizos y otros elementos del lore,
      permitiendo crear proyectos, visualizaciones y aplicaciones temáticas sin
      necesidad de autenticación.
    </p>
    <p>
      Es ideal tanto para desarrolladores como para fans que quieran integrar
      contenido auténtico del universo de J.K. Rowling en experiencias interactivas.
    </p>
  `;

  document.body.appendChild(node);

  // Cerrar alerta
  node.querySelector(".closeAlert").addEventListener("click", () => {
    node.remove();
  });
}
