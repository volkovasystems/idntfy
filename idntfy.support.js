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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var ntrprt = require("ntrprt");
var transyl = require("transyl");

var ID = (0, _symbol2.default)("id");

var idntfy = function idntfy(source, target) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"source:required": "*",
                                              			"target:required": "*"
                                              		}
                                              	@end-meta-configuration
                                              */

	if (falzy(source) || falzy(target)) {
		return false;
	}

	source = ntrprt(ID, source);
	target = ntrprt(ID, target);

	if (falzy(source) ||
	falzy(target) ||
	(typeof source === "undefined" ? "undefined" : (0, _typeof3.default)(source)) != "symbol" ||
	(typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) != "symbol")
	{
		return false;
	}

	return transyl(source, target);
};

module.exports = idntfy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkbnRmeS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm50cnBydCIsInRyYW5zeWwiLCJJRCIsImlkbnRmeSIsInNvdXJjZSIsInRhcmdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUcsS0FBSyxzQkFBUSxJQUFSLENBQVg7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUJOLE1BQU9PLE1BQVAsQ0FBdkIsRUFBd0M7QUFDdkMsU0FBTyxLQUFQO0FBQ0E7O0FBRURELFVBQVNKLE9BQVFFLEVBQVIsRUFBWUUsTUFBWixDQUFUO0FBQ0FDLFVBQVNMLE9BQVFFLEVBQVIsRUFBWUcsTUFBWixDQUFUOztBQUVBLEtBQUlQLE1BQU9NLE1BQVA7QUFDSE4sT0FBT08sTUFBUCxDQURHO0FBRUgsU0FBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUZkO0FBR0gsU0FBT0MsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUhsQjtBQUlBO0FBQ0MsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBT0osUUFBU0csTUFBVCxFQUFpQkMsTUFBakIsQ0FBUDtBQUNBLENBMUJEOztBQTRCQUMsT0FBT0MsT0FBUCxHQUFpQkosTUFBakIiLCJmaWxlIjoiaWRudGZ5LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiaWRudGZ5L2lkbnRmeS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiaWRudGZ5LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaWRudGZ5LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiaWRudGZ5LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q29tcGFyZSB0cmFjZSBpZGVudGl0eS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIixcblx0XHRcdFwidHJhbnN5bFwiOiBcInRyYW5zeWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgbnRycHJ0ID0gcmVxdWlyZSggXCJudHJwcnRcIiApO1xuY29uc3QgdHJhbnN5bCA9IHJlcXVpcmUoIFwidHJhbnN5bFwiICk7XG5cbmNvbnN0IElEID0gU3ltYm9sKCBcImlkXCIgKTtcblxuY29uc3QgaWRudGZ5ID0gZnVuY3Rpb24gaWRudGZ5KCBzb3VyY2UsIHRhcmdldCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInNvdXJjZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggc291cmNlICkgfHwgZmFsenkoIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c291cmNlID0gbnRycHJ0KCBJRCwgc291cmNlICk7XG5cdHRhcmdldCA9IG50cnBydCggSUQsIHRhcmdldCApO1xuXG5cdGlmKCBmYWx6eSggc291cmNlICkgfHxcblx0XHRmYWx6eSggdGFyZ2V0ICkgfHxcblx0XHR0eXBlb2Ygc291cmNlICE9IFwic3ltYm9sXCIgfHxcblx0XHR0eXBlb2YgdGFyZ2V0ICE9IFwic3ltYm9sXCIgKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyYW5zeWwoIHNvdXJjZSwgdGFyZ2V0ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlkbnRmeTtcbiJdfQ==
//# sourceMappingURL=idntfy.support.js.map
