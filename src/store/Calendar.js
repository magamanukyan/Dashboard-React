import {create} from 'zustand';
import { INITIAL_EVENTS } from '../data';

const useCalendar = create ((set)=>(
    {
       currentEvents:INITIAL_EVENTS,
       setCurrentEvents:(events)=>set({currentEvents:events}) 
    }
))

export default useCalendar;


















//zustand is a state management library for React applications that provides a simple API for creating and managing state. The create function is used to create a new store in zustand
// The create function from the zustand library is imported.
// The INITIAL_EVENTS constant is imported from the ../data module. This constant is used as the initial state of the currentEvents property in the useCalendar store.
// The useCalendar store is created using create, which takes a single argument: a function that defines the initial state and actions for the store.
// The set function is passed to the function, which is used to update the state of the store.
// The initial state of the store is an object with a currentEvents property set to the INITIAL_EVENTS constant.
// The setCurrentEvents action function is defined, which takes an events argument and updates the currentEvents property of the state by calling the set function provided by zustand.