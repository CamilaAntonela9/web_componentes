class TarjetaComida extends HTMLElement {
    static get observedAttributes() {
        return ['tema'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            :host {
                display: block;
                font-family: sans-serif;
            }

            .card {
                border-radius: 1rem;
                padding: 1rem;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: background 0.3s, color 0.3s;
            }

            .oscuro {
                background-color: #333;
                color: white;
            }

            .claro {
                background-color: #f9f9f9;
                color: #222;
            }

            h3 {
                margin-top: 0;
            }

            ::slotted(*) {
                font-size: 1rem;
            }
            ::slotted(img) {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 1rem;
            }

        </style>
        <div class="card claro">
            <h3><slot name="titulo">Sin título</slot></h3>
            <slot name="imagen"></slot>
            <p><slot name="descripcion">Sin descripción</slot></p>
        </div>
        `;
        return template;
    }

    render() {
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.actualizarTema();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'tema') {
            this.actualizarTema();
        }
    }

    actualizarTema() {
        const card = this.shadowRoot.querySelector('.card');
        if (!card) return;
        card.classList.remove('oscuro', 'claro');
        card.classList.add(this.getAttribute('tema') === 'oscuro' ? 'oscuro' : 'claro');
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('tarjeta-comida', TarjetaComida);
