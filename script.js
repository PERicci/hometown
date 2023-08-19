var theme;


theme = 'Dark';
document.querySelectorAll('.main').forEach((selectedElement) => {
  selectedElement.style.color = '#cccccc';
  selectedElement.style.backgroundColor = '#333333';

});


document.getElementById('changeTheme').addEventListener('click', (event) => {
  if (theme == 'Dark') {
    document.querySelectorAll('.main').forEach((selectedElement2) => {
      selectedElement2.style.color = '#333333';
      selectedElement2.style.backgroundColor = '#cccccc';

    });
    theme = 'Light';
  } else if (theme == 'Light') {
    document.querySelectorAll('.main').forEach((selectedElement3) => {
      selectedElement3.style.color = '#cccccc';
      selectedElement3.style.backgroundColor = '#333333';

    });
    theme = 'Dark';
  }

});