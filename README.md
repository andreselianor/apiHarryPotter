# Proyecto: apiHarryPotter

<img src="images/logoHarryPotter.png">
Descripción
-----------
apiHarryPotter es una aplicación web que consume datos relacionados con el universo de Harry Potter mediante peticiones `fetch` a un archivo JSON. Muestra información de personajes y recursos relacionados, y sirve como ejercicio práctico para aprender a consumir APIs reales y adaptar la UI a los datos recibidos.

Autores
-------
- David Navarro
- Yves Andres
- Sergio Fernandez
- María Perez
- Juan Luís Márquez

Objetivo
--------
Aprender a consumir una API real, y forzarnos a adaptarnos a ella.

Características
--------------
- Consumo de API con JavaScript (`js/fetchApi.js`).
- Interfaz modular con fragmentos HTML en archivos independientes (`html/header.html`, `html/footer.html`).
- Estilos organizados en `css/`.

Estructura del proyecto
-----------------------
- `index.html` — Página principal.
- `css/` — Estilos (base.css, fetchApi.css, header/footer.css).
- `html/` — Fragmentos HTML reutilizables (header.html, footer.html).
- `js/` — Lógica JS (fetchApi.js, header.js, footer.js).
- `images/`, `img/`, `fonts/` — Recursos estáticos.

Cómo ejecutar
-------------
El proyecto es estático. Para probarlo localmente se recomienda levantar un servidor HTTP desde la raíz del proyecto:

Con Python 3:

```bash
python -m http.server 8000
```

O con `http-server` de npm:

```bash
npm install -g http-server
http-server -p 8000
```

Luego abrir `http://localhost:8000` en el navegador.

Notas sobre la API
------------------
El archivo `js/fetchApi.js` contiene la lógica para obtener datos. Si la API que usas requiere clave o tiene CORS restringido, configura un proxy o explica cómo obtener la clave.

Contribuir
---------
1. Haz fork del repositorio.
2. Crea una rama: `git checkout -b feat/mi-cambio`.
3. Envía un pull request con descripción clara de los cambios.

Licencia
--------
Indica la licencia del proyecto (por ejemplo MIT) o deja una nota si no hay licencia.

Siguientes pasos recomendados
----------------------------
- Documentar el endpoint exacto de la API y ejemplos de respuesta.
- Añadir capturas o GIFs en la README mostrando la app en acción.
- Integrar tests o un flujo de build si se añaden herramientas de bundling.
