import React from "react";

// fix React.lazy fail chunk error using recursion

// ? What does this component do?
// 1. This retry function will handle the lazy load error that happens sometimes.
// 2. There is a retry of 5 times, until that is 4 times, the lazy loading will retry if fail to load.
// 3. When there is only 1 retry left, it will return an error.
// ! The error must be handled by the parent with React.Suspense and fallback method.

const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }
          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

const lazyComponentLoader = (fn) => React.lazy(() => retry(fn));

export default lazyComponentLoader;
