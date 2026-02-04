describe('Popover', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <button id="popover-trigger">Click me</button>
        <div id="popover" class="popover" style="display: none;">Content</div>
      `;
    });
  
    test('should toggle visibility on click', () => {
      const trigger = document.getElementById('popover-trigger');
      const popover = document.getElementById('popover');
  
      trigger.addEventListener('click', () => {
        popover.style.display = popover.style.display === 'none' ? 'block' : 'none';
      });
  
      trigger.click();
      expect(popover.style.display).toBe('block');
  
      trigger.click();
      expect(popover.style.display).toBe('none');
    });
  });