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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkbnRmeS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm50cnBydCIsInRyYW5zeWwiLCJJRCIsImlkbnRmeSIsInNvdXJjZSIsInRhcmdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUcsS0FBSyxzQkFBUSxJQUFSLENBQVg7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUJOLE1BQU9PLE1BQVAsQ0FBdkIsRUFBd0M7QUFDdkMsU0FBTyxLQUFQO0FBQ0E7O0FBRURELFVBQVNKLE9BQVFFLEVBQVIsRUFBWUUsTUFBWixDQUFUO0FBQ0FDLFVBQVNMLE9BQVFFLEVBQVIsRUFBWUcsTUFBWixDQUFUOztBQUVBLEtBQUlQLE1BQU9NLE1BQVA7QUFDSE4sT0FBT08sTUFBUCxDQURHO0FBRUgsU0FBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUZkO0FBR0gsU0FBT0MsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUhsQjtBQUlBO0FBQ0MsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBT0osUUFBU0csTUFBVCxFQUFpQkMsTUFBakIsQ0FBUDtBQUNBLENBMUJEOztBQTRCQUMsT0FBT0MsT0FBUCxHQUFpQkosTUFBakIiLCJmaWxlIjoiaWRudGZ5LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaWRudGZ5XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImlkbnRmeS9pZG50ZnkuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiaWRudGZ5LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiaWRudGZ5XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2lkbnRmeS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiaWRudGZ5LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0Q29tcGFyZSB0cmFjZSBpZGVudGl0eS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIixcclxuXHRcdFx0XCJ0cmFuc3lsXCI6IFwidHJhbnN5bFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBudHJwcnQgPSByZXF1aXJlKCBcIm50cnBydFwiICk7XHJcbmNvbnN0IHRyYW5zeWwgPSByZXF1aXJlKCBcInRyYW5zeWxcIiApO1xyXG5cclxuY29uc3QgSUQgPSBTeW1ib2woIFwiaWRcIiApO1xyXG5cclxuY29uc3QgaWRudGZ5ID0gZnVuY3Rpb24gaWRudGZ5KCBzb3VyY2UsIHRhcmdldCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiKlwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBzb3VyY2UgKSB8fCBmYWx6eSggdGFyZ2V0ICkgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHNvdXJjZSA9IG50cnBydCggSUQsIHNvdXJjZSApO1xyXG5cdHRhcmdldCA9IG50cnBydCggSUQsIHRhcmdldCApO1xyXG5cclxuXHRpZiggZmFsenkoIHNvdXJjZSApIHx8XHJcblx0XHRmYWx6eSggdGFyZ2V0ICkgfHxcclxuXHRcdHR5cGVvZiBzb3VyY2UgIT0gXCJzeW1ib2xcIiB8fFxyXG5cdFx0dHlwZW9mIHRhcmdldCAhPSBcInN5bWJvbFwiIClcclxuXHR7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJhbnN5bCggc291cmNlLCB0YXJnZXQgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaWRudGZ5O1xyXG4iXX0=
//# sourceMappingURL=idntfy.support.js.map
