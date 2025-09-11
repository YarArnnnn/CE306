import React, { useEffect, useState } from "react";

const EmptyDependencyEffect: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Empty Dependency Effect: Component Mounted!");
  }, []);

  console.log("Component rendered or re-rendered");

  return (
    <div>
      <h2>Empty Dependency Array Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count
      </button>
      <br />
      <p>
        **Check Console: "Component Mounted!" will only appear once,
        "Component rerendered or re-rendered" will apprear every time.**
      </p>
    </div>
  );
};

export default EmptyDependencyEffect;
