const cursor = document.querySelector('.cursor-pointer');
const hoverTargets = document.querySelectorAll('a, button, [role="button"]');

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursor.classList.add('is-hovering');
  });
  
  target.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-hovering');
  });
});