import { useState, useEffect } from "react";

const useHook = (getData) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, []);
  // ! If you put getData as the dependency, if you use this hook multiple time in a single component, memory leaking will occur!
  // ! But in container pattern, that was not the case.

  return resource;
};

export default useHook;

// * Custom Hooks should start with the "use" keyword in their name.
// This one is going to be generic like in container pattern.
// The hook will not know where the response resource will come from. It can be from the localStorage or axios function or another fetch.
