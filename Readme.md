# 📖MyCookBook

MyCookBook is a web application where you can store your favorite recipes, categorize them using hashtags (e.g. #dinner), and even create a printable menu.

## Getting Started

### Prerequisites 📋

Before you start, you need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installing 🧰

To install the necessary dependencies, run the following command:

```bash
npm install
```

### Running the app 🏃‍♀️

To start the app, run the following command:

```bash
npm run dev
```

The app will be served at <http://localhost:3000> 🌐.

### Build the app 🛠️

To build the app for production, run the following command:

```bash
npm run build
```

The built app will be located in the `dist` folder.

### Tech Stack 🔧

The app is built using the following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- [React Router](https://reactrouter.com/en/main) - Declarative routing for React
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience 🔥
- [Sass](https://sass-lang.com/) - A CSS preprocessor that allows for more maintainable and scalable stylesheets by providing features such as variables, mixins, and nesting 🎨

### Folder Structure 🌳

The app is organized as follows:

```css
.
├── src/
│   ├── components/
│   ├── css/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   └── index.jsx
├── .gitignore
├── package.json
├── index.html
└── README.md
```

- `src/components` - Contains reusable components used throughout the app.
- `src/css` - Contains style for the index.jsx and App.jsx it also contain my reusable variable and font-familly variable.
- `src/pages` - Contains the main pages of the app.
- `src/store` - Contains the Redux store and related files.
- `src/utils` - Contains utility functions used throughout the app.
- `src/App.jsx` - The main component that sets up the React Router and renders the appropriate pages.
- `src/index.jsx` - The entry point of the app.

### Features 💡

- Store and organize your favorite recipes using hashtags (e.g. #dinner)
- Create a printable menu for your meals

### Contributing 🤝

Contributions are welcome! Please feel free to submit a pull request or open an issue.

### License 📝

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
