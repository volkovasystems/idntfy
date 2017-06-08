
const assert = require( "assert" );
const idntfy = require( "./idntfy.js" );

const ID = Symbol.for( "id" );
let source = { [ ID ]: Symbol( "sample-identity" ) };
let target = { [ ID ]: Symbol( "sample-identity" ) };

assert.equal( idntfy( source, target ), true, "should be true" );

assert.equal( idntfy( { }, { } ), false, "should be false" );

assert.equal( idntfy( ), false, "should be false" );

console.log( "ok" );
