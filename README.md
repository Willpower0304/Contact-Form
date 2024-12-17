![image](https://github.com/user-attachments/assets/1934623a-8982-4304-a3ad-3bcad04aa080)


# Formulario de Contacto con Web3Forms

Este proyecto es un formulario de contacto simple y funcional construido con la API de Web3Forms, diseñado para recopilar información del usuario como nombre, correo electrónico y mensaje. El formulario es fácil de integrar y no requiere configuración de backend, ya que Web3Forms maneja el proceso de envío.

## Características

- **Configuración mínima**: No se requiere programación de backend.
- **Envíos seguros**: Web3Forms garantiza que los datos se transmitan de forma segura.
- **Personalizable**: Fácil de adaptar a tus necesidades.
- **Diseño responsivo**: Adecuado para todos los dispositivos.

## Estructura del Formulario

El formulario incluye los siguientes campos:

- **Nombre**: Campo de texto para el nombre del usuario.
- **Correo Electrónico**: Campo de correo electrónico para recopilar la dirección del usuario.
- **Mensaje**: Un área de texto para el mensaje o consulta del usuario.

## Requisitos Previos

- Una clave API de Web3Forms. Puedes obtenerla registrándote en [Web3Forms](https://web3forms.com/).


## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuUsuario/Contact-Form.git
   ```

## Requisitos Previos

1. Tener una cuenta en [Netlify](https://netlify.com).
2. La clave de Web3Forms (`ACCESS_KEY`) proporcionada por [Web3Forms](https://web3forms.com/).
3. Un proyecto alojado en Netlify.

## Configuración de la Variable de Entorno en Netlify

1. Ve al **panel de control de Netlify**.
2. Selecciona tu sitio y dirígete a **Site settings > Environment Variables**.
3. Agrega la clave:
   - **Key**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Tu clave de Web3Forms (ejemplo: `abc123xyz456`).
4. Guarda los cambios.

## Estructura del Proyecto

La función Lambda debe colocarse en el directorio `netlify/functions` dentro del proyecto.

### Estructura de Archivos:
```plaintext
project-root/
│
├── netlify/
│   └── functions/
│       └── getAccessKey.js
│
├── index.html
└── README.md
```

## Código de la Función Lambda

Crea el archivo `getAccessKey.js` dentro de `netlify/functions` y agrega el siguiente código:

```javascript
exports.handler = async () => {
    return {
        statusCode: 200,
        body: process.env.WEB3FORMS_ACCESS_KEY,
    };
};
```

### Explicación del Código:
- `process.env.WEB3FORMS_ACCESS_KEY`: Recupera la clave desde las variables de entorno configuradas en Netlify.
- `statusCode: 200`: Devuelve una respuesta exitosa.
- `body`: Contiene la clave recuperada.

### Explicación del Script:
1. **fetch**: Llama a la función Lambda en `/getAccessKey`.
2. **response.text()**: Recupera la clave como texto.
3. La clave se asigna dinámicamente al campo oculto `access_key` del formulario.

## Despliegue en Netlify

1. Asegúrate de subir la estructura de archivos al repositorio.
2. Netlify detectará automáticamente la función Lambda en el directorio `netlify/functions`.
3. Despliega el proyecto en Netlify.
4. Prueba el formulario para asegurarte de que funciona correctamente.

### Nota:
no es necesario usar Netlify para alojar tu pagina web, pero las intrucciones serian diferentes.

## Pruebas

1. Abre la consola del navegador (**F12 > Network**) y verifica que la solicitud `/.netlify/functions/getAccessKey` devuelve la clave correcta.
2. Envía el formulario con datos de prueba y confirma que los envíos se completan exitosamente en Web3Forms.

## Prewiev
![image](https://github.com/user-attachments/assets/40d18198-370f-4918-be1d-57222e539cb5)

## Contribuciones

Siéntete libre de bifurcar este repositorio y enviar solicitudes de mejora o nuevas funcionalidades.



