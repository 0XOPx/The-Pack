/* This was extracted from The CSS Pack by OXOP */
/* https://github.com/0XOPx/The-Pack/css */

export const textUtils = {
  italic: (el) => el.style.fontStyle = 'italic',
  bold: (el) => el.style.fontWeight = 'bold',
  underline: (el) => el.style.textDecoration = 'underline',
  lineThrough: (el) => el.style.textDecoration = 'line-through',
  alignLeft: (el) => el.style.textAlign = 'left',
  alignCenter: (el) => el.style.textAlign = 'center',
  alignRight: (el) => el.style.textAlign = 'right',
  uppercase: (el) => el.style.textTransform = 'uppercase',
  lowercase: (el) => el.style.textTransform = 'lowercase',
  capitalize: (el) => el.style.textTransform = 'capitalize',
  truncate: (el) => {
    el.style.overflow = 'hidden';
    el.style.textOverflow = 'ellipsis';
    el.style.whiteSpace = 'nowrap';
  },
  breakWords: (el) => {
    el.style.overflowWrap = 'break-word';
    el.style.wordBreak = 'break-word';
  }
};