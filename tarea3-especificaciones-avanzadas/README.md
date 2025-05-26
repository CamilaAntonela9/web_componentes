## 🪟 Componente: `<espe-modal>`

Componente de ventana emergente que se puede personalizar, diseñado con una estética juvenil y moderna, siguiendo los colores institucionales de la ESPE (Ecuador). Permite mostrar mensajes, formularios u otros contenidos centrados en pantalla.

---

### Estructura Interna

| Elemento         | Tipo               | Descripción                                                |
|------------------|--------------------|------------------------------------------------------------|
| `<template>`     | HTML Template      | Define la estructura HTML del modal                        |
| Shadow DOM       | Encapsulamiento    | Estilos y comportamiento aislado con `mode: "open"`        |
| `<slot>`         | Contenido dinámico | Slots con nombre y fallback (`slot="contenido"`, etc.)     |
| Botón cerrar     | HTML/JS            | Cierra el modal y dispara un evento personalizado          |

---
### Estilo General

| Elemento        | Estilo                                                               |
|-----------------|----------------------------------------------------------------------|
| Header          | Fondo verde institucional `#006341`, texto blanco, tipografía clara |
| Fondo modal     | Gris sutil `#F3F4F6`, bordes redondeados, sombra suave               |
| Botón cerrar    | Ícono "X", color gris oscuro con hover                             |
| Contenido       | Centrado, con slots dinámicos y contenido de respaldo               |

---

### Funcionalidades Técnicas

| Característica         | Detalle                                                                 |
|------------------------|-------------------------------------------------------------------------|
| Modularización         | Implementado con `export class EspeModal` (ES Modules)                  |
| Shadow DOM             | Encapsulamiento con estilos propios                                     |
| Slots con fallback     | Muestra texto alternativo si no se asigna contenido                    |
| Evento personalizado   | Dispara `modal-cerrado` al hacer clic en el botón de cerrar             |

---

### Ejemplo de Uso

```html
<!-- index.html -->
<button onclick="abrirModal()">Abrir Modal</button>

<script type="module">
  import './components/espe-modal.js';

  function abrirModal() {
    const modal = document.createElement('espe-modal');
    modal.innerHTML = `
      <span slot="titulo">Confirmación</span>
      <p slot="contenido">¿Estás segura de enviar esta tarea?</p>
    `;
    modal.addEventListener('modal-cerrado', () => {
      alert("El modal fue cerrado.");
    });
    document.body.appendChild(modal);
  }
</script>
