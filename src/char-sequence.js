import TypeErr from "@geronimus/type-err";

function firstOccurrence( substrings, text ) {

  const defaultResult = -1;
  let substringArray = undefined;

  // Validate that each substrings argument is a string:
  if ( typeof substrings === "string" )
    substringArray = [ substrings ];
  else if ( Array.isArray( substrings ) ) {

    for ( let i = 0; i < substrings.length; i += 1 ) {
      if ( typeof substrings[ i ] !== "string" )
        throw new TypeErr( `substrings[ ${ i } ]`, "string", substrings[ i ] );
    }
    substringArray = substrings;

  } else
    throw new TypeErr( "substrings", "string | Array[ string ]", substrings );

  // Validate that the text argument is a string:
  if ( typeof text !== "string" )
    throw new TypeErr( "text", "string", text );

  // Remove any empty strings from the list of substrings to check.
  const substringsToCheck = substringArray
    .filter( sub => sub !== "" );

  // If either parameter is empty, return the default result.
  if ( substringsToCheck.length < 1 || text === "" )
    return defaultResult;

  return recurse( substringsToCheck, text );

  function recurse( substrings, text, index = 0 ) {

    if ( text === "" )
      return defaultResult;
    else {
      for ( const sub in substrings ) {

        if ( text.startsWith( substrings[ sub ] ) )
          return index;
      }
      return recurse( substrings, tail( text ), index + 1 );
    }
  }
}

function head( text ) {

  validateTextVariable( text, "text" );

  const textArray = [ ...text ];

  if ( textArray.length > 0 )
    return textArray[ 0 ];
  else
    return "";
}

function tail( text ) {

  validateTextVariable( text, "text" );

  const textArray = [ ...text ];

  if ( textArray.length > 1 )
    return textArray.slice( 1 ).join( "" );
  else
    return "";
}

function validateTextVariable( varValue, varName ) {

  if ( typeof varValue !== "string" ) {

    if ( typeof varName === "string" )
      throw new TypeErr( varName, "string", varValue );
    else
      throw new TypeErr( "undefined", "string", varValue );
  }
}

export { firstOccurrence, head, tail };

