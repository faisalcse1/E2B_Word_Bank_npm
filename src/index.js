import wordList from './E2BCData.json';


/**
 * Retrieves the entire word list.
 *
 * @returns {Array<Object>} - The full list of words, where each item is an object with English and Bangla fields, among others.
 *
 * @example
 * // Example usage:
 * const allWords = getAllWords();
 * console.log(allWords);
 * // Output:
 * // [
 * //   { sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ' },
 * //   { sl: 2, en: 'A Bad Egg', bn: 'ফালতু লোক' },
 * //   ...
 * // ]
 */
export const getAllWords = () => {
    // Return the entire word list
    return wordList;
  };
  
/**
 * Finds the first item in the word list where the `en` field matches the given English term (case-insensitive).
 *
 * @param {string} term - The English term to search for.
 * @returns {Object|null} - The first matching item, or `null` if no match is found.
 * @throws {Error} - Throws an error if the input term is not a valid string.
 *
 * @example
 * // Example usage:
 * const match = findWordByEnglish('A');
 * console.log(match);
 * // Output: { sl: 1, en: 'A', bn: '...' }
 */
export const findWordByEnglish = (term) => {    
    if (typeof term !== 'string' || term.trim() === '') {
      throw new Error('Invalid input: term must be a non-empty string.');
    }
    const result = wordList.find(
      (item) => item.en.toLowerCase() === term.toLowerCase()
    );  
    return result || null;
  };
  

/**
 * Finds the first item in the word list where the `bn` field contains the given Bangla term.
 *
 * @param {string} term - The Bangla term to search for.
 * @returns {Object|null} - The first matching item, or `null` if no match is found.
 * @throws {Error} - Throws an error if the input term is not a valid string.
 *
 * @example
 * // Example usage:
 * const match = findWordByBangla('লোক');
 * console.log(match);
 * // Output: { sl: 2, en: 'A Bad Egg', bn: 'ফালতু লোক', ... }
 */
export const findWordByBangla = (term) => {   
    if (typeof term !== 'string' || term.trim() === '') {
      throw new Error('Invalid input: term must be a non-empty string.');
    }
    const result = wordList.find((item) =>
      (item) => item.bn.toLowerCase() === term.toLowerCase()
    );
    return result || null;
  };
  

/**
 * Finds all items in the word list where the `en` field starts with the given term.
 *
 * @param {string} term - The English term to search for (case-insensitive).
 * @returns {Array<Object>} - A list of matching items where the `en` field starts with the given term.
 * @throws {Error} - Throws an error if the input term is not a valid string.
 *
 * @example
 * // Example usage:
 * const matches = findWordsByEnglishStartWith('A');
 * console.log(matches);
 * // Output: [{ sl: 1, en: 'A', bn: '...' }, { sl: 2, en: 'A Bad Egg', bn: '...' }]
 */
export const findWordsByEnglishStartWith = (term) => {    
    if (typeof term !== 'string' || term.trim() === '') {
      throw new Error('Invalid input: term must be a non-empty string.');
    }    
    const results = wordList.filter((item) =>
      item.en.toLowerCase().startsWith(term.toLowerCase())
    );
    return results;
  };

  /**
 * Finds all items in the word list where the `bn` field starts with the given Bangla term.
 *
 * @param {string} term - The Bangla term to search for (case-sensitive).
 * @returns {Array<Object>} - A list of matching items where the `bn` field starts with the given term.
 * @throws {Error} - Throws an error if the input term is not a valid string.
 *
 * @example
 * // Example usage:
 * const matches = findWordsByBanglaStartWith('ইংরেজী');
 * console.log(matches);
 * // Output: [{ sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ', ... }]
 */
export const findWordsByBanglaStartWith = (term) => {    
    if (typeof term !== 'string' || term.trim() === '') {
      throw new Error('Invalid input: term must be a non-empty string.');
    }  
    const results = wordList.filter((item) =>
      item.bn.startsWith(term)
    );
    return results;
  };
  
  