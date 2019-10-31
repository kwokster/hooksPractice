import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return <ul>{resources.map(record => (
    <li key={record.id}>{record.title}</li>
  ))}</ul>;
};

// class ResourceList extends React.Component {
//   state = { resources: [] };
//   async componentDidMount() {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({
//       resources: response.data
//     });
//   }
//   //this lifecycle method gets called every time component gets re-rendered or anything that we call setState inside this class-based component. Be careful of error loop such as setState inside lifecycle.
//   //previous props is provided as the first arg to use as a check against this loop. If the props has changed,
//   //then make the request
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `http://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({
//         resources: response.data
//       });
//     }
//   }
//   render() {
//     return <div>{this.state.resources.length}</div>;
//   }
// }

export default ResourceList;
