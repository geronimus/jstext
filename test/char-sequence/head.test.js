import { assert } from "chai";
import { head } from "../../src/char-sequence.js";

describe( "char-sequence", () => {

  describe( "head", () => {

    it( "Given a non-string value, it throws a TypeError.", () => {

      [ undefined, null, true, 1, { "0": "a" } ].forEach( nonString => {

        assert.throws(
          () => { head( nonString ); },
          /Expected: string/
        );
      });
    });

    it( "Given an empty string, it returns the empty string.", () => {

      assert.strictEqual( head( "" ), "" );
    });

    it( "Given a one-character string, it returns that character.", () => {

      assert.strictEqual( head( "a" ), "a" );
    });

    it(
      "Given a multi-byte one-character string, it still returns an entire " +
        "character.",
      () => {
        const char = String.fromCodePoint( 129300 );

        assert.strictEqual( char.length, 2 );
        assert.strictEqual( head( char ), char );
      }
    );
  });
});

