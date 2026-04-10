

const imagen = document.getElementById('pfp')
const numeroEntero = Math.floor(Math.random() * 2) + 1;

const configuration = window.profile && window.profile.INFO;

if(!configuration)
    {
        console.error("Missing profile configuration")
    }

const titleH1 = document.querySelector("#title h1");
const titleH2 = document.querySelector("#title h2");
const pfpElement = document.getElementById("pfp");
const iconsElement = document.getElementById("icons");
const linksElement = document.getElementById("links");

titleH1.textContent = configuration.title || "placeholder Name";
titleH2.textContent = configuration.subtitle || "";

const root = document.documentElement;
root.style.setProperty("--bg", configuration.theme.bg);
root.style.setProperty("--card", configuration.theme.card);
root.style.setProperty("--text", configuration.theme.text);
root.style.setProperty("--ink", configuration.theme.ink);

const images = Array.isArray(configuration.pfpImages) ? configuration.pfpImages.filter(Boolean) : [];
const randomIndex = Math.floor(Math.random() * images.length);
pfpElement.src = images[randomIndex];

const platforms = configuration.platforms


iconsElement.innerHTML = "";
configuration.socialIcons.forEach((id) => {
  const platform = platforms[id];

  const a = document.createElement("a");
  a.href = platform.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", platform.label);

  const img = document.createElement("img");
  img.src = platform.icon;
  img.alt = platform.label;

  a.appendChild(img);
  iconsElement.appendChild(a);
});

linksElement.innerHTML = "";
configuration.rectangularLinks.forEach((id) => {
  const platform = platforms[id];

  const button = document.createElement("button");
  button.className = "linkContainer";
  button.type = "button";

  const text = document.createElement("h1");
  text.className = "h1-Link";
  text.textContent = platform.label;

  button.appendChild(text);

  button.addEventListener("click", () => {
    window.location.href = platform.url;
  });

  linksElement.appendChild(button);
});