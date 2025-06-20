document.querySelectorAll('.radio-item').forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('input').checked = true;
  });
});