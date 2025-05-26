class FormularioAccion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
      <style>
        form {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          font-weight: bold;
        }
        input, textarea {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          margin: 0.5rem 0;
          padding: 0.5rem;
          background-color:darkgreen;     
          border: 1px solid green;
          border-radius: 5px;

       }nnnmnmm
      </style>
      <form id="formulario">
        <label for="nombre">Nombre del Producto:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="precio">Precio:</label>
        <input type="text" id="precio" name="precio" required>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" rows="3" required></textarea>

        <slot name="boton-enviar">
           <button type="button">Enviar</button>
         </slot>     
         
         </form>
    `;
        return template;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));

        const form = this.shadowRoot.querySelector('#formulario');
        const boton = this.querySelector('[slot="boton-enviar"]');

        if (boton) {
            boton.addEventListener('click', (e) => {
                e.preventDefault();

                const nombre = form.querySelector('#nombre').value;
                const precio = form.querySelector('#precio').value;
                const descripcion = form.querySelector('#descripcion').value;

                const producto = document.querySelector('#producto');

                if (producto) {
                    producto.querySelector('[slot="titulo"]').textContent = nombre;
                    producto.querySelector('[slot="descripcion"]').textContent = `${descripcion} (Precio: $${precio})`;
                }
            });
        }
    }
}

customElements.define('formulario-accion', FormularioAccion);
