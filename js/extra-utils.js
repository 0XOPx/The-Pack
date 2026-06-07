/* This was extracted from The CSS Pack by OXOP */
/* https://github.com/0XOPx/The-Pack/css */

export const extraUtils = {
  redirect: (url) => {
    window.location.href = url;
  },
  
  reload: () => {
    window.location.reload();
  },
  
  getQueryParam: (param) => {
    return new URLSearchParams(window.location.search).get(param);
  },

  setLocal: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  
  getLocal: (key) => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch {
      return item;
    }
  },

  createEl: (tag, attributes = {}, text = '') => {
    const el = document.createElement(tag);
    Object.keys(attributes).forEach(key => el.setAttribute(key, attributes[key]));
    if (text) el.textContent = text;
    return el;
  },

  toggleTheme: (darkClass = 'dark') => {
    document.documentElement.classList.toggle(darkClass);
  },

  delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  
  debounce: (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  },

  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
};
