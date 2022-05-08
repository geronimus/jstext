import { assert } from "chai";
import escape from "../src/escape.js";

describe ( "escape( chars, inText, escapeChar = \"\\\\\" )", () => {

  it(
    "Throws a TypeError when the `chars` argument is not either a " +
      "string or an array of strings.", 
    () => {
      [ undefined, null, true, 1, { msg: "hey!" } ].forEach( badArg => {
        
        assert.throws(
          () => { escape( badArg, "text" ); },
          /Expected: string | Array\[ string \]/
        );
      });

      // Detects when the chars array contains even one non-string:
      assert.throws(
        () => { escape( [ "[", "]", 1, "(", ")" ], "text" ); },
        /Expected: string | Array\[ string \]/
      );

      // But either of these scenarios should be okay:
      [ "\u0022", [ "[", "]", "(", ")" ] ].forEach( goodArg => {

        assert.doesNotThrow(
          () => { escape( goodArg, "text" ); }
        );
      });
    }
  );

  it( "Throws a TypeError when the `inText` argument is not a string.", () => {

    [ undefined, null, true, 1, [ "hey!" ], { msg: "hey!" } ]
      .forEach( nonString => {
      
        assert.throws(
          () => { escape( "\u0022", nonString ); },
          /Expected: string/
        );
      });
  });

  it(
    "Throws a TypeError when the `escapeChar` argument is not a string.",
    () => {
      [ null, true, 1, [ "hey!" ], { msg: "hey!" } ]
        .forEach( nonString => {
        
          assert.throws(
            () => { escape( "\u0022", "text", nonString ); },
            /Expected: string/
          );
        });
    }
  );

  it( "If `chars` is empty, it simply returns `inText`.", () => {

    assert.strictEqual( escape( "", "hey!" ), "hey!" );
    assert.strictEqual( escape( [], "hey!" ), "hey!" );
  });

  it(
    "If any element of `chars` is the empty string, then the element is " +
      "simply ignored.",
    () => {
      assert.strictEqual(
        escape( [ "", "", "", "", "!" ], "hey!" ),
        "hey\\!"
      );
    }
  );

  it(
    "Even if `chars` is empty, instances of the `escapeChar` still get " +
      "escaped.",
    () => {
      assert.strictEqual( escape( "", "\\w" ), "\\\\w" );
    }
  );

  it(
    "If none of the `chars` is found `inText`, then it simply returns `inText`",
    () => {
      assert.strictEqual( escape( "\"", "hey!" ), "hey!" );
      assert.strictEqual(
        escape( [ "\"", "(", ")", "{", "}" ], "hey!" ),
        "hey!"
      );
    }
  );

  it(
    "If `inText` is the empty string, then it returns the empty string.",
    () => {
      assert.strictEqual( escape( [ "!", "(", ")" ], "" ), "" );
    }
  );

  it(
    "By default, it returns a new version of the `inText` string in which " +
      "every character in the `chars` argument is preceded by a backslash.",
    () => {
      assert.strictEqual( escape( "\"", "\"hey!\"" ), "\\\"hey!\\\"" );
      assert.strictEqual(
        escape( [ "\"", "(", ")", "!" ], "( \"hey!\" )" ),
        "\\( \\\"hey\\!\\\" \\)"
      );
    }
  );

  it(
    "You can pass the `escapeChar` argument to change the escape character " +
      "used.",
    () => {
      assert.strictEqual( escape( "!", "hey!", "`" ), "hey`!" );
    }
  );
  
  it(
    "If you pass more than one character to `escapeChar`, all but the first " +
      "character will be ignored.",
    () => {
      assert.strictEqual(
        escape(
          "!",
          "hey!",
          "`I am the very model of a modern major general..."
        ),
        "hey`!"
      );
    }
  );

  it(
    "Passing the empty string to `escapeChar` is silly, but we'll let you do " +
      "it. The result will be `inText` returned exactly as received.",
    () => {
      assert.strictEqual( escape( "!", "hey!", "" ), "hey!" );
    }
  );
});

