document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('#dark-mode-toggle');

  const sunPath = `M12 2v2m0 16v2m10-10h-2M4 12H2
    m16.24-7.76l-1.42 1.42M6.34 17.66l-1.42 1.42
    M17.66 17.66l1.42-1.42M6.34 6.34L4.92 4.92
    M12 6a6 6 0 100 12 6 6 0 000-12z`;

  const moonPath = `M21 12.79A9 9 0 1111.21 3
    a7 7 0 0010.08 9.79z`;

  const setTheme = (isDark) => {
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    buttons.forEach(btn => {
      const svg = btn.querySelector('svg');
      const path = svg?.querySelector('path');
      if (svg && path) {
        path.setAttribute('d', isDark ? moonPath : sunPath);
        svg.classList.remove('rotate-0', 'rotate-180');
        svg.classList.add(isDark ? 'rotate-180' : 'rotate-0');
      }
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  };

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    setTheme(true);
  } else if (saved === 'light') {
    setTheme(false);
  } else {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = !root.classList.contains('dark');
      setTheme(isDark);
    });
  });
});
