import { simpleMode as o } from "../../../editor.js";
var e = "from", s = new RegExp("^(\\s*)\\b(" + e + ")\\b", "i"), n = ["run", "cmd", "entrypoint", "shell"], l = new RegExp("^(\\s*)(" + n.join("|") + ")(\\s+\\[)", "i"), t = "expose", x = new RegExp("^(\\s*)(" + t + ")(\\s+)", "i"), g = [
  "arg",
  "from",
  "maintainer",
  "label",
  "env",
  "add",
  "copy",
  "volume",
  "user",
  "workdir",
  "onbuild",
  "stopsignal",
  "healthcheck",
  "shell"
], u = [e, t].concat(n).concat(g), r = "(" + u.join("|") + ")", a = new RegExp("^(\\s*)" + r + "(\\s*)(#.*)?$", "i"), k = new RegExp("^(\\s*)" + r + "(\\s+)", "i");
const m = o({
  start: [
    // Block comment: This is a line starting with a comment
    {
      regex: /^\s*#.*$/,
      sol: !0,
      token: "comment"
    },
    {
      regex: s,
      token: [null, "keyword"],
      sol: !0,
      next: "from"
    },
    // Highlight an instruction without any arguments (for convenience)
    {
      regex: a,
      token: [null, "keyword", null, "error"],
      sol: !0
    },
    {
      regex: l,
      token: [null, "keyword", null],
      sol: !0,
      next: "array"
    },
    {
      regex: x,
      token: [null, "keyword", null],
      sol: !0,
      next: "expose"
    },
    // Highlight an instruction followed by arguments
    {
      regex: k,
      token: [null, "keyword", null],
      sol: !0,
      next: "arguments"
    },
    {
      regex: /./,
      token: null
    }
  ],
  from: [
    {
      regex: /\s*$/,
      token: null,
      next: "start"
    },
    {
      // Line comment without instruction arguments is an error
      regex: /(\s*)(#.*)$/,
      token: [null, "error"],
      next: "start"
    },
    {
      regex: /(\s*\S+\s+)(as)/i,
      token: [null, "keyword"],
      next: "start"
    },
    // Fail safe return to start
    {
      token: null,
      next: "start"
    }
  ],
  single: [
    {
      regex: /(?:[^\\']|\\.)/,
      token: "string"
    },
    {
      regex: /'/,
      token: "string",
      pop: !0
    }
  ],
  double: [
    {
      regex: /(?:[^\\"]|\\.)/,
      token: "string"
    },
    {
      regex: /"/,
      token: "string",
      pop: !0
    }
  ],
  array: [
    {
      regex: /\]/,
      token: null,
      next: "start"
    },
    {
      regex: /"(?:[^\\"]|\\.)*"?/,
      token: "string"
    }
  ],
  expose: [
    {
      regex: /\d+$/,
      token: "number",
      next: "start"
    },
    {
      regex: /[^\d]+$/,
      token: null,
      next: "start"
    },
    {
      regex: /\d+/,
      token: "number"
    },
    {
      regex: /[^\d]+/,
      token: null
    },
    // Fail safe return to start
    {
      token: null,
      next: "start"
    }
  ],
  arguments: [
    {
      regex: /^\s*#.*$/,
      sol: !0,
      token: "comment"
    },
    {
      regex: /"(?:[^\\"]|\\.)*"?$/,
      token: "string",
      next: "start"
    },
    {
      regex: /"/,
      token: "string",
      push: "double"
    },
    {
      regex: /'(?:[^\\']|\\.)*'?$/,
      token: "string",
      next: "start"
    },
    {
      regex: /'/,
      token: "string",
      push: "single"
    },
    {
      regex: /[^#"']+[\\`]$/,
      token: null
    },
    {
      regex: /[^#"']+$/,
      token: null,
      next: "start"
    },
    {
      regex: /[^#"']+/,
      token: null
    },
    // Fail safe return to start
    {
      token: null,
      next: "start"
    }
  ],
  languageData: {
    commentTokens: { line: "#" }
  }
});
export {
  m as dockerFile
};
