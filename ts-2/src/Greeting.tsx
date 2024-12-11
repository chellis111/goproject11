// Import React and define types
import React from 'react';

// Define the props type
type GreetingProps = {
  name: string; // The 'name' prop is required and must be a string
};

// Convert functional component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

/**
 * Changes Made:
 * 1. Added a `type` to define the shape of the props (`GreetingProps`).
 * 2. Explicitly declared the component as a `React.FC` (Function Component).
 */
