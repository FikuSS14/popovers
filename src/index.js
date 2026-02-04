import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('popover-trigger');
  const popover = document.getElementById('popover');

  let isVisible = false;

  trigger.addEventListener('click', () => {
    if (isVisible) {
      // Скрыть
      popover.style.display = 'none';
      isVisible = false;
    } else {
      popover.style.display = 'block';
      popover.style.visibility = 'hidden';

      const triggerRect = trigger.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();

      const left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
      const top = triggerRect.top - popoverRect.height - 10;

      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
      popover.style.visibility = 'visible';
      popover.style.display = 'block';

      isVisible = true;
    }
  });
});