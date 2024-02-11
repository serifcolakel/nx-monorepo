/**
 * @description Formats the message of a service response.
 * @param {string} message The message to be formatted.
 * @param {string[]} replace The strings to replace the placeholders in message.
 * @returns {string} The formatted message.
 * @example
 * const message = 'The {0} is {1}!';
 * const replace = ['answer', '42'];
 * const result = getServiceResponseMessage(message, replace);
 * console.log(result); // The answer is 42!
 */
export const getServiceResponseMessage = (
  message: string,
  replace?: string[],
): string => {
  let result = message;

  if (replace) {
    replace.forEach((item, index) => {
      result = result.replace(`{${index}}`, item);
    });
  }

  return result;
};
