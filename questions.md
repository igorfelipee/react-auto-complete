## 1 - What is the difference between Component and PureComponent? give an example where it might break my app.

An PureComponent makes only a shallow comparasion of props. It might break your app if you pass for example an object as props to your PureComponent. In this case, only the reference of the object is verified and if a deep attribute of this object changes, your component will not re-render.

## 2 - Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

In some cases, shouldComponentUpdate can stop the propagation from some changes on context. For example:

Imagine that you have a PureComponent that receive an object as props and reads a value from a context. If this context's value changes, the shouldComponentUpdate will not regonize it as a trigger to re-render your component.

## 3 - Describe 3 ways to pass information from a component to its PARENT.

1 - Using a **_prop_** on child component that receive a function to pass this information

    // ParentComponent
    const [count,setCount] = useState<number>(0);

    return <ChildComponent count={count} setCount={setCount} />

    //ChildComponent

    const ChildComponent = ({count, setCount}) => {
    	return <button onClick={() => setCount(count + 1)}>{count}</button>
    }

2 - Using **_ContextAPI_**

3 - Using the **_useReducer_** hook and dispatch the information.

## 4 - Give 2 ways to prevent components from re-rendering.

1 - Using **_useMemo_** hook that compares the props and tells when a component need to re-render or not.
2 - Using **_useCallback_** on functions that modifies data to memorize the return of the function and not re-run untill the dependencies values changes.

## 5 - What is a fragment and why do we need it? Give an example where it might break my app.

Is used to return multiple children without add a wrapper;

It can cause css problems in some cases because the react fragment only return the children components. So if you need to this group of children components to be inside a wrapper, you shouldn't use fragment.

    // Parent - display: grid
    <Parent>
        <Child />
        <Child />
        <Child />
    </Parent>

    // Child - should wrapp components
    <>
        <A />
        <B />
        <C />
    </>

    // Result
    <Parent>
        <A />
        <B />
        <C />
        <A />
        <B />
        <C />
        <A />
        <B />
        <C />
    </Parent>

## 6 - Give 3 examples of the HOC pattern.

    // 1
    <Route path="/" element={ChildrenComponent} />

    // 2
    const Component = () => {...};

    export default withRouter(Component);


    // 3
    const ComponentContainer = connect(selector, actions)(Component)

## 7 - What's the difference in handling exceptions in promises, callbacks and async...await.

The difference between promise and async/await is only the sugar syntax. For example:

    // If you want to use Async/Await you should wrap it with a try/catch function
    try {
        return await promiseFn();
    } catch(error) {
        throw error;
    }

    // If you dont, you can call the .catch() function
    promiseFn.then(response => response).catch(error => error)

A callback is a function that is passed as argument to another function. So, in this case, the callback will receive the error as argument and check if error exists or not. For example:

    const callbackFunction = (id, error) => {
        if(error) throw error;
        ...
    }

## 8 - How many arguments does setState take and why is it async.

Only one. But it can be a value or a function that receives the prevValue as argument;

The setState function cause a re-render by state changes, so if it was a sync operation it would be very expensive and maybe would cause performance problems;

## 9 - List the steps needed to migrate a Class to Function Component.

1 - Change all the class declaration to a function declaration;

    // Class
    class Component extends React.Component {
        ...
    }

    // Function
    const Component = () => {
        ...
    }

2 - Migrate all state to useState, a reducer or context;

    // Class
    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: '...',
                name: '...'
            }
        }
    }

    // Function
    const Component = () => {
        const [id, setId] = useState();
        const [name, setName] = useState();
    }

3 - Pass all component props as arguments of the function;

    // Class
    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: '...',
                name: '...'
            }
        }
    }

    // Function
    const Component = (props) => {
        const [id, setId] = useState();
        const [name, setName] = useState();
    }

4 - Migrate all lifecycle hooks to useEffect or another hook;

    // Class
    class Component extends React.Component {
        ...

        componentDidMount() {
            ...
        }

    }

    // Function
    const Component = (props) => {
        ...

        useEffect(() => {
            ...
        }, [])
    }

5 - Put all render() function content in a return;

    // Class
    class Component extends React.Component {
        ...

        render() {
            return <h1>...</h1>
        }
    }

    // Function
    const Component = () => {
        ...

        return <h1>...</h1>
    }

## 10 - List a few ways styles can be used with components.

1 - Using css-in-js. Ex: styled-components;
2 - Using css file;
3 - Using style={} attr;

## 11 - How to render an HTML string coming from the server.

You can use dangerouslySetInnerHTML on component. But, as the name says, it's dangerous because it can cause a XSS attack. To prevent this, you should use a library to sanatize the response. Ex: DOMPurify library
