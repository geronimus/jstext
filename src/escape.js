import TypeErr from "@geronimus/type-err";
import { head, tail } from "./char-sequence.js";

function escape( chars, inText, escapeChar = "\\" ) {

  if ( typeof chars !== "string" && !isStringArray( chars ) )
    throw new TypeErr( "chars", "string | Array [ string ]", chars );

  if ( typeof inText !== "string" )
    throw new TypeErr( "inText", "string", inText );

  if ( typeof escapeChar !== "string" )
    throw new TypeErr( "escapeChar", "string", escapeChar );

  const cleanEscapeChar = head( escapeChar );
  // Notice that the cleanEscapeChar gets added to the list of charsToEscape:
  const escapeSet = buildEscapeSet( chars, cleanEscapeChar );

  return buildResultChars( inText, escapeSet ).join( "" );

  function buildEscapeSet( chars, escapeChar ) {
  
    let charsIn = undefined;

    if ( typeof chars === "string" )
      charsIn = [ chars, escapeChar ];
    // In this case, `chars` must be an array.
    else
      charsIn = chars.concat( escapeChar );

    return new Set(
      charsIn
        // If we've received more than one character, discard the rest.
        .map( elem => head( elem ) )
        // Empty strings are irrelevant. Discard them.
        .filter( elem => elem !== "" )
    );
  }

  function buildResultChars( inText, escapeSet, result = [] ) {

    if ( inText.length < 1 || escapeSet.size < 1 )
      return result;
    else {
      const headChar = head( inText );
      let appendToResult = undefined;

      if ( escapeSet.has( headChar ) )
        appendToResult = [ cleanEscapeChar, headChar ];
      else
        appendToResult =[ headChar ];

      return buildResultChars(
        tail( inText ),
        escapeSet,
        result.concat( appendToResult )
      );
    }
  }

  function isStringArray( obj ) {
    
    if ( !Array.isArray( obj ) )
      return false;

    for ( const elem of obj ) {

      if ( typeof elem !== "string" )
        return false;
    }

    return true;
  }
}

export default escape;

