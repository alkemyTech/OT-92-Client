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

