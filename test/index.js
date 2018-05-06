'use strict';

const assert        = require ('assert');

const show          = require ('sanctuary-show');
const Z             = require ('sanctuary-type-classes');
const type          = require ('sanctuary-type-identifiers');

const Useless       = require ('..');


//    eq :: a -> b -> Undefined !
function eq(actual) {
  assert.strictEqual (arguments.length, eq.length);
  return function eq$1(expected) {
    assert.strictEqual (arguments.length, eq$1.length);
    assert.strictEqual (show (actual), show (expected));
    assert.strictEqual (Z.equals (actual, expected), true);
  };
}


test ('Useless', () => {
  eq (type (Useless)) ('sanctuary-useless/Useless@1');
  eq (type.parse (type (Useless)))
     ({namespace: 'sanctuary-useless', name: 'Useless', version: 1});

  eq (String (Useless)) ('[object Object]');
  eq (Useless.inspect ()) ('Useless');

  eq (Z.Setoid.test (Useless)) (false);
  eq (Z.Ord.test (Useless)) (false);
  eq (Z.Semigroupoid.test (Useless)) (false);
  eq (Z.Category.test (Useless)) (false);
  eq (Z.Semigroup.test (Useless)) (false);
  eq (Z.Monoid.test (Useless)) (false);
  eq (Z.Group.test (Useless)) (false);
  eq (Z.Filterable.test (Useless)) (false);
  eq (Z.Functor.test (Useless)) (false);
  eq (Z.Bifunctor.test (Useless)) (false);
  eq (Z.Profunctor.test (Useless)) (false);
  eq (Z.Apply.test (Useless)) (false);
  eq (Z.Applicative.test (Useless)) (false);
  eq (Z.Chain.test (Useless)) (false);
  eq (Z.ChainRec.test (Useless)) (false);
  eq (Z.Monad.test (Useless)) (false);
  eq (Z.Alt.test (Useless)) (false);
  eq (Z.Plus.test (Useless)) (false);
  eq (Z.Alternative.test (Useless)) (false);
  eq (Z.Foldable.test (Useless)) (false);
  eq (Z.Traversable.test (Useless)) (false);
  eq (Z.Extend.test (Useless)) (false);
  eq (Z.Comonad.test (Useless)) (false);
  eq (Z.Contravariant.test (Useless)) (false);
});
