# objectAttributes

This library allows setting and retrieving Objects to attribute values.

## How to use

### APIs

#### setObjectAttribute

This function stores an Object in the target element.

```ts
import { setObjectAttribute } from 'objectAttribute';

const element = document.getElementById('foo');
const data = {
  name: 'some string',
  id: 1000,
  score: [10, 200, 5],
};

setObjectAttribute(element, 'foo', data);
```

#### getObjectAttribute

This function gets an Object from the target element.  
If the attribute value is not set for the target element, an error occurs.

```ts
import { getObjectAttribute } from 'objectAttribute';

const element = document.getElementById('foo');
const data = getObjectAttribute(element, 'foo');

console.log(data.name); // => "some string"
```

#### safeSetObjectAttribute

This function returns a Result type to avoid causing runtime errors.  
When this API is used, it is recommended that TypeScript be used in conjunction with it.

```ts
import { safeSetObjectAttribute } from "objectAttribute";

const element = document.getElementById('foo');
const data = {
  name: "some string",
  id: 1000,
  // Functions are not serializable.
  cantSerialize: () => console.log('bar');
}

const result = safeSetObjectAttribute(element, "foo", data);
if (result.stats === 'error') {
  // What to do in case of an error.
  console.log(result.error);
}
```

#### safeGetObjectAttribute

This function returns a Result type to avoid causing runtime errors.  
When this API is used, it is recommended that TypeScript be used in conjunction with it.

```ts
import { safeGetObjectAttribute } from 'objectAttribute';

const element = document.getElementById('foo');
const attr = getObjectAttribute(element, 'foo');

if (attr.stats === 'error') {
  console.log(data.error);
} else {
  console.log(attr.data.name); // => "some string"
}
```
