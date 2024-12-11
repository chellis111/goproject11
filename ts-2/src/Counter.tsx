import React, { Component } from 'react';

// Define the state type
type CounterState = {
  count: number; // The `count` state is a number
};

// Define props type (if any props are expected, otherwise use an empty object)
type CounterProps = {};

// Convert class component to TypeScript
class Counter extends Component<CounterProps, CounterState> {
  // Initialize the state with its type
  state: CounterState = {
    count: 0,
  };

  // Type the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/**
 * Changes Made:
 * 1. Defined `CounterState` type to type the `state` object.
 * 2. Defined `CounterProps` type for the props (even if empty).
 * 3. Explicitly typed the `increment` method as `void` (no return value).
 */
