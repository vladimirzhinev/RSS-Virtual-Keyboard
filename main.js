/* eslint-disable consistent-return */
import bildKeyboard from './modules/bild.js';
import { unactive, active } from './modules/variables.js';

let lng = 'rus';
let capslock = false;

document.onload = bildKeyboard();

const keyBoard = document.querySelector('.keyBoard');

const changeCase = () => {
   keyBoard.querySelectorAll(`div > .${lng} `).forEach((it) => {
      it.querySelectorAll('span')[0].classList.toggle('hidden');
      it.querySelectorAll('span')[1].classList.toggle('hidden');
   });
};

const changeLng = () => {
   const prevLang = keyBoard.querySelectorAll(`div > .${lng} `);
   prevLang.forEach((it) => {
      it.classList.toggle('hidden');
      it.querySelectorAll('span')[0].classList.toggle('hidden');
   });

   if (lng === 'rus') {
      lng = 'eng';
      localStorage.setItem('lng', lng);
   } else {
      lng = 'rus';
      localStorage.setItem('lng', lng);
   }

   const nextLang = keyBoard.querySelectorAll(`div > .${lng} `);
   nextLang.forEach((it) => {
      it.classList.toggle('hidden');
      it.querySelectorAll('span')[0].classList.toggle('hidden');
   });
};

window.addEventListener('keydown', (e) => {
   const textArea = document.querySelector('#textArea');
   const item = keyBoard.getElementsByClassName(e.code)[0];
   if (e.altKey && e.ctrlKey) {
      active(item);
      changeLng();
      return false;
   }

   let pos = textArea.selectionStart;
   let posEnd = textArea.selectionEnd;

   switch (e.code) {
      case 'MetaLeft':
         active(item);
         break;

      case 'Tab':
         e.preventDefault();
         active(item);
         textArea.value += '\t';
         break;

      case 'Enter':
         active(item);
         break;

      case 'CapsLock':
         // eslint-disable-next-line no-unused-expressions
         (capslock) ? (unactive(item), capslock = false) : (active(item), capslock = true);
         changeCase();
         break;

      case 'Backspace':
         e.preventDefault();
         if (pos < 1) break;
         textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
         pos += 1;
         posEnd -= 1;
         textArea.selectionStart = pos;
         textArea.selectionEnd = posEnd;
         active(item);
         break;

      case 'Delete':
         e.preventDefault();
         textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1);
         textArea.selectionStart = pos;
         textArea.selectionEnd = posEnd;
         active(item);
         break;
      case 'AltLeft':
      case 'AltRight':
         e.preventDefault();
         active(item);
         break;
      case 'ControlLeft':
      case 'ControlRight':

         active(item);
         break;
      case 'ShiftLeft':
      case 'ShiftRight':
         active(item);
         changeCase();
         break;

      default:
         e.preventDefault();
         textArea.value = textArea.value.slice(0, pos) + item.querySelectorAll(':not(.hidden)')[1].textContent + textArea.value.slice(pos);
         pos += 1;
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         active(item);
         break;
   }
});

keyBoard.addEventListener('mousedown', (e) => {
   const textArea = document.querySelector('#textArea');
   const key = e.target.closest('.key');

   if (!key) return;
   const item = key;
   let pos = textArea.selectionStart;

   e.preventDefault();

   switch (item.classList[1]) {
      case 'Tab':
         textArea.value += '\t';
         active(item);
         break;

      case 'Enter':
         textArea.value = `${textArea.value.slice(0, pos)}\n${textArea.value.slice(pos)}`;
         pos += 1;
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         active(item);
         break;

      case 'Delete':
         active(item);
         textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1);
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         break;

      case 'Backspace':
         active(item);
         if (pos < 1) break;
         textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
         pos -= 1;

         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         break;

      case 'CapsLock':
         active(item);
         if (capslock) {
            unactive(item);
            capslock = false;
         } else {
            active(item);
            capslock = true;
         }
         changeCase();
         break;
      case 'ShiftLeft':
      case 'ShiftRight':

         active(item);
         changeCase();

         break;

      case 'ControlLeft':
      case 'ControlRight':

         active(item);
         break;

      case 'AltLeft':
      case 'AltRight':

         active(item);
         break;

      case 'MetaLeft':
         active(item);
         break;
      default:

         textArea.value = textArea.value.slice(0, pos) + item.querySelectorAll(':not(.hidden)')[1].textContent + textArea.value.slice(pos);
         pos += 1;
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         active(item);
         break;
   }
});

document.addEventListener('mouseup', (e) => {
   const key = e.target.closest('.key');

   if (!key) return;
   if (key) {
      const item = key;

      switch (item.classList[1]) {
         case 'ShiftLeft':
         case 'ShiftRight':
            e.preventDefault();
            unactive(item);
            changeCase();
            break;
         case 'CapsLock':
            if (capslock !== true) {
               unactive(e.target.closest('.key'));
            } else {
               active(e.target.closest('.key'));
            }
            break;

         case 'ControlLeft':
         case 'ControlRight':
            unactive(item);
            break;
         default:
            unactive(item);
            break;
      }
   }
});

document.addEventListener('keyup', (e) => {
   if (e.key !== 'CapsLock') {
      if (e.key === 'Shift') { changeCase(); }
      const item = keyBoard.getElementsByClassName(e.code)[0];
      unactive(item);
   }
});
