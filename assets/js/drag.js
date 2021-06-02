// const listItems = Array.from(document.querySelectorAll('.list-item'));
// const dropZones = Array.from(document.querySelectorAll('.drop-zone'));

// listItems.forEach((listItem) => {
//   listItem.addEventListener('dragstart', (e) => {
//     e.dataTransfer.setData('text', e.target.id);
//   });

//   listItem.addEventListener('dragend', () => {
//     console.log('drag is over');
//   });
// });

// dropZones.forEach(dropZone => {
//   // dropZone.addEventListener('dragover', () => {
//   //   console.log('they dragged over me')
//   // });

//   dropZone.addEventListener('dragenter', (e) => {
//     dropZone.style.backgroundColor = 'green';
//     e.preventDefault();
//   });

//   dropZone.addEventListener('dragover', (e) => {
//     e.preventDefault();
//   });

//   dropZone.addEventListener('dragleave', (e) => {
//     e.preventDefault();
//     dropZone.style.backgroundColor = 'initial';
//   });

//   dropZone.addEventListener('drop', (e) => {
//     dropZone.append(document.getElementById(e.dataTransfer.getData('text')));
//     dropZone.style.backgroundColor = 'initial';
//     e.preventDefault();
//   })
// })


const colorBoxes = Array.from(document.querySelectorAll('.color-box'));

function colorMaker(element) {
  const redTone = element.getAttribute('data-red');
  const greenTone = element.getAttribute('data-green');
  const blueTone = element.getAttribute('data-blue');
  const finalRGB = `rgb(${redTone}, ${greenTone}, ${blueTone})`;
  element.style.backgroundColor = finalRGB;
  return finalRGB;
}

colorBoxes.forEach((colorBox) => {
  const color = colorMaker(colorBox);

  colorBox.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', color);
  });
});

const colorCircle = document.querySelector('.color-circle');
colorMaker(colorCircle);

