/* Made by jw-notes — https://github.com/jw-notes */
'use strict';
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  projects.forEach(project => {
    const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('project-count').textContent = `${count} project${count === 1 ? '' : 's'}`;
}));
document.getElementById('year').textContent = String(new Date().getFullYear());
