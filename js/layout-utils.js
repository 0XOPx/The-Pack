/* This was extracted from The CSS Pack by OXOP */
/* https://github.com/0XOPx/The-Pack/css */

export const layoutUtils = {
  block: (el) => el.style.display = 'block',
  inlineBlock: (el) => el.style.display = 'inline-block',
  inline: (el) => el.style.display = 'inline',
  hidden: (el) => el.style.display = 'none',
  flex: (el) => el.style.display = 'flex',
  flexCol: (el) => el.style.flexDirection = 'column',
  centerAll: (el) => {
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
    el.style.alignItems = 'center';
  },
  spaceBetween: (el) => {
    el.style.display = 'flex';
    el.style.justifyContent = 'space-between';
    el.style.alignItems = 'center';
  }
};