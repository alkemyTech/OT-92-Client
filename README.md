This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Alerts
Podemos encontrar los servicios de alerta en la carpeta Assets/Alerts/alerts.js y son los siguientes:
- successAlert()
- errorAlert()
- infoAlert()
- confirmAlert()

### Uso general
1. Importamos el servicio requerido de esta manera: `import { successAlert } from '../Assets/Alerts/alerts.js'`
2. Lo implementamos en un onClick de un botón: `onClick={ () => successAlert() }`
3. Le pasamos como argumento un objeto con las props que deseemos para titulo, texto y demás campos que se detallan en la siguiente sección "Uso Particular". 
Por ejemplo: `onClick={() => successAlert({ title:"Titulo", text:"Texto de prueba", time: "2000", })}`

### Uso Particular
- successAlert(): Sirve para mostrar un mensaje de éxito que puede (o no) desaparecer automáticamente.
  - Props:
    - title: **string** que será el titulo de la alerta
    - text: **string** que será el texto debajo del título con mas información
    - time: **string** que serán los milisegundos que dura la alerta. **Importante: si no se pasa esta prop la alerta no desaparece automáticamente.**

- errorAlert(): Sirve para mostrar un mensaje de error.
  - Props:
    - title: **string** que será el titulo de la alerta
    - text: **string** que será el texto debajo del título con mas información

- infoAlert(): Sirve para mostrar un mensaje con información para el usuario.
  - Props:
    - title: **string** que será el titulo de la alerta
    - text: **string** que será el texto debajo del título con mas información
    - time: **string** que serán los milisegundos que dura la alerta. **Importante: si no se pasa esta prop la alerta no desaparece automáticamente.**

- confirmAlert(): Se trata de una alerta para confirmar una acción. Tiene dos botones uno para ejecutar definitivamente la acción y otro para cancelar. La acción debe pasarse como prop.
  - Props:
    - title: **string** que será el titulo de la alerta (Usar algo parecido a "¿Estás seguro de que deseas eliminar la Slide?")
    - warning: **string** que será el texto de advertencia debajo del título (Por ejemplo: "Esta acción es irreversible")
    - action: escribir el nombre de la funcion (previamente definida) sin parentesis. Por ejemplo: `const eliminar = () => {console.log("Eliminado"); return(<button 
                className="submit-btn" 
                type="button" 
                onClick={() => errorAlert({
                    title:"¿Estás seguro de que deseas eliminar esta Slide?",
                    warning: "Esta es una acción irreversible.",
                    confirmation: 'El Slide ha sido eliminado con éxito.',
                    action: eliminar,
                })}
            >
              Eliminar
            </button>);`
    - confirmation: **string** que será el texto mostrado si se confirma la acción.

# Component Progress
 Se encuentra en la carpeta de 'Assets/SpinnerComponent'
 Para implementarlo es tan solo con importarlo como si fuera un componente común.
 Es un componente de Bootstrap, dejo el link a la documentación

# https://getbootstrap.com/docs/5.1/components/spinners/

# Skeleton
Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
## Usage
The component is designed to be used directly in your components. For instance:
```react
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      }}
      alt={item.title}
      src={item.src}
    />
  ) : (
    <Skeleton type="text" width={210} height={118} />
  );
}
```
## Types
The component supports 4 shape variants.
 - Text
 - Title
 - Rectangular
 - Circular
## Props
It receives type, width, height.


HOW TO MAKE CRUD REQUEST FOR SLIDES ON THE api

// GET ALL SLIDES
axios.get(process.env.REACT_APP_SLIDES).then(res => console.log(res))

// CREATE NEW SLIDES
axios.post(REACT_APP_SLIDES, {
  body: "{\n  "id": 0,\n  "name": "string",\n  "description": "string",\n  "image": "string",\n  "order": 0,\n  "user_id": 0,\n  "created_at": "2021-11-11T00:47:59.880Z",\n  "updated_at": "2021-11-11T00:47:59.880Z",\n  "deleted_at": "2021-11-11T00:47:59.880Z"\n}"
}).then(res => console.log(res))

// GET AN SPECIFIC SLIDE
axios.get(process.env.REACT_APP_SLIDES/${ID}).then(res => console.log(res))

// UPDATE A SLIDE
axios.put(REACT_APP_SLIDES/{ID}, {
  body: "{\n  "id": 0,\n  "name": "string",\n  "description": "string",\n  "image": "string",\n  "order": 0,\n  "user_id": 0,\n  "created_at": "2021-11-11T00:47:59.880Z",\n  "updated_at": "2021-11-11T00:47:59.880Z",\n  "deleted_at": "2021-11-11T00:47:59.880Z"\n}"
}).then(res => console.log(res))

// DELETE A SLIDE
axios.delete(process.env.REACT_APP_SLIDES/${ID}).then(res => console.log(res))

