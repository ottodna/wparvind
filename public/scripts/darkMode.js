document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('#dark-mode-toggle');

  // Apply initial icon
  const setIcon = (isDark) => {
    buttons.forEach(btn => btn.textContent = isDark ? '🌙' : '☀️');
  };

  // Initial check
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    root.classList.add('dark');
    setIcon(true);
  } else if (saved === 'light') {
    root.classList.remove('dark');
    setIcon(false);
  } else {
    // default: system
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
    setIcon(prefersDark);
  }

  // Toggle on click
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      setIcon(isDark);
    });
  });
});
