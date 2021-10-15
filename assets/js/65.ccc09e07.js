(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{445:function(s,t,a){"use strict";a.r(t);var e=a(46),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[s._v("#")]),s._v(" venus-auth")]),s._v(" "),a("p",[s._v("venus-auth is the unified authorization service of venus chain services (venus shared modules/components).")]),s._v(" "),a("ul",[a("li",[s._v("Permission validation")]),s._v(" "),a("li",[s._v("Trace collection")]),s._v(" "),a("li",[s._v("RESTful API")]),s._v(" "),a("li",[s._v("Manage users")]),s._v(" "),a("li",[s._v("Request rate limit")])]),s._v(" "),a("h2",{attrs:{id:"start-venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-venus-auth"}},[s._v("#")]),s._v(" Start venus-auth")]),s._v(" "),a("p",[s._v("Download source code.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/filecoin-project/venus-auth.git\n")])])]),a("p",[s._v("Compile.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("Start daemon.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth run\n")])])]),a("h2",{attrs:{id:"configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[s._v("#")]),s._v(" Configurations")]),s._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service Ports")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8989"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ReadTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("WriteTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IdleTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Supports: badger (default), mysql")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"badger"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# following params only applies to MySQL")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("DSN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rennbon:111111@(127.0.0.1:3306)/auth_server?parseTime=true&loc=Local&charset=utf8mb4&collation=utf8mb4_unicode_ci&readTimeout=10s&writeTimeout=10s"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# conns 1500 concurrent")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("maxOpenConns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("maxIdleConns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("maxLifeTime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"120s"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("maxIdleTime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30s"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# trace, debug, info, warning, error, fatal, panic")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default log level")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("logLevel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" trace\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# db type, 1 -> influxDB")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# db hook switch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("hookSwitch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable trace or not")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JaegerTracingEnabled")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# collection rate")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ProbabilitySampler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JaegerEndpoint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:6831"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ServerName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"venus-auth"')]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Default config file path is "),a("code",[s._v("~/.venus-auth/config.tml")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"cli-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[s._v("#")]),s._v(" CLI commands")]),s._v(" "),a("p",[s._v("Check help informations.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-auth -h\n\nNAME:\n   venus-auth - A new cli application\n\nUSAGE:\n   venus-auth "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nVERSION:\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+b502a60'")]),s._v("\n\nCOMMANDS:\n   run      run venus-auth daemon\n   token    token "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   user     user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   help, h  Shows a list of commands or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nGLOBAL OPTIONS:\n   --config value, -c value  config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" path\n   --help, -h                show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --version, -v             print the version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"notable-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notable-commands"}},[s._v("#")]),s._v(" Notable commands")]),s._v(" "),a("h4",{attrs:{id:"token-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-related"}},[s._v("#")]),s._v(" token related")]),s._v(" "),a("p",[s._v("Generate tokens.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth token gen --perm admin testminer\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\ngenerate token success: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n")])])]),a("p",[s._v("List all tokens")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show help")]),s._v("\n$ ./venus-auth token list -h\nNAME:\n   venus-auth token list - list token info\n\nUSAGE:\n   venus-auth token list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOPTIONS:\n   --skip value   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --limit value  max value:100 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --help, -h     show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ ./venus-auth token list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nnum    name             perm    createTime              token\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      testminer1       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-05-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33:24     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6InJlYWQiLCJleHQiOiIifQ.7BRN8IXzK9Gpe35OPgCelTC79UuirgM23mO7fHxKr2Q\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      testminer2       sign    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-05-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33:15     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6InNpZ24iLCJleHQiOiIifQ.D_IFz2qZjFRkLJEzmv4HkZ3rZxukYoYZXEjlBKZmGOA\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      testminer3       admin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-07-21 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":46:29     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("      testminer4       admin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-05-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33:19     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.oakIfSg1Iiv1T2F1BtH1bsb_1GeXWuirdPSjvE5wQLs\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("      testminer5       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-05-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33:29     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6IndyaXRlIiwiZXh0IjoiIn0.yVC2lZlmBQAxThTt0pLXH9cZgUZuuM6Us19aUw4DWNQ\n")])])]),a("p",[s._v("Remove token.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth token "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nremove token success: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n")])])]),a("h4",{attrs:{id:"user-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-related"}},[s._v("#")]),s._v(" user related")]),s._v(" "),a("p",[s._v("Add user.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --name testminer2 --miner f01569\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user success: f29d524a-1589-4784-b934-5b3432290f79\n")])])]),a("p",[s._v("Query user.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user get testminer2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nname: testminer2\nminer: f01569\nsourceType: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   // miner:1\nstate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         // "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment:\ncreateTime: Wed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":56:50 CST\nupdateTime: Wed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":56:50 CST\n")])])]),a("p",[s._v("List users.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show help")]),s._v("\n$ ./venus-auth user list -h\nNAME:\n   venus-auth user list - list "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v("\n\nUSAGE:\n   venus-auth user list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOPTIONS:\n   --skip value        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --limit value       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --state value       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --sourceType value  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --help, -h          show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ ./venus-auth user list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nnumber: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nname: testminer\nminer: f01561\nsourceType: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   // miner:1\nstate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         // "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ncreateTime: Mon, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":41:55 CST\nupdateTime: Mon, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":41:55 CST\n\nnumber: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nname: li_sealer\nminer: f02256\nsourceType: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   // miner:1\nstate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         // "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment: li\ncreateTime: Tue, 01 Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":35:35 CST\nupdateTime: Tue, 01 Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":35:35 CST\n")])])]),a("p",[s._v("Update user.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show help")]),s._v("\n$ ./venus-auth user udpate -h\nNAME:\n   venus-auth user update - update user\n\nUSAGE:\n   venus-auth user update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOPTIONS:\n   --name value\n   --miner value\n   --comment value\n   --sourceType value  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --state value       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --help, -h          show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ ./venus-auth user update --name testminer2 --miner f01570\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nupdate user success\n")])])]),a("p",[s._v("Check if miner exists.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user has f01570\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),a("p",[s._v("Activate user.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-auth user active testminer2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nactive user success\n")])])]),a("h4",{attrs:{id:"user-request-rate-limit-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-request-rate-limit-related"}},[s._v("#")]),s._v(" User request rate limit related")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user rate-limit -h\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nNAME:\n   venus-auth user rate-limit - A new cli application\n\nUSAGE:\n   venus-auth user rate-limit "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCOMMANDS:\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user request rate limit\n   update   update user request rate limit\n   get      get user request rate limit\n   del      delete user request rate limit\n   help, h  Shows a list of commands or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nOPTIONS:\n   --help, -h  show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Add rate limit.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show help")]),s._v("\nAME:\n   venus-auth user rate-limit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user request rate limit\n\nUSAGE:\n   venus-auth user rate-limit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" user rate-limit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("limitAmount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2h, 1h:20m, 2m10s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nOPTIONS:\n   --id value  rate limit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" to update\n   --help, -h  show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ ./venus-auth user rate-limit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" testminer2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 1m\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nupsert user rate limit success: dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])]),a("p",[s._v("Update rate limit.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user rate-limit update testminer2 dee7e326-3b8b-4e38-9de7-1bee9bdffa9d "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" 1m\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nupsert user rate limit success: dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])]),a("p",[s._v("Query rate limit.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user rate-limit get testminer2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nuser:testminer2, limit id:dee7e326-3b8b-4e38-9de7-1bee9bdffa9d, request limit amount:100, duration:0.02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Remove rate limit.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-auth user rate-limit del testminer2 dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\ndelete rate limit success, dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);