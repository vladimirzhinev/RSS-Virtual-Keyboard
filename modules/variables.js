export const unactive = (item) => {
   if (item.classList.contains('active')) {
      item.classList.remove('active');
   }
};

export const active = (item) => {
   item.classList.add('active');
};
