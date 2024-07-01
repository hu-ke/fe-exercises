function createUseState() {
    let state;
    return function(initialValue) {
        if (state === undefined) {
            state = initialValue;
        }
        function setState(newValue) {
            state = newValue;
            // render();
        }
        return [state, setState];
    };
}

const useState = createUseState();

function createUseEffect() {
    let effects = [];
    return function(callback, dependencies) {
        const hasNoDeps = !dependencies;
        const hasChangedDeps = effects.some((effect, i) => {
            return effect.dependencies ? !dependencies.every((dep, j) => dep === effect.dependencies[j]) : true;
        });

        if (hasNoDeps || hasChangedDeps) {
            callback();
            effects = effects.map((effect, i) => ({
                callback,
                dependencies
            }));
        }
    };
}

const useEffect = createUseEffect();

function Component() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Component did mount or update');
    }, [count]);

    console.log('Render:', count);
    setTimeout(() => setCount(count + 1), 1000);
}


Component();
