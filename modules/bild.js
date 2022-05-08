import buts from './source_array.js';

const bildKeyboard = () => {
   const wrapper = document.createElement('div');
   wrapper.className = 'wrapper';
   const textArea = document.createElement('textarea');
   textArea.id = 'textArea';
   const keyBoard = document.createElement('div');
   keyBoard.className = 'keyBoard';
   const discription1 = document.createElement('div');
   const discription2 = document.createElement('div');
   discription1.className = 'discription';
   discription1.textContent = 'Клавиатура создана в операционной системе Windows';
   discription2.className = 'discription';
   discription2.textContent = 'Для переключения языка ввода: ctrl + alt';

   wrapper.append(textArea);
   wrapper.append(keyBoard);
   wrapper.append(discription1);
   wrapper.append(discription2);

   for (let i = 0; i < buts.length; i += 1) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let k = 0; k < buts[i].length; k += 1) {
         const key = document.createElement('div');
         key.classList.add('key');
         key.classList.add(buts[i][k][0]);

         key.insertAdjacentHTML(
            'afterBegin',
            `<div div class='rus' >
              <span class='caseDown'>${buts[i][k][1]}</span>
              <span class='caseUp hidden'>${buts[i][k][2]}</span>
            </div >
   <div class='eng hidden'>
      <span class='caseDown hidden'>${buts[i][k][3]}</span>
      <span class='caseUp hidden'>${buts[i][k][4]}</span>
   </div>`,
         );

         row.appendChild(key);
      }
      keyBoard.appendChild(row);
   }
   document.body.append(wrapper);
   textArea.focus();
};

export default bildKeyboard;
