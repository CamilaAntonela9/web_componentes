// components/espe-modal.js
export class EspeModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("#close-btn")
      .addEventListener("click", () => this.close());
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .modal {
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 90%;
          max-width: 500px;
          padding: 1.5em;
          position: relative;
          animation: fadeIn 0.3s ease-in-out;
        }

        header {
          background-color: rgb(29, 78, 37); /* Verde ESPE */
          color: white;
          padding: 1em;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-size: 1.5em;
          text-align: center;
        }

        .content {
          padding: 1em;
          color: #333;
        }

        #close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.2em;
          cursor: pointer;
          color: #555;
        }

        #close-btn:hover {
          color: #000;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      </style>
      <div class="modal">
        <button id="close-btn" aria-label="Cerrar modal">&times;</button>
        <header>
          <slot name="title">Título del Modal</slot>
        </header>
        <div class="content">
          <slot name="content">Contenido del modal</slot>
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  close() {
    this.dispatchEvent(new CustomEvent("modal-cerrado", {
      bubbles: true,
      composed: true
    }));
    this.remove();
  }
}

customElements.define("espe-modal", EspeModal);
