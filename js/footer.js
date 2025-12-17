fetch("html/footer.html")
  .then((res) => {
    if (!res.ok) throw new Error("Footer not found");
    return res.text();
  })
  .then((html) => {
    const footer = document.getElementById("footer");
    if (footer) footer.innerHTML = html;
  });
