
const assert = require( "assert" );
const idntfy = require( "./idntfy.js" );

const ID = Symbol.for( "id" );
let source = { [ ID ]: Symbol( "sample-identity" ) };
let target = { [ ID ]: Symbol( "sample-identity" ) };

assert.equal( idntfy( source, target ), true, "should be equal to true" );

assert.equal( idntfy( { }, { } ), false, "should be equal to false" );

assert.equal( idntfy( ), false, "should be equal to false" );

console.log( "ok" );
