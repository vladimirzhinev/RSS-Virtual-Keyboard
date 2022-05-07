const buts = [
   [['Backquote', 'ё', 'Ё', '`', '~'],
   ['Digit1', '1', '!', '1', '!'],
   ['Digit2', '2', '\'', '2', '@'],
   ['Digit3', '3', '№', '3', '#'],
   ['Digit4', '4', ';', '4', '$'],
   ['Digit5', '5', '%', '5', '%'],
   ['Digit6', '6', ':', '6', '^'],
   ['Digit7', '7', '?', '7', '&'],
   ['Digit8', '8', '*', '8', '*'],
   ['Digit9', '9', '(', '9', '('],
   ['Digit0', '0', ')', '0', ')'],
   ['Minus', '-', '_', '-', '_'],
   ['Equal', '=', '+', '=', '+'],
   ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
   ],
   [
      ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['KeyQ', 'й', 'Й', 'q', 'Q'],
      ['KeyW', 'ц', 'Ц', 'w', 'W'],
      ['KeyE', 'у', 'У', 'e', 'E'],
      ['KeyR', 'к', 'К', 'r', 'R'],
      ['KeyT', 'е', 'Е', 't', 'T'],
      ['KeyY', 'н', 'Н', 'y', 'Y'],
      ['KeyU', 'г', 'Г', 'u', 'U'],
      ['KeyI', 'ш', 'Ш', 'i', 'I'],
      ['KeyO', 'щ', 'Щ', 'o', 'O'],
      ['KeyP', 'з', 'З', 'p', 'P'],
      ['BracketLeft', 'х', 'Х', '[', '{'],
      ['BracketRight', 'ъ', 'Ъ', ']', '}'],
      ['Backslash', '\\', '/', '\\', '|'],
      ['Delete', 'Del', 'Del', 'Del', 'Del'],
   ],
   [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['KeyA', 'ф', 'Ф', 'a', 'A'],
      ['KeyS', 'ы', 'Ы', 's', 'S'],
      ['KeyD', 'в', 'В', 'd', 'D'],
      ['KeyF', 'а', 'А', 'f', 'F'],
      ['KeyG', 'п', 'П', 'g', 'G'],
      ['KeyH', 'р', 'Р', 'h', 'H'],
      ['KeyJ', 'о', 'О', 'j', 'J'],
      ['KeyK', 'л', 'Л', 'k', 'K'],
      ['KeyL', 'д', 'Д', 'l', 'L'],
      ['Semicolon', 'ж', 'Ж', ';', ':'],
      ['Quote', 'э', 'Э', '\'', '\''],
      ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
   ],
   [
      ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
      ['KeyZ', 'я', 'Я', 'z', 'Z'],
      ['KeyX', 'ч', 'Ч', 'x', 'X'],
      ['KeyC', 'с', 'С', 'c', 'C'],
      ['KeyV', 'м', 'М', 'v', 'V'],
      ['KeyB', 'и', 'И', 'b', 'B'],
      ['KeyN', 'т', 'Т', 'n', 'N'],
      ['KeyM', 'ь', 'Ь', 'm', 'M'],
      ['Comma', 'б', 'Б', '.', '<'],
      ['Period', 'ю', 'Ю', ',', '>'],
      ['Slash', '.', ',', '/', '?'],
      ['ArrowUp', '▲', '▲', '▲', '▲'],
      ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
   ],
   [
      ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
      ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['Space', ' ', ' ', ' ', ' '],
      ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['ArrowLeft', '◄', '◄', '◄', '◄'],
      ['ArrowDown', '▼', '▼', '▼', '▼'],
      ['ArrowRight', '►', '►', '►', '►'],
      ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
   ],
];


let lng = 'rus';
let capslock = false;
const textArea = document.createElement('textarea');












