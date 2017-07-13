"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "idntfy",
			"path": "idntfy/idntfy.js",
			"file": "idntfy.js",
			"module": "idntfy",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/idntfy.git",
			"test": "idntfy-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Compare trace identity.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"ntrprt": "ntrprt",
			"transyl": "transyl"
		}
	@end-include
*/

const falzy = require( "falzy" );
const ntrprt = require( "ntrprt" );
const transyl = require( "transyl" );

const ID = Symbol( "id" );

const idntfy = function idntfy( source, target ){
	/*;
		@meta-configuration:
			{
				"source:required": "*",
				"target:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( source ) || falzy( target ) ){
		return false;
	}

	source = ntrprt( ID, source );
	target = ntrprt( ID, target );

	if( falzy( source ) ||
		falzy( target ) ||
		typeof source != "symbol" ||
		typeof target != "symbol" )
	{
		return false;
	}

	return transyl( source, target );
};

module.exports = idntfy;
