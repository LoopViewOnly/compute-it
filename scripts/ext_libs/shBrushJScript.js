/**
 * //WARNING !!! TOXICODE MODIFIED : added added colors + keywords
 *
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with repeat ' +
						'range elif def not'
						;

		var r = SyntaxHighlighter.regexLib;

		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
												// OWN
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keywords' },			// keywords
            { regex: new RegExp(/\{/, 'gm'), css: 'brackets' },
            { regex: new RegExp(/\}/, 'gm'), css: 'brackets' },
            { regex: new RegExp(/\d+/, 'gm'), css: 'digits' },

			{ regex: new RegExp(/right\(\)/, 'gm'), css: 'right' },
            { regex: new RegExp(/left\(\)/, 'gm'),  css: 'left' },
            { regex: new RegExp(/up\(\)/, 'gm'),    css: 'up' },
            { regex: new RegExp(/down\(\)/, 'gm'),  css: 'down' },
			{ regex: new RegExp(this.getKeywords("blue")    , 'gm'), css: 'color isBlue' },
			{ regex: new RegExp(this.getKeywords("green")   , 'gm'), css: 'color isGreen' },
			{ regex: new RegExp(this.getKeywords("red")     , 'gm'), css: 'color isRed' },
			{ regex: new RegExp(this.getKeywords("yellow")  , 'gm'), css: 'color isYellow' },
			{ regex: new RegExp(this.getKeywords("orange")  , 'gm'), css: 'color isOrange' },
			{ regex: new RegExp(this.getKeywords("purple")  , 'gm'), css: 'color isPurple' },
			{ regex: new RegExp(this.getKeywords("dark")    , 'gm'), css: 'color isDark' },
			// { regex: new RegExp(this.getKeywords("() { }") , 'gm'), css: 'symbol' }
		];

		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
