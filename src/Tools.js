/**
 * Prevent default for input event and call input function
 * @param {Function} fn - handler function
 * @param args - rest arguments
 * @returns {function(*)}
 */
export function preventAndCall (fn, ...args) {
  return event => {
    event.preventDefault();
    fn(...args);
  };
}