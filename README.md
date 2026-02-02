# Valentine Edition - Propuesta de San Valentín

Una propuesta de San Valentín interactiva construida con Astro y Tailwind CSS.

## Estructura del Proyecto

```
valentine-emily/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal con meta tags
│   ├── components/
│   │   ├── Page1Card.astro       # Primera página - La Carta
│   │   ├── Page2Photo.astro      # Segunda página - El Sobre con Foto
│   │   ├── Page3Question.astro   # Tercera página - La Gran Pregunta
│   │   └── Decorations.astro     # Decoraciones animadas
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── styles/
│       └── global.css            # Estilos globales y animaciones
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.mjs           # Configuración de Tailwind
├── package.json                  # Dependencias
└── README.md                     # Este archivo
```

## Instalación

```bash
# Navegar al directorio
cd valentine-emily

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## Personalización

Edita el archivo `src/pages/index.astro` para personalizar:

```javascript
const config = {
  // Página 1 - La Carta
  date: "14 DE FEBRERO DEL 2025",
  cardBodyText: "Tu texto personalizado aquí...",

  // Página 2 - La Foto
  photoUrl: "URL de tu foto",

  // Página 3 - La Pregunta
  recipientName: "Nombre",
  senderName: "Tu nombre",
  poeticText: "Tu texto poético..."
};
```

## Características

### Página 1: La Carta
- Estilo editorial vintage
- Animaciones de entrada suaves
- Decoraciones de cupidos flotantes

### Página 2: El Sobre
- Sobre interactivo que se abre al hover
- Foto personalizable
- Corazón pulsante para navegar

### Página 3: La Gran Pregunta
- Botón "Sí" con explosión de confetti
- Botón "No" que escapa del cursor
- Mensajes divertidos al intentar presionar "No"
- Pantalla de celebración

## Navegación

- **Scroll**: Navega entre páginas
- **Flechas arriba/abajo**: Cambia de página
- **Espacio**: Siguiente página
- **Teclas 1, 2, 3**: Ir a página específica
- **Swipe**: Soporte táctil en móviles

## Tecnologías

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Rosa Primario | #FFB6D9 | Fondos principales |
| Rosa Oscuro | #FF69B4 | Acentos |
| Rojo | #DC143C | Títulos, botones |
| Dorado | #FFD700 | Decoraciones |
| Fondo Claro | #FFF5F7 | Background |

## Licencia

Hecho con amor para Emily.
