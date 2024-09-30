function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function opDebounce(fn, delay, options = {}) {
    let timer = null;
    let leading = options.leading || false;
    let lastCall = 0; // Track the time of the last call

    return function (...args) {
        const now = Date.now();

        // If leading is true and it's the first call or delay has passed since last call
        if (leading && (!timer || now - lastCall >= delay)) {
            fn.apply(this, args);  // Invoke immediately
            lastCall = now;  // Update the last call timestamp
        }

        // Clear the previous timer if it exists
        clearTimeout(timer);

        // Set up a new timer for trailing execution
        timer = setTimeout(() => {
            fn.apply(this, args);  // Invoke after the delay
            lastCall = Date.now();  // Update the last call timestamp
        }, delay);
    };
}
