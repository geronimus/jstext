# `@geronimus/text`

Contains utility functions for working with text values.

# Usage

```javascript
import { module_name } from "@geronimus/text";
```

_or_

```javascript
const { module_name } = require( "@geronimus/text" );
```

---

# Modules

## Character

Contains collections of constants describing various classifications of special characters.

---

### Character.Control

An object containing constants for each non-printable contol character.

---

### Character.ControlSet

A Set containing all non-printable control characters.

---

### Character.LineEnd

An object containing constants for each line-terminating character.

---

### Character.LineEndSet

A Set containing all non-printable control characters.

---

### Character.Space

An object containing constants for each spacing character.

---

### Character.SpaceSet

A Set containing all spacing characters.

---

## head( text )

A function to help you safely iterate over a text value as a sequence of characters.

It returns the first character in the text value, irrespective of how many bytes it contains.

### Parameters

`text` _string_

The text whose first character you wish to return.

### Return value

If the text contains at least one character, it returns the first character.

Otherwise, it returns the empty string value.

### Examples

```javascript
head( "head" );   // => "h"
head( "🚕 🛵" );  // => "🚕"
head( "" );       // => ""
```
---

## tail( text )

A function to help you safely iterate over a text value as a sequence of characters.

It returns the string of all characters following the first, irrespective of how many bytes the the characters contain.

### Parameters

`text` _string_

The text for which you wish to return all characters except the first.

### Return value

_string_

If the text contains at least two characters, it returns the string of all characters except the first.

Otherwise, it returns the empty string value.

### Examples

```javascript
tail( "tail" );   // => "ail"
tail( "🚕 🛵" );  // => " 🛵"
tail( "a" );      // => ""
```
---

