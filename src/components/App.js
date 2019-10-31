import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  //array destructuring
  //eg: const colors = ['red', 'green'];
  //const [myColorThree, myColorFour] = colors;
  //In the above example, whatever is in the first index will be assigned to myColorThree (red). 
  //Whatever is in the 2nd index will be assigned to myColorFour (green).
  //resource and setResource can be named anything.
  //resource is the present value of this piece of state.
  //setResource is the function to call when we want to update and rerender our state (setter funct).
  //useState is the function from React
  //'posts' is the init value of this piece of state
  //the reason this only contains the individual value themselves instead of using a state object is because
  //we can call useState as many times as we want
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//       resource: 'posts'
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
//           <button onClick={() => this.setState({resource: 'to dos'})}>Todos</button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }

export default App;

//Hooks system:
//**The real reason to use hooks is because it makes it really easy to share logic between different components. **/
//Hooks system is all about bring class-based components functionality to function-based components
//useState: Allow a functional component to use component-level state
//useEffect: Allow a functional component to use lifecycle methods
//useContext: Allow a functional component to use the context system
//useRef: Allow a functional component to use the ref system
//useReducer: Allow a functional component to store data through a 'reducer'

//flow:
//App component created, initializes state 'resource' of posts
//App renders ResourceList
//ResourceList's 'componentDidMount' called, fetches posts
//Fetch completed, setState called, number of posts rendered
//We click 'todos' button, App updates its state, rerenders itself and ResourceList
//ResourceList was already 'mounted', so 'componentDidMount' is not called a second time