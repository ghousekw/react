// Iterating objects list with components using map function
    //   const LakeList = [
    //     { id: 1, name: "Echo Lake", trailhead: "Echo Lake" },
    //     { id: 2, name: "Maud Lake", trailhead: "Wright's Lake" },
    //     { id: 3, name: "Cascade Lake", trailhead: "Bayview" }
    //   ];

    //   const App = ({ lakes }) => (
    //     <div>
    //       <ul>
    //         {lakes.map(lake => (
    //           <li key={lake.id}>
    //             Name: {lake.name} | TrailHead: {lake.trailhead}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    //   ReactDOM.render(
    //     <App lakes={LakeList} />,
    //     document.getElementById("root")
    //   );

      // Iterating array list with components using map function
      //     const LakeList = [
      //         "Echo Lake",
      //         "Maud Lake",
      //         "Cascade Lake"
      //     ];

      //     const App = ({ lakes }) => (
      //         <div>
      //             <ul>
      //                 {lakes.map((lake, i) =>
      //                     <li key={i}>{lake}</li>
      //                 )}
      //             </ul>
      //         </div>
      //     );
      //     ReactDOM.render(
      //         <App lakes={LakeList} />,
      //         document.getElementById('root')
      //     );

      // Showing components based on conditions
      //     const Lake = ({ name }) => <h1>{name}</h1>;
      //     const SkiResort = ({ name }) => <h1>{name}</h1>;

      //     const App = ({summer}) => (
      //         <div>
      //         {summer ?
      //         <Lake name="Lake Tahoe"/> :
      //         <SkiResort name="Alpine Meadows"/>}
      //         </div>
      //     );
      //     ReactDOM.render(
      //         <App summer={true}/>,
      //         document.getElementById('root')
      //     );

      // changing state after click events
      //     const Lake = ({ name }) => <h1>{name}</h1>;

      //     class App extends React.Component {
      //         state = {
      //             loggedIn: false
      //         }
      //         logIn = () => this.setState({loggedIn:true})
      //         logOut = () => this.setState({ loggedIn: false })
      //         render() {
      //             return (
      //                 <div>
      //                     <button onClick={this.logIn}>Log In</button>
      //                     <button onClick={this.logOut}>Log Out</button>
      //                     <div>The user is {this.state.loggedIn ? "logged in" : "not logged in"}.</div>
      //                     <Lake name="Lake Tahoe" />
      //                     <Lake name="Angora Lake" />
      //                     <Lake name="Shirley Lake" />
      //                     <Lake name="Cathedral Lake" />
      //                 </div>
      //             );
      //         }
      //     }
      //     ReactDOM.render(
      //         <App />,
      //         document.getElementById('root')
      //     );

      // By using State
      //     const Lake = ({ name }) => <h1>{name}</h1>;

      //     class App extends React.Component {
      //         state = {
      //             loggedIn:true
      //         }
      //         render() {
      //             return (
      //                 <div>
      //                     <div>The user is {this.state.loggedIn ? "logged in" : "not logged in"}.</div>
      //                     <Lake name="Lake Tahoe" />
      //                     <Lake name="Angora Lake" />
      //                     <Lake name="Shirley Lake" />
      //                     <Lake name="Cathedral Lake" />
      //                 </div>
      //             );
      //         }
      //     }
      //     ReactDOM.render(
      //         <App />,
      //         document.getElementById('root')
      //     );

      // By using class components
      //     const Lake = ({ name }) => <h1>{name}</h1>;

      //     class App extends React.Component {
      //         render(){
      //             return(
      //                 <div>
      //                     <Lake name="Lake Tahoe" />
      //                     <Lake name="Angora Lake" />
      //                     <Lake name="Shirley Lake" />
      //                     <Lake name="Cathedral Lake" />
      //                 </div>
      //             );
      //         }
      //     }
      //     ReactDOM.render(
      //         <App />,
      //         document.getElementById('root')
      //     );

      // By using multiple components
      //     const Lake = ({name}) => <h1>{name}</h1>;

      //     const App = () => (
      //         <div>
      //             <Lake name="Lake Tahoe"/>
      //             <Lake name="Angora Lake" />
      //             <Lake name="Shirley Lake" />
      //             <Lake name="Cathedral Lake" />
      //         </div>
      //     );
      //     ReactDOM.render(
      //         <App />,
      //         document.getElementById('root')
      //     );

      // By using props - method-2
      //     const Hello = ({library, message}) => {
      //         return (
      //             <div className="heading1">
      //                 <h1>Welcome to {library}</h1>
      //                 <p>{message}</p>
      //             </div>
      //         )
      //     };
      //     ReactDOM.render(
      //         <Hello library="React" message="Enjoy!" />,
      //         document.getElementById('root')
      //     );

      // By using props - method-1
      // const Hello = (props) => {
      //         return (
      //             <div className="heading1">
      //                 <h1>Welcome to {props.library}</h1>
      //                 <p>{props.message}</p>
      //             </div>
      //         )
      //     };
      // ReactDOM.render(
      //     <Hello library="React" message="Enjoy!"/>,
      //     document.getElementById('root')
      // );

      // By using componenets
      // If we are using curly braces we should use return statement
      // Component name should start with capital letter only otherwise it throws a warning
      // const Hello = () => {
      //     return(
      //     <div className="heading1">
      //         <h1>Hello! Welcome to react componenets</h1>
      //     </div>
      //     )
      // };
      //     ReactDOM.render(
      //         <Hello />,
      //         document.getElementById('root')
      //     );

      //If we have one element
      // ReactDOM.render(
      //     React.createElement('h1',
      //     {"style": { "color": "red"}},
      //     'Hello World!'),
      //     document.getElementById('root')
      // );

      //If we have multiple elements
      // ReactDOM.render(
      //         React.createElement('div',
      //             null,
      //             React.createElement("h1",null,'Oh hello!')
      //             ),
      //         document.getElementById('root')
      // );

      // By using JSX
      // ReactDOM.render(
      //         <h1>Hello World!</h1>,
      //         document.getElementById('root')
      // );

      // By using variables
      // let city = "madrid";
      // ReactDOM.render(
      //         <h1 className="heading1">Welcome to {city}</h1>,
      //         document.getElementById('root')
      // );