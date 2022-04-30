import TypeErr from "@geronimus/type-err";

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

export { head, tail };

