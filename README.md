This project is a sandbox of a very rudimentary drag and drop implementation in React.
It is built from ground up *manually*, using only the necessary dependencies.

Drag and drop functionality is all managed inside the React and Redux state, without the aid of any external drag and drop library - even the [dataTransfer browser API](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) is __completely ignored__ in this implementation.

The data flow is implemented with a functional approach, _**although there are many side effects**_.

The actions and reducers have a very generic implementation.
Rather than creating an action for each specific state change, the store reducers have been conceived with 5 main data handling ideas in mind:

* add data entry
* update data entry (or entries - following an update criteria)
* sort data entries
* remove data entry (or entries - following a removal criteria)
* replace the entire state data (partially or totally replace the state)

This structure may not very intuitive at first and it may take some getting used to.
Because of its imperative *(!declarative)* approach, it scales very nicely along the lifespan of a project.
Conflicting requirements (*in conflict with current implementation*) always show up sooner or later on a project and this type of generic structure takes away the need of adding additional actions for each additional niche case.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `build` folder.