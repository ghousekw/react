```
git clone https://github.com/codedthemes/mantis-free-react-admin-template.git
npm install -g <package>
npm install -g yarn
yarn
yarn start
ctrl+c
npx update-browserslist-db@latest

```

> The -g flag tells npm to install the package globally. Local packages are used in your application.For instance, React as a library will be a local package which can be required in your application for usage.

## You can install it via the terminal by typing:

```
npm install <package>
npm install react
```

> The installed package will automatically appear in a folder called node_modules/ and will be listedin the package.json file next to your other dependencies. To initialize the node_modules/ folder and the package.json file for your project.There is a npm command to initialize a npm project and thus a package.json file. Only when you have that file,

### you can install new local packages via npm.

```
npm init -y
```

> The -y flag is a shortcut to initialize all the defaults in your package.json. If you don’t use the flag, you have to decide how to configure the file. After initializing your npm project you are good to install new packages via

```
npm install <package> .
```

> One more word about the package.json. The file enables you to share your project with other developers without sharing all the node packages. The file has all the references of node packages used in your project. These packages are called dependencies. Everyone can copy your project without the dependencies. The dependencies are references in the package.json. Someone who copies your project can simply install all packages by using npm install on the command line. The npm install script takes all the dependencies listed in the package.json file and installs them in the node_modules/ folder.

```
npm install --save-dev <package>
```

> The --save-dev flag indicates that the node package is only used in the development environment. It will not be used in production when you deploy your application on a server.

### command line to bootstrap new React applications.

```
npm install -g create-react-app
```

#### check the version of create-react-app

```
create-react-app --version
*v1.5.1
```

### Afterward, simply navigate into the folder:

```
create-react-app hackernews
cd hackernews
```

```
Folder Structure

hackernews/
    README.md

node_modules/
package.json
.gitignore

public/
    favicon.ico
    index.html
    manifest.json
src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

```
// Runs the application in http://localhost:3000
npm start
// Runs the tests
npm test
// Builds the application for production
npm run build
```

```
yarn init --yes
yarn add global create-react-app
yarn create-react-app my-app

# 1. Introduction to react elements

```javascript
// Example 1:
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  React.createElement(
    "h1",
    { style: { color: "blue" } },
    "Heyyy Everyone!"
  ),
  document.getElementById("root")
);

// Example 2:
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
  document.getElementById("root")
);
```
# 2. React Components
## 2.1. creating react component
```javascript
import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
```
## 2.2. adding component properties
```javascript
import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
```
## 2.3. working lists
```javascript
import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

```
## 2.4. Adding key list items
```javascript
import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
```
## 2.5. Displaying Images in react
```javascript
import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <img
        src={restaurant}
        height={200}
        alt="napkin and silverware at a restaurant table"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

```
## 2.6. Using fragments
```javascript
import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <img
        src={restaurant}
        height={200}
        alt="napkin and silverware at a restaurant table"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

```
# 3. React State components
## 3.1 conditional rendering
```javascript
import React from "react";
import "./App.css";

function SecretComponent() {
  return (
    <h1>Secret information for authorized users only</h1>
  );
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App(props) {
  return (
    <>
      {props.authorized ? (
        <SecretComponent />
      ) : (
        <RegularComponent />
      )}
    </>
  );
}

export default App;

```
## 3.2 destructuring arrays object
```javascript
//index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);

// app.js
import React from "react";
import "./App.css";

function SecretComponent() {
  return (
    <h1>Secret information for authorized users only</h1>
  );
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App({ authorized }) {
  return (
    <>
      {authorized ? (
        <SecretComponent />
      ) : (
        <RegularComponent />
      )}
    </>
  );
}

export default App;

```
## 3.3 understanding useState
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);

// app.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <>
      <h1>Current emotion is: {emotion}.</h1>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
    </>
  );
}

export default App;

```
## 3.4 working useEffect
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);

// app.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here.`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotions are {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
      <button onClick={() => setSecondary("crabby")}>
        Make Crabby
      </button>
    </>
  );
}

export default App;

```
## 3.5 incorporating useReducer
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);
// app.js
import React, { useReducer } from "react";
import "./App.css";

function App() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;

```
# 4. Asynchronous react
## 4.1 fetching data hooks
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <App login="eveporcello" />,
  document.getElementById("root")
);
// app.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  return <div>No Data Available</div>;
}

export default App;

```
## 4.2 displaying data from api
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <App login="eveporcello" />,
  document.getElementById("root")
);

// app.js
import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/eveporcello

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No Data Available</div>;
}

export default App;

```
## 4.3 handling loading states
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <App login="eveporcello" />,
  document.getElementById("root")
);
// app.js
import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/eveporcello

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No Data Available</div>;
}

export default App;

```
# 5. React Testing

## 5.1 create react app as testing platform
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <App login="eveporcello" />,
  document.getElementById("root")
);
// app.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <App login="eveporcello" />,
  document.getElementById("root")
);

```
## 5.2 testing small functions Jest
```javascript
// function.js
export function timesTwo(a) {
  return a * b;
}
// function.test.js
import { timesTwo } from "./functions";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

```
## 5.3 introducing react testing library
```javascript
// app.js
import React from "react";
import "./App.css";

function App() {
  return <h1>Hello React Testing Library</h1>;
}

export default App;
// app.test.js
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders an h1", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello React Testing Library/);
  expect(h1).toHaveTextContent(
    "Hello React Testing Library"
  );
});

```
## 5.4 testing hooks react testing library
```javascript
// checkbox.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
// checkbox.test.js
import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return (
    <>
      <label htmlFor>
        {checked ? "checked" : "not checked"}
      </label>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
    </>
  );
}

```
# 6. React Router
## 6.1 Installing react router
```javascript
```
## 6.2 configuring router
```javascript
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;

```
## 6.3 incorporating link component
```javascript
// pages.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
// app.js
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

```
## 6.4 nesting links react router 6
```javascript
// pages.js
import React from "react";
import {
  Link,
  useLocation,
  Outlet
} from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Location</h2>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
// app.js
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Services,
  CompanyHistory,
  Location
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

```