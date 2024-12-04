const cursor = document.getElementById('cursor');
const shadowContainer = document.createElement('div');
shadowContainer.className = 'shadow-container';
document.body.appendChild(shadowContainer);

let shadowElements = [];

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;

  const shadow = document.createElement('div');
  shadow.className = 'shadow';
  shadow.style.top = `${y}px`;
  shadow.style.left = `${x}px`;
  shadowContainer.appendChild(shadow);
  shadowElements.push(shadow);

  setTimeout(() => {
    shadow.classList.add('show');
  }, 10);

  if (shadowElements.length > 20) {
    shadowElements.shift().remove();
  }
});