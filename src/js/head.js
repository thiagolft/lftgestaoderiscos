/**
 * Theme Initialization
 * Verifica a preferência de tema salva no localStorage ou a preferência do sistema
 * e aplica a classe "dark" ao documento para evitar o FOUC.
 */
if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  