const bildKeyboard = () => {
   const wrapper = document.createElement('div');
   wrapper.className = 'wrapper';
   textArea.id = 'textArea';
   const keyBoard = document.createElement('div');
   keyBoard.className = 'keyBoard';
   const discription1 = document.createElement('div');
   const discription2 = document.createElement('div');
   discription1.className = 'discription';
   discription1.textContent = `Клавиатура создана в операционной системе Windows`
   discription2.className = 'discription';
   discription2.textContent = `Для переключения языка ввода: ctrl + alt`


   wrapper.append(textArea);
   wrapper.append(keyBoard);
   wrapper.append(discription1);
   wrapper.append(discription2);

   for (let i = 0; i < buts.length; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let k = 0; k < buts[i].length; k++) {
         const key = document.createElement('div');
         key.classList.add('key');
         key.classList.add(buts[i][k][0]);

         key.insertAdjacentHTML('afterBegin',
            `<div div class='rus' >
              <span class='caseDown'>${buts[i][k][1]}</span>
              <span class='caseUp hidden'>${buts[i][k][2]}</span>
            </div >
   <div class='eng hidden'>
      <span class='caseDown hidden'>${buts[i][k][3]}</span>
      <span class='caseUp hidden'>${buts[i][k][4]}</span>
   </div>`);

         row.appendChild(key);
      }
      keyBoard.appendChild(row);
   }
   document.body.append(wrapper);
}

document.onload = bildKeyboard(), textArea.focus();



const unactive = (item) => {
   item.classList.remove('active');
}


const active = (item) => {
   item.classList.add('active');
}




const changeCase = () => {
   keyBoard.querySelectorAll(`div > .${lng} `).forEach(it => {
      it.querySelectorAll('span')[0].classList.toggle('hidden');
      it.querySelectorAll('span')[1].classList.toggle('hidden');
   })
};



const keyBoard = document.querySelector('.keyBoard')

const changeLng = () => {

   const prevLang = keyBoard.querySelectorAll(`div > .${lng} `);

   prevLang.forEach(it => {
      it.classList.toggle('hidden');
      it.querySelectorAll('span')[0].classList.toggle('hidden');
   })

   if (lng === 'rus') {
      lng = 'eng';
      localStorage.setItem('lng', lng);
   } else {
      lng = 'rus';
      localStorage.setItem('lng', lng);
   }

   const nextLang = keyBoard.querySelectorAll(`div > .${lng} `);
   nextLang.forEach(it => {
      it.classList.toggle('hidden');
      it.querySelectorAll('span')[0].classList.toggle('hidden');
   })

};

if (localStorage.lng === 'eng') {
   changeLng();
}






window.addEventListener('keydown', (e) => {

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
         textArea.value += '  ';
         break;

      case 'Enter':
         active(item);
         break;

      case 'CapsLock':

         (capslock) ? (unactive(item), capslock = false) : (active(item), capslock = true)
         changeCase();
         break;


      case 'Backspace':
         e.preventDefault();
         if (pos < 1) break
         textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
         pos--;
         posEnd--;
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
         pos++;
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         active(item);
         break;
   }
});




keyBoard.addEventListener('mousedown', (e) => {

   let key = e.target.closest('.key')

   if (!key) return;
   const item = key
   let pos = textArea.selectionStart;
   let posEnd = textArea.selectionEnd;
   e.preventDefault();

   switch (item.classList[1]) {

      case 'Tab':
         textArea.value += '  ';
         active(item);
         break;

      case 'Enter':
         textArea.value = textArea.value.slice(0, pos) + '\n' + textArea.value.slice(pos);
         pos++;
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
         if (pos < 1) break
         textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
         pos--;
         posEnd--;
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

      default:

         textArea.value = textArea.value.slice(0, pos) + item.querySelectorAll(':not(.hidden)')[1].textContent + textArea.value.slice(pos);
         pos++;
         textArea.selectionStart = pos;
         textArea.selectionEnd = pos;
         active(item);
         break;

      case 'AltLeft':
      case 'AltRight':

         active(item);
         break;


      case 'MetaLeft':
         active(item);
         break;
   }

});




document.addEventListener('mouseup', (e) => {

   let key = e.target.closest('.key')

   if (!key) return
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
      if (e.key === 'Shift') {
         changeCase();
      }

      const item = keyBoard.getElementsByClassName(e.code)[0];


      unactive(item);


   }




});
