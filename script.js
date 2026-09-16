(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("site-theme");

  if (savedTheme === "dark") {
    root.dataset.theme = "dark";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const isDark = root.dataset.theme === "dark";
      root.dataset.theme = isDark ? "light" : "dark";
      localStorage.setItem("site-theme", isDark ? "light" : "dark");
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();
