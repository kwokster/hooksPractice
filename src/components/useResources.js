import {useState, useEffect} from 'react';
import axios from 'axios';

//we're using lower-case because we usually call function with a lower-case, as opposed to components which are capitalized

//Flow:
//Resource prop -> Hook stuff! -> Resources array
//Can we extract all the hook-related stuff into a separate function?
//This function (useResources) has no tie to any specific component. We can reuse this function anywhere in the app
const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    //componentDidMount + componentDidUpdate = useEffect

    //every time the component gets rendered to the screen or gets updated, this func will run.
    //the arrow function is called if the value inside the [] is different on subsequent renders!
    //the arrow function is not called if the value inside the [] is the same on subsequent renders.

    //useEffect rules:
    //if you call useEffect without an array, it will get called 100% of the time.
    //if you call useEffect with an empty array, it will perform like componentDidMount.
    //if you call useEffect with the same value the 2nd time around, it will not be called the 2nd time.
    //if you pass the same object in the array, it will be called the 2nd time around because it is like
    //redux reducers. Every time we create an obj in JS, these are different objs in memory. The new obj
    //is not the same as the old obj.
    //We can put in as many elements as we want inside the array.
    //If you ever want to use useEffect with a promise or async request, we have to define it inside of 
    //a 2nd function and then call the second function from within useEffect (like the one below!)
    useEffect(() => {
      // fetchResource(resource);
      (async resource => {
        const response = await axios.get(
          `http://jsonplaceholder.typicode.com/${resource}`
        );
        console.log(response);
        setResources(response.data);
      })(resource); //immediately invoked function
    }, [resource]);

    return resources;
};

export default useResources;