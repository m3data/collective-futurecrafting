class StoryWeaver {
    constructor() {
      this.container = document.getElementById('storyContainer');
      this.currentNode = 'start';
      this.history = [];
      this.isTransitioning = false;
      this.init();
    }
  
    init() {
      // Create background blobs for ambient effect
      this.createBackgroundEffects();
      // Render initial node
      this.renderNode(this.currentNode);
    }
  
    createBackgroundEffects() {
      // Create floating background blobs
      const blob1 = document.createElement('div');
      blob1.className = 'organic-blob';
      document.querySelector('.story-weaver').prepend(blob1);
      
      const blob2 = document.createElement('div');
      blob2.className = 'organic-blob';
      document.querySelector('.story-weaver').prepend(blob2);
    }
  
    renderNode(nodeId) {
      const node = storyNodes[nodeId];
      if (!node) {
        console.error(`Story node "${nodeId}" not found`);
        return;
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
      this.history.push(this.currentNode);
      this.currentNode = nextNode;
      
      // Wait for content to fade out before rendering new node
      await this.fadeOutContent();
      this.renderNode(nextNode);
    }
  
    async goBack() {
      if (this.history.length > 0) {
        const previousNode = this.history.pop();
        this.currentNode = previousNode;
        await this.fadeOutContent();
        this.renderNode(previousNode);
      }
    }
  
    // Method to handle keyboard navigation
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
  
  // Initialize when document is ready
  document.addEventListener('DOMContentLoaded', () => {
    const storyWeaver = new StoryWeaver();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => storyWeaver.handleKeyPress(e));
  });