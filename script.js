// tiny helper: sets the footer year and adds a tiny heart sparkle on clicks 🤍

document.getElementById("yearNow")?.textContent = new Date().getFullYear();

document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const heart = document.createElement("div");
  heart.textContent = "🤍";
  heart.style.position = "fixed";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.transform = "translate(-50%, -50%)";
  heart.style.pointerEvents = "none";
  heart.style.fontSize = "16px";
  heart.style.opacity = "0.9";
  heart.style.transition = "transform 600ms ease, opacity 600ms ease";
  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = "translate(-50%, -80px) scale(1.2)";
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 650);
});
