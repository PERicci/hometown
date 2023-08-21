const toggle = document.getElementById("changeTheme");

const storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
  if (storedTheme === "dark") {
    document.getElementById("changeTheme").className = "changeTheme-dark";
  } else {
    document.getElementById("changeTheme").className = "changeTheme-light";
  }
}

toggle.onclick = function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = currentTheme === "dark" ? "light" : "dark";
  
  if (targetTheme === "dark") {
    document.getElementById("changeTheme").className = "changeTheme-dark";
  } else {
    document.getElementById("changeTheme").className = "changeTheme-light";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
