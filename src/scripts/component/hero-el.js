class HeroEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('hero');
    this.setAttribute('id', 'hero');
    this.innerHTML = `
    <div class="hero__content">
    <h1>Your diet is a bank account<br> Good food choices are good investments.</h1>
    <p>Let food be thy medicine and medicine be thy food.</p>
</div>
      `;
  }
}

customElements.define('hero-el', HeroEl);
