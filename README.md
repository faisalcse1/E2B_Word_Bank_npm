# E2B_Word_Bank

[![npm version](https://img.shields.io/npm/v/e2b_word_bank)](https://www.npmjs.com/package/e2b_word_bank)  
The E2BWordBank package provides a comprehensive English-to-Bangla word database for easy integration into react and angular applications.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
    - [`getAllWords()`](#1-getallwords)
    - [`findWordByEnglish(term)`](#2-findwordbyenglishterm)
    - [`findWordByBangla(term)`](#3-findwordbybanglaterm)
    - [`findWordsByEnglishStartWith(term)`](#4-findwordsbyenglishstartswithterm)
    - [`findWordsByBanglaStartWith(term)`](#5-findwordsbybanglastartswithterm)
5. [Contributing](#contributing)
6. [License](#license)

---

## Features

- Retrieve the entire word list.
- Search for words by English term.
- Search for words by Bangla term.
- Find words starting with specific English or Bangla terms.

---

## Installation

Install the package using npm:

```bash
npm install e2b_word_bank
```

---

## Usage

### Importing the e2b_word_bank

```javascript
import {
  getAllWords,
  findWordByEnglish,
  findWordByBangla,
  findWordsByEnglishStartWith,
  findWordsByBanglaStartWith
} from 'e2b_word_bank';
```

---

## API Documentation

### 1. `getAllWords()`

Retrieve the entire word list.

#### **Returns**:
- **`Array<Object>`**: The full list of words, where each item contains English and Bangla fields.

#### **Example**:

```javascript
const allWords = getAllWords();
console.log(allWords);
/*
[
  { sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ' },
  { sl: 2, en: 'A Bad Egg', bn: 'ফালতু লোক' },
  ...
]
*/
```

---

### 2. `findWordByEnglish(term)`

Finds the first item in the word list where the `en` field matches the given English term (case-insensitive).

#### **Parameters**:
- **`term`**: `string` - The English term to search for.

#### **Returns**:
- **`Object|null`**: The first matching item, or `null` if no match is found.

#### **Example**:

```javascript
const match = findWordByEnglish('A');
console.log(match);
/*
{ sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ' }
*/
```

---

### 3. `findWordByBangla(term)`

Finds the first item in the word list where the `bn` field matches the given Bangla term.

#### **Parameters**:
- **`term`**: `string` - The Bangla term to search for.

#### **Returns**:
- **`Object|null`**: The first matching item, or `null` if no match is found.

#### **Example**:

```javascript
const match = findWordByBangla('লোক');
console.log(match);
/*
{ sl: 2, en: 'A Bad Egg', bn: 'ফালতু লোক' }
*/
```

---

### 4. `findWordsByEnglishStartWith(term)`

Finds all items in the word list where the `en` field starts with the given term (case-insensitive).

#### **Parameters**:
- **`term`**: `string` - The English term to search for.

#### **Returns**:
- **`Array<Object>`**: A list of matching items.

#### **Example**:

```javascript
const matches = findWordsByEnglishStartWith('A');
console.log(matches);
/*
[
  { sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ' },
  { sl: 2, en: 'A Bad Egg', bn: 'ফালতু লোক' },
  ...
]
*/
```

---

### 5. `findWordsByBanglaStartWith(term)`

Finds all items in the word list where the `bn` field starts with the given Bangla term.

#### **Parameters**:
- **`term`**: `string` - The Bangla term to search for.

#### **Returns**:
- **`Array<Object>`**: A list of matching items.

#### **Example**:

```javascript
const matches = findWordsByBanglaStartWith('ইংরেজী');
console.log(matches);
/*
[
  { sl: 1, en: 'A', bn: 'ইংরেজী বর্ণমালার প্রথম বর্ণ' }
]
*/
```

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/faisalcse1/E2B_Word_Bank_npm).

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.