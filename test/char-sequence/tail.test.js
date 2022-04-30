import { assert } from "chai";
import { tail } from "../../src/char-sequence.js";

describe( "char-sequence", () => {

  describe( "tail", () => {

    it( "Given a non-string value, it throws a TypeError.", () => {

      [ undefined, null, true, 1, [ "a", "r", "r", "a", "y" ] ]
        .forEach( nonString => {

          assert.throws(
            () => { tail( nonString ); },
            /Expected: string/
          );
        });
    });

    it( "Given an empty string, it returns the empty string.", () => {

      assert.strictEqual( tail( "" ), "" );
    });

    it( "Given a one-character string, it returns the empty string.", () => {

      assert.strictEqual( tail( "a" ), "" );
    });

    it(
      "Given a multi-byte one-character string, it still returns the empty " +
        "string.",
      () => {
        const char = String.fromCodePoint( 129300 );

        assert.strictEqual( char.length, 2 );
        assert.strictEqual( tail( char ), "" );
      }
    );

    it(
      "Given a multi-character string, it returns all characters except the " +
        "first.",
      () => {
        const pod = "pod";
        const ipod = "i" + pod;

        assert.strictEqual( tail( ipod ), pod );
      }
    );

    it(
      "Given a string starting with a multi-byte character, it correctly " +
        "returns the string following the entire first character.",
      () => {
        const think = String.fromCodePoint( 129300 );
        const aboutIt = " about it!";
        const example = think + aboutIt;

        assert.strictEqual( tail( example ), aboutIt );
      }
    );
  });
});

