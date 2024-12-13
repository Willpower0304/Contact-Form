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

2. crea un archivo `config.js` para tener tu clave de `web3forms.com` protegida de forma local. y crea las siguientes lineas de codigo:
    ```
    const ACCESS_KEY = "access_key";
    export default ACCESS_KEY;
    ```

remplaza el `access_key` con tu API_KEY que te dio `web3forms.com` al registrate.

3. si tienes planeado subir esto a un servidor o un repositorio de `github` Asegúrate de que `config.js` esté en en un archivo `.gitignore` para que no se suba al repositorio
    ```
    config.js
    ```

### Puntos Clave

- Reemplaza `ACCESS_KEY` con tu clave API de Web3Forms.
- Asegúrate de que todos los campos requeridos (`name`, `email`, `message`) estén correctamente validados.


## Pruebas

Para probar el formulario:

1. Completa los campos con datos de ejemplo.
2. Haz clic en el botón "Enviar".
3. Verifica el envío revisando el correo electrónico configurado en tu cuenta de Web3Forms.

## Contribuciones

Siéntete libre de bifurcar este repositorio y enviar solicitudes de mejora o nuevas funcionalidades.



