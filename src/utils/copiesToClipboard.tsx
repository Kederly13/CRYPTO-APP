export const copiesToClipboard = (link: string): void => {
  setTimeout(() => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('Скопировано');
      })
      .catch(() => {
        console.log('Ошибка');
      });
  }, 0);
};