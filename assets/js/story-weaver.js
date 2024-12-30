class StoryWeaver {
  constructor() {
      this.container = document.getElementById('storyContainer');
      this.currentNode = 'start';  // 'start' is already snake_case
      this.history = [];
      this.isTransitioning = false;
      
      // Debug available nodes on construction
      console.log('Available story nodes:', Object.keys(window.storyNodes || {}));
      
      this.init();
  }

  // Convert camelCase to snake_case
  normalizeId(id) {
      return id.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  createBackgroundEffects() {
      // Create floating background blobs
      const blob1 = document.createElement('div');
      blob1.className = 'organic-blob';
      this.container.parentElement.prepend(blob1);
      
      const blob2 = document.createElement('div');
      blob2.className = 'organic-blob';
      this.container.parentElement.prepend(blob2);
  }

  init() {
      if (!window.storyNodes) {
          console.error('Story nodes not found. Make sure story-weaver.js loads after the nodes are defined.');
          return;
      }
      
      // Debug output
      console.log('StoryWeaver initializing with nodes:', window.storyNodes);
      
      // Create background effects
      this.createBackgroundEffects();
      
      // Render initial node
      this.renderNode(this.currentNode);
  }

  renderNode(nodeId) {
      // Normalize the node ID
      const normalizedId = this.normalizeId(nodeId);
      const node = window.storyNodes[normalizedId];
      if (!node) {
          console.error(`Story node "${normalizedId}" (from "${nodeId}") not found in:`, window.storyNodes);
          return;
      }

      // Apply theme if present
      if (node.theme) {
          this.container.dataset.theme = node.theme;
      }

      // Clear current content with fade out
      this.fadeOutContent().then(() => {
          this.container.innerHTML = '';

          // Create and add text element
          const textEl = this.createTextElement(node.text);
          this.container.appendChild(textEl);

          // Create and add choices container
          const choicesEl = this.createChoicesElement(node.choices);
          this.container.appendChild(choicesEl);

          // Add history button if we have history
          if (this.history.length > 0) {
              const historyButton = this.createHistoryButton();
              this.container.appendChild(historyButton);
          }

          // Trigger entrance animations
          requestAnimationFrame(() => {
              textEl.classList.add('visible');
              choicesEl.classList.add('visible');
          });
      });
  }
  
  createTextElement(text) {
      const textEl = document.createElement('div');
      textEl.className = 'story-text';
      textEl.textContent = text;
      return textEl;
  }
  
  createChoicesElement(choices) {
      const choicesEl = document.createElement('div');
      choicesEl.className = 'story-choices';
      
      choices.forEach((choice, index) => {
          const button = document.createElement('button');
          button.className = 'choice-button';
          button.innerHTML = `<span>${choice.text}</span>`;
          
          // Add delay to each button's appearance
          button.style.transitionDelay = `${index * 100}ms`;
          
          button.addEventListener('click', () => {
              if (!this.isTransitioning) {
                  this.makeChoice(choice.next);
              }
          });
          
          choicesEl.appendChild(button);
      });
  
      return choicesEl;
  }
  
  createHistoryButton() {
      const historyButton = document.createElement('button');
      historyButton.className = 'history-button';
      historyButton.textContent = '← Return to previous moment';
      historyButton.addEventListener('click', () => {
          if (!this.isTransitioning) {
              this.goBack();
          }
      });
      return historyButton;
  }
  
  fadeOutContent() {
      return new Promise(resolve => {
          const text = this.container.querySelector('.story-text');
          const choices = this.container.querySelector('.story-choices');
          
          if (!text && !choices) {
              resolve();
              return;
          }
  
          this.isTransitioning = true;
          
          if (text) text.classList.remove('visible');
          if (choices) choices.classList.remove('visible');
  
          setTimeout(() => {
              this.isTransitioning = false;
              resolve();
          }, 1000); // Match the CSS transition duration
      });
  }
  
  async makeChoice(nextNode) {
      const normalizedNext = this.normalizeId(nextNode);
      this.history.push(this.currentNode);
      this.currentNode = normalizedNext;
      
      // Wait for content to fade out before rendering new node
      await this.fadeOutContent();
      this.renderNode(normalizedNext);
  }
  
  async goBack() {
      if (this.history.length > 0) {
          const previousNode = this.history.pop();
          this.currentNode = previousNode;
          await this.fadeOutContent();
          this.renderNode(previousNode);
      }
  }
  
  handleKeyPress(event) {
      if (this.isTransitioning) return;
  
      const choices = document.querySelectorAll('.choice-button');
      if (!choices.length) return;
  
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
          this.navigateChoices(event.key === 'ArrowUp' ? -1 : 1, choices);
      } else if (event.key === 'Enter') {
          event.preventDefault();
          const focusedChoice = document.activeElement;
          if (focusedChoice.classList.contains('choice-button')) {
              focusedChoice.click();
          }
      }
  }
  
  navigateChoices(direction, choices) {
      const currentIndex = Array.from(choices).findIndex(choice => choice === document.activeElement);
      let nextIndex;
  
      if (currentIndex === -1) {
          nextIndex = direction > 0 ? 0 : choices.length - 1;
      } else {
          nextIndex = (currentIndex + direction + choices.length) % choices.length;
      }
  
      choices[nextIndex].focus();
  }
}

// Wait for both DOM and story nodes to be ready
function initializeStoryWeaver() {
  if (document.readyState === 'complete' && window.storyNodes) {
      const storyWeaver = new StoryWeaver();
      // Add keyboard navigation
      document.addEventListener('keydown', (e) => storyWeaver.handleKeyPress(e));
  } else {
      setTimeout(initializeStoryWeaver, 100);
  }
}

// Start initialization process
initializeStoryWeaver();