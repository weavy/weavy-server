﻿var G = Object.defineProperty;
var a = (i, e) => G(i, "name", { value: e, configurable: !0 });
var I = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "bgsound", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "var", "video"], j = ["domain", "regexp", "url-prefix", "url"], R = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"], O = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "dynamic-range", "video-dynamic-range"], W = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode", "font-smoothing", "osx-font-smoothing"], N = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"], S = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"], T = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], C = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "conic-gradient", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "high", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "matrix", "matrix3d", "media-play-button", "media-slider", "media-sliderthumb", "media-volume-slider", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "spell-out", "square", "square-button", "standard", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "x-large", "x-small", "xor", "xx-large", "xx-small", "bicubic", "optimizespeed", "grayscale", "row", "row-reverse", "wrap", "wrap-reverse", "column-reverse", "flex-start", "flex-end", "space-between", "space-around", "unset"], E = ["in", "and", "or", "not", "is not", "is a", "is", "isnt", "defined", "if unless"], U = ["for", "if", "else", "unless", "from", "to"], F = ["null", "true", "false", "href", "title", "type", "not-allowed", "readonly", "disabled"], H = ["@font-face", "@keyframes", "@media", "@viewport", "@page", "@host", "@supports", "@block", "@css"], J = I.concat(
  j,
  R,
  O,
  W,
  N,
  T,
  C,
  S,
  E,
  U,
  F,
  H
);
function X(i) {
  return i = i.sort(function(e, r) {
    return r > e;
  }), new RegExp("^((" + i.join(")|(") + "))\\b");
}
a(X, "wordRegexp");
function h(i) {
  for (var e = {}, r = 0; r < i.length; ++r) e[i[r]] = !0;
  return e;
}
a(h, "keySet");
function Q(i) {
  return i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
a(Q, "escapeRegExp");
var ee = h(I), _ = /^(a|b|i|s|col|em)$/i, ie = h(W), re = h(N), ne = h(C), oe = h(T), te = h(j), ae = X(j), le = h(O), ce = h(R), de = h(S), se = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/, ue = X(E), fe = h(U), Y = new RegExp(/^\-(moz|ms|o|webkit)-/i), pe = h(F), $ = "", d = {}, b, k, K, t;
function he(i, e) {
  if ($ = i.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/), e.context.line.firstWord = $ ? $[0].replace(/^\s*/, "") : "", e.context.line.indent = i.indentation(), b = i.peek(), i.match("//"))
    return i.skipToEnd(), ["comment", "comment"];
  if (i.match("/*"))
    return e.tokenize = L, L(i, e);
  if (b == '"' || b == "'")
    return i.next(), e.tokenize = Z(b), e.tokenize(i, e);
  if (b == "@")
    return i.next(), i.eatWhile(/[\w\\-]/), ["def", i.current()];
  if (b == "#") {
    if (i.next(), i.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i))
      return ["atom", "atom"];
    if (i.match(/^[a-z][\w-]*/i))
      return ["builtin", "hash"];
  }
  return i.match(Y) ? ["meta", "vendor-prefixes"] : i.match(/^-?[0-9]?\.?[0-9]/) ? (i.eatWhile(/[a-z%]/i), ["number", "unit"]) : b == "!" ? (i.next(), [i.match(/^(important|optional)/i) ? "keyword" : "operator", "important"]) : b == "." && i.match(/^\.[a-z][\w-]*/i) ? ["qualifier", "qualifier"] : i.match(ae) ? (i.peek() == "(" && (e.tokenize = ge), ["property", "word"]) : i.match(/^[a-z][\w-]*\(/i) ? (i.backUp(1), ["keyword", "mixin"]) : i.match(/^(\+|-)[a-z][\w-]*\(/i) ? (i.backUp(1), ["keyword", "block-mixin"]) : i.string.match(/^\s*&/) && i.match(/^[-_]+[a-z][\w-]*/) ? ["qualifier", "qualifier"] : i.match(/^(\/|&)(-|_|:|\.|#|[a-z])/) ? (i.backUp(1), ["variableName.special", "reference"]) : i.match(/^&{1}\s*$/) ? ["variableName.special", "reference"] : i.match(ue) ? ["operator", "operator"] : i.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i) ? i.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) && !m(i.current()) ? (i.match("."), ["variable", "variable-name"]) : ["variable", "word"] : i.match(se) ? ["operator", i.current()] : /[:;,{}\[\]\(\)]/.test(b) ? (i.next(), [null, b]) : (i.next(), [null, null]);
}
a(he, "tokenBase");
function L(i, e) {
  for (var r = !1, o; (o = i.next()) != null; ) {
    if (r && o == "/") {
      e.tokenize = null;
      break;
    }
    r = o == "*";
  }
  return ["comment", "comment"];
}
a(L, "tokenCComment");
function Z(i) {
  return function(e, r) {
    for (var o = !1, c; (c = e.next()) != null; ) {
      if (c == i && !o) {
        i == ")" && e.backUp(1);
        break;
      }
      o = !o && c == "\\";
    }
    return (c == i || !o && i != ")") && (r.tokenize = null), ["string", "string"];
  };
}
a(Z, "tokenString");
function ge(i, e) {
  return i.next(), i.match(/\s*[\"\')]/, !1) ? e.tokenize = null : e.tokenize = Z(")"), [null, "("];
}
a(ge, "tokenParenthesized");
function V(i, e, r, o) {
  this.type = i, this.indent = e, this.prev = r, this.line = o || { firstWord: "", indent: 0 };
}
a(V, "Context");
function n(i, e, r, o) {
  return o = o >= 0 ? o : e.indentUnit, i.context = new V(r, e.indentation() + o, i.context), r;
}
a(n, "pushContext");
function x(i, e, r) {
  var o = i.context.indent - e.indentUnit;
  return r = r || !1, i.context = i.context.prev, r && (i.context.indent = o), i.context.type;
}
a(x, "popContext");
function be(i, e, r) {
  return d[r.context.type](i, e, r);
}
a(be, "pass");
function P(i, e, r, o) {
  for (var c = 1; c > 0; c--)
    r.context = r.context.prev;
  return be(i, e, r);
}
a(P, "popAndPass");
function m(i) {
  return i.toLowerCase() in ee;
}
a(m, "wordIsTag");
function y(i) {
  return i = i.toLowerCase(), i in ie || i in de;
}
a(y, "wordIsProperty");
function v(i) {
  return i.toLowerCase() in fe;
}
a(v, "wordIsBlock");
function B(i) {
  return i.toLowerCase().match(Y);
}
a(B, "wordIsVendorPrefix");
function z(i) {
  var e = i.toLowerCase(), r = "variable";
  return m(i) ? r = "tag" : v(i) ? r = "block-keyword" : y(i) ? r = "property" : e in ne || e in pe ? r = "atom" : e == "return" || e in oe ? r = "keyword" : i.match(/^[A-Z]/) && (r = "string"), r;
}
a(z, "wordAsValue");
function D(i, e) {
  return l(e) && (i == "{" || i == "]" || i == "hash" || i == "qualifier") || i == "block-mixin";
}
a(D, "typeIsBlock");
function M(i, e) {
  return i == "{" && e.match(/^\s*\$?[\w-]+/i, !1);
}
a(M, "typeIsInterpolation");
function A(i, e) {
  return i == ":" && e.match(/^[a-z-]+/, !1);
}
a(A, "typeIsPseudo");
function w(i) {
  return i.sol() || i.string.match(new RegExp("^\\s*" + Q(i.current())));
}
a(w, "startOfLine");
function l(i) {
  return i.eol() || i.match(/^\s*$/, !1);
}
a(l, "endOfLine");
function f(i) {
  var e = /^\s*[-_]*[a-z0-9]+[\w-]*/i, r = typeof i == "string" ? i.match(e) : i.string.match(e);
  return r ? r[0].replace(/^\s*/, "") : "";
}
a(f, "firstWordOfLine");
d.block = function(i, e, r) {
  if (i == "comment" && w(e) || i == "," && l(e) || i == "mixin")
    return n(r, e, "block", 0);
  if (M(i, e))
    return n(r, e, "interpolation");
  if (l(e) && i == "]" && !/^\s*(\.|#|:|\[|\*|&)/.test(e.string) && !m(f(e)))
    return n(r, e, "block", 0);
  if (D(i, e))
    return n(r, e, "block");
  if (i == "}" && l(e))
    return n(r, e, "block", 0);
  if (i == "variable-name")
    return e.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || v(f(e)) ? n(r, e, "variableName") : n(r, e, "variableName", 0);
  if (i == "=")
    return !l(e) && !v(f(e)) ? n(r, e, "block", 0) : n(r, e, "block");
  if (i == "*" && (l(e) || e.match(/\s*(,|\.|#|\[|:|{)/, !1)))
    return t = "tag", n(r, e, "block");
  if (A(i, e))
    return n(r, e, "pseudo");
  if (/@(font-face|media|supports|(-moz-)?document)/.test(i))
    return n(r, e, l(e) ? "block" : "atBlock");
  if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(i))
    return n(r, e, "keyframes");
  if (/@extends?/.test(i))
    return n(r, e, "extend", 0);
  if (i && i.charAt(0) == "@")
    return e.indentation() > 0 && y(e.current().slice(1)) ? (t = "variable", "block") : /(@import|@require|@charset)/.test(i) ? n(r, e, "block", 0) : n(r, e, "block");
  if (i == "reference" && l(e))
    return n(r, e, "block");
  if (i == "(")
    return n(r, e, "parens");
  if (i == "vendor-prefixes")
    return n(r, e, "vendorPrefixes");
  if (i == "word") {
    var o = e.current();
    if (t = z(o), t == "property")
      return w(e) ? n(r, e, "block", 0) : (t = "atom", "block");
    if (t == "tag") {
      if (/embed|menu|pre|progress|sub|table/.test(o) && y(f(e)) || e.string.match(new RegExp("\\[\\s*" + o + "|" + o + "\\s*\\]")))
        return t = "atom", "block";
      if (_.test(o) && (w(e) && e.string.match(/=/) || !w(e) && !e.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !m(f(e))))
        return t = "variable", v(f(e)) ? "block" : n(r, e, "block", 0);
      if (l(e)) return n(r, e, "block");
    }
    if (t == "block-keyword")
      return t = "keyword", e.current(/(if|unless)/) && !w(e) ? "block" : n(r, e, "block");
    if (o == "return") return n(r, e, "block", 0);
    if (t == "variable" && e.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/))
      return n(r, e, "block");
  }
  return r.context.type;
};
d.parens = function(i, e, r) {
  if (i == "(") return n(r, e, "parens");
  if (i == ")")
    return r.context.prev.type == "parens" ? x(r, e) : e.string.match(/^[a-z][\w-]*\(/i) && l(e) || v(f(e)) || /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(f(e)) || !e.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && m(f(e)) ? n(r, e, "block") : e.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) || e.string.match(/^\s*(\(|\)|[0-9])/) || e.string.match(/^\s+[a-z][\w-]*\(/i) || e.string.match(/^\s+[\$-]?[a-z]/i) ? n(r, e, "block", 0) : l(e) ? n(r, e, "block") : n(r, e, "block", 0);
  if (i && i.charAt(0) == "@" && y(e.current().slice(1)) && (t = "variable"), i == "word") {
    var o = e.current();
    t = z(o), t == "tag" && _.test(o) && (t = "variable"), (t == "property" || o == "to") && (t = "atom");
  }
  return i == "variable-name" ? n(r, e, "variableName") : A(i, e) ? n(r, e, "pseudo") : r.context.type;
};
d.vendorPrefixes = function(i, e, r) {
  return i == "word" ? (t = "property", n(r, e, "block", 0)) : x(r, e);
};
d.pseudo = function(i, e, r) {
  return y(f(e.string)) ? P(i, e, r) : (e.match(/^[a-z-]+/), t = "variableName.special", l(e) ? n(r, e, "block") : x(r, e));
};
d.atBlock = function(i, e, r) {
  if (i == "(") return n(r, e, "atBlock_parens");
  if (D(i, e))
    return n(r, e, "block");
  if (M(i, e))
    return n(r, e, "interpolation");
  if (i == "word") {
    var o = e.current().toLowerCase();
    if (/^(only|not|and|or)$/.test(o) ? t = "keyword" : te.hasOwnProperty(o) ? t = "tag" : ce.hasOwnProperty(o) ? t = "attribute" : le.hasOwnProperty(o) ? t = "property" : re.hasOwnProperty(o) ? t = "string.special" : t = z(e.current()), t == "tag" && l(e))
      return n(r, e, "block");
  }
  return i == "operator" && /^(not|and|or)$/.test(e.current()) && (t = "keyword"), r.context.type;
};
d.atBlock_parens = function(i, e, r) {
  if (i == "{" || i == "}") return r.context.type;
  if (i == ")")
    return l(e) ? n(r, e, "block") : n(r, e, "atBlock");
  if (i == "word") {
    var o = e.current().toLowerCase();
    return t = z(o), /^(max|min)/.test(o) && (t = "property"), t == "tag" && (_.test(o) ? t = "variable" : t = "atom"), r.context.type;
  }
  return d.atBlock(i, e, r);
};
d.keyframes = function(i, e, r) {
  return e.indentation() == "0" && (i == "}" && w(e) || i == "]" || i == "hash" || i == "qualifier" || m(e.current())) ? P(i, e, r) : i == "{" ? n(r, e, "keyframes") : i == "}" ? w(e) ? x(r, e, !0) : n(r, e, "keyframes") : i == "unit" && /^[0-9]+\%$/.test(e.current()) ? n(r, e, "keyframes") : i == "word" && (t = z(e.current()), t == "block-keyword") ? (t = "keyword", n(r, e, "keyframes")) : /@(font-face|media|supports|(-moz-)?document)/.test(i) ? n(r, e, l(e) ? "block" : "atBlock") : i == "mixin" ? n(r, e, "block", 0) : r.context.type;
};
d.interpolation = function(i, e, r) {
  return i == "{" && x(r, e) && n(r, e, "block"), i == "}" ? e.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) || e.string.match(/^\s*[a-z]/i) && m(f(e)) ? n(r, e, "block") : !e.string.match(/^(\{|\s*\&)/) || e.match(/\s*[\w-]/, !1) ? n(r, e, "block", 0) : n(r, e, "block") : i == "variable-name" ? n(r, e, "variableName", 0) : (i == "word" && (t = z(e.current()), t == "tag" && (t = "atom")), r.context.type);
};
d.extend = function(i, e, r) {
  return i == "[" || i == "=" ? "extend" : i == "]" ? x(r, e) : i == "word" ? (t = z(e.current()), "extend") : x(r, e);
};
d.variableName = function(i, e, r) {
  return i == "string" || i == "[" || i == "]" || e.current().match(/^(\.|\$)/) ? (e.current().match(/^\.[\w-]+/i) && (t = "variable"), "variableName") : P(i, e, r);
};
const ke = {
  name: "stylus",
  startState: /* @__PURE__ */ a(function() {
    return {
      tokenize: null,
      state: "block",
      context: new V("block", 0, null)
    };
  }, "startState"),
  token: /* @__PURE__ */ a(function(i, e) {
    return !e.tokenize && i.eatSpace() ? null : (k = (e.tokenize || he)(i, e), k && typeof k == "object" && (K = k[1], k = k[0]), t = k, e.state = d[e.state](K, i, e), t);
  }, "token"),
  indent: /* @__PURE__ */ a(function(i, e, r) {
    var o = i.context, c = e && e.charAt(0), p = o.indent, q = f(e), g = r.lineIndent(r.pos), s = i.context.prev ? i.context.prev.line.firstWord : "", u = i.context.prev ? i.context.prev.line.indent : g;
    return o.prev && (c == "}" && (o.type == "block" || o.type == "atBlock" || o.type == "keyframes") || c == ")" && (o.type == "parens" || o.type == "atBlock_parens") || c == "{" && o.type == "at") ? p = o.indent - r.unit : /(\})/.test(c) || (/@|\$|\d/.test(c) || /^\{/.test(e) || /^\s*\/(\/|\*)/.test(e) || /^\s*\/\*/.test(s) || /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(e) || /^(\+|-)?[a-z][\w-]*\(/i.test(e) || /^return/.test(e) || v(q) ? p = g : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(c) || m(q) ? /\,\s*$/.test(s) ? p = u : !i.sol() && (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(s) || m(s)) ? p = g <= u ? u : u + r.unit : p = g : !/,\s*$/.test(e) && (B(q) || y(q)) && (v(s) ? p = g <= u ? u : u + r.unit : /^\{/.test(s) ? p = g <= u ? g : u + r.unit : B(s) || y(s) ? p = g >= u ? u : g : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(s) || /=\s*$/.test(s) || m(s) || /^\$[\w-\.\[\]\'\"]/.test(s) ? p = u + r.unit : p = g)), p;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*\}$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    autocomplete: J
  }
};
export {
  ke as stylus
};
