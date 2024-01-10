//. # sanctuary-useless
//.
//. This package exports a single value, `Useless`, the sole member of the
//. sanctuary-useless/Useless type:
//.
//. ```javascript
//. import {Useless} from 'sanctuary-useless';
//. ```
//.
//. `Useless`, as its name suggests, has no functionality. This makes it useful
//. for testing algebraic data types which satisfy various [type classes][].
//.
//. ```javascript
//. > import Identity from 'sanctuary-identity'
//. > import Z from 'sanctuary-type-classes'
//. ```
//.
//. The following behaviour, in isolation, suggests that `Identity a` satisfies
//. [`Z.Setoid`][] _for all_ `a`:
//.
//. ```javascript
//. > Z.Setoid.test (Identity (0))
//. true
//. ```
//.
//. `Identity Useless`, though, does not satisfy `Z.Setoid`, indicating that
//. `a` is constrained in some way:
//.
//. ```javascript
//. > Z.Setoid.test (Identity (Useless))
//. false
//.
//. > Z.Setoid.test (Identity (0))
//. true
//. ```
//.
//. Conversely, one can use `Useless` to demonstrate universal quantification
//. where applicable:
//.
//. ```javascript
//. > Z.Functor.test (Identity (Useless))
//. true
//. ```

export {Useless};

const Useless = {};

Useless['@@type'] = 'sanctuary-useless/Useless@1';

if (
  typeof process !== 'undefined' &&
  process != null &&
  process.versions != null &&
  process.versions.node != null
) {
  const inspect = Symbol.for ('nodejs.util.inspect.custom');
  Useless[inspect] = () => 'Useless';
}

/* c8 ignore start */
if (
  typeof Deno !== 'undefined' &&
  Deno != null &&
  typeof Deno.customInspect === 'symbol'
) Useless[Deno.customInspect] = () => 'Useless';
/* c8 ignore stop */

//. [`Z.Setoid`]:       v:sanctuary-js/sanctuary-type-classes#Setoid
//. [type classes]:     v:sanctuary-js/sanctuary-type-classes
