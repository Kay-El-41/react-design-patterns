export const checkingProps = (Component) => {
  return (props) => {
    // Do Something With The Props
    console.log(props);

    return <Component {...props} />;
  };
};

// ? What does this HOC does?
// * The Naming Convention is that HOCs should start with lowercase letter, because they are functions.
// ! Also please notice that unless, this is an jsx extension, this HOC won't work.
// This HOC takes the component, the first return will have props, that are attached to the Component, do something with the props, like restructuring the props or validating or anything.
// Then pass on on the Component and return the Component.
