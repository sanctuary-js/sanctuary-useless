//. # sanctuary-useless
//.
//. This package exports a single value, `Useless`, the sole member of the
//. sanctuary-useless/Useless type:
//.
//. ```javascript
//. //    Useless :: Useless
//. const Useless = require ('sanctuary-useless');
//. ```
//.
//. `Useless`, as its name suggests, has no functionality. This makes it useful
//. for testing algebraic data types which satisfy various [type classes][].
//.
//. The following assertion, in isolation, suggests that `Identity a` satisfies
//. [`Z.Setoid`][] _for all_ `a`:
//.
//. ```javascript
//. eq (Z.Setoid.test (Identity (0))) (true);
//. ```
//.
//. `Identity Useless`, though, does not satisfy `Z.Setoid`, indicating that
//. `a` is constrained in some way:
//.
//. ```javascript
//. eq (Z.Setoid.test (Identity (Useless))) (false);
//. eq (Z.Setoid.test (Identity (0))) (true);
//. ```
//.
//. Conversely, one can use `Useless` to demonstrate universal quantification
//. where applicable:
//.
//. ```javascript
//. eq (Z.Functor.test (Identity (Useless))) (true);
//. ```

(f => {

  'use strict';

  /* istanbul ignore else */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f ();
  } else if (typeof define === 'function' && define.amd != null) {
    define ([], f);
  } else {
    self.sanctuaryUseless = f ();
  }

}) (() => {

  'use strict';

  const Useless = {};

  Useless['@@type'] = 'sanctuary-useless/Useless@1';

  /* istanbul ignore else */
  if (
    typeof process !== 'undefined' &&
    process != null &&
    process.versions != null &&
    process.versions.node != null
  ) {
    Useless[
      Symbol.for ('nodejs.util.inspect.custom')  // added in Node.js v10.12.0
    ] = () => 'Useless';
  }
  /* istanbul ignore if */
  if (typeof Deno !== 'undefined') {
    if (Deno != null && typeof Deno.customInspect === 'symbol') {
      Useless[Deno.customInspect] = () => 'Useless';
    }
  }

  return Useless;

});

//. [`Z.Setoid`]:       v:sanctuary-js/sanctuary-type-classes#Setoid
//. [type classes]:     v:sanctuary-js/sanctuary-type-classes
