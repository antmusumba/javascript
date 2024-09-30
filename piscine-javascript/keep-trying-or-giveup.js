function retry(count = 3, callback = async () => {}) {
    return async function(...args) {
        try {
            const result = await callback(...args);
            return result;
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}

function timeout(delay = 0, callback = async() => {}) {
    return async function(...args) {
        let timeoutId;
        const timeout = new Promise((_, reject) =>
            timeoutId = setTimeout(() => reject(new Error('timeout')), delay)
        );
        try {
            const result = await Promise.race([timeout, callback(...args)]);
            clearTimeout(timeoutId);
            return result;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    };
}