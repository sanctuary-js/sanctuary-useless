# sanctuary-useless

This package exports a single value, `Useless`, the sole member of the
sanctuary-useless/Useless type:

```javascript
//    Useless :: Useless
const Useless = require ('sanctuary-useless');
```

`Useless`, as its name suggests, has no functionality. This makes it useful
for testing algebraic data types which satisfy various [type classes][].

The following assertion, in isolation, suggests that `Identity a` satisfies
[`Z.Setoid`][] _for all_ `a`:

```javascript
eq (Z.Setoid.test (Identity (0))) (true);
```

`Identity Useless`, though, does not satisfy `Z.Setoid`, indicating that
`a` is constrained in some way:

```javascript
eq (Z.Setoid.test (Identity (Useless))) (false);
eq (Z.Setoid.test (Identity (0))) (true);
```

Conversely, one can use `Useless` to demonstrate universal quantification
where applicable:

```javascript
eq (Z.Functor.test (Identity (Useless))) (true);
```

[`Z.Setoid`]:       https://github.com/sanctuary-js/sanctuary-type-classes/tree/v8.2.0#Setoid
[type classes]:     https://github.com/sanctuary-js/sanctuary-type-classes/tree/v8.2.0
