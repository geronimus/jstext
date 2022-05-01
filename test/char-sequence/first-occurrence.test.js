import { assert } from "chai";
import { firstOccurrence } from "../../src/char-sequence.js";

describe( "firstOccurence( substrings, text )", () => {

  it(
    "Given a substrings argument that is neither an Array nor a string, it " +
      "throws a TypeError.",
    () => {
      [ undefined, null, true, 1, { "0": "text" } ].forEach( badArg => {

        assert.throws(
          () => { firstOccurrence( badArg, "text" ); },
          /Expected: string/
        );
      });
    }
  );

  it(
    "Given a text argument that is not a string, it throws a TypeError.",
    () => {
      [ undefined, null, true, 1, { "0": "text" } ].forEach( badArg => {

        assert.throws(
          () => { firstOccurrence( "text", badArg ); },
          /Expected: string/
        );
      });
    }
  );

  it(
    "Given an empty Array or empty string for its substrings argument, it " +
      "returns -1.",
    () => {
      [ [], "" ].forEach( pointlessArg => {
        assert.strictEqual( firstOccurrence( pointlessArg, "text" ), -1 );
      });
    }
  );

  it( "Given an empty string as the text argument, it returns -1.", () => {

    assert.strictEqual( firstOccurrence( "prefix", "" ), -1 );
  });

  it( "Given substrings that are not in the text, it returns -1.", () => {
  
    [ [ "x", "y", "z" ], "z" ].forEach( notFoundArg => {

      assert.strictEqual( firstOccurrence( notFoundArg, "abc" ), -1 );
    });
  });

  it(
    "Returns the index of the first occurrence of one of the substring " +
      "options within the text.",
    () => {
      assert.strictEqual( firstOccurrence( "a", "abc" ), 0 );
      assert.strictEqual( firstOccurrence( "mua", "Oumuamua" ), 2 );
      assert.strictEqual( firstOccurrence( "🚓", "🚕🚓🚒" ), 1 );

      const lineEnds = [ "\n", "\r\n" ];
      assert.strictEqual( firstOccurrence( lineEnds, "\r" ), -1 );
      assert.strictEqual( firstOccurrence( lineEnds, "unix-\ny" ), 5 );
      assert.strictEqual( firstOccurrence( lineEnds, "ting!\r\n" ), 5 );
    }
  );
});

