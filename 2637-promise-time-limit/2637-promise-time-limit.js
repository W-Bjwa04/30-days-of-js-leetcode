/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {

        const timeout = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        return Promise.race([
            fn(...args),
            timeout
        ]);
    };
    
};

const func = (t) => new Promise(res => setTimeout(res, t))
 const limited = timeLimit(func, 50);
 limited(100).catch(console.log) // "Time Limit Exceeded" at t=100ms
