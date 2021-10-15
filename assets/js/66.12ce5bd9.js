(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{446:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" venus-gateway")]),s._v(" "),a("p",[s._v("The venus-gateway is used for registering wallets, keeping track of miner-related information, and as a liaison between wallets and other components. It could be also used for proxy requests from chain services (shared modules/components) to independent modules/components.")]),s._v(" "),a("h2",{attrs:{id:"start-venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-venus-gateway"}},[s._v("#")]),s._v(" Start venus-gateway")]),s._v(" "),a("p",[s._v("Download source code.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ipfs-force-community/venus-gateway.git\n")])])]),a("p",[s._v("Compile.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("Start service.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway run --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("autl-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("After succussful start, a "),a("code",[s._v("token")]),s._v(" file will be generated in the working directory, which contains your jwt token for CLI commands.")])]),s._v(" "),a("h2",{attrs:{id:"cli-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[s._v("#")]),s._v(" CLI Commands")]),s._v(" "),a("p",[s._v("Check help information.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway -h\n\nNAME:\n   venus-gateway - venus-gateway "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" proxy incoming wallet and proof\n\nUSAGE:\n   venus-gateway "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nVERSION:\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+gitc2048fb'")]),s._v("\n\nCOMMANDS:\n   run      start venus-gateway daemon\n   miner    miner cmds\n   wallet   wallet cmds\n   help, h  Shows a list of commands or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nGLOBAL OPTIONS:\n   --listen value  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" address and port the worker api will listen on "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --help, -h      show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --version, -v   print the version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"notable-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notable-commands"}},[s._v("#")]),s._v(" Notable commands")]),s._v(" "),a("h4",{attrs:{id:"miner-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miner-related"}},[s._v("#")]),s._v(" miner related")]),s._v(" "),a("p",[s._v("List all miners.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-gateway miner list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\nt01561\nt02608\nt02082\n")])])]),a("p",[s._v("Check miner status.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-gateway miner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MINER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Connections"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Channel"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ddbbd646-f3a2-474b-8457-ea7195cf5765"')]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:36586"')]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-20T17:34:33.767108581+08:00"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectionCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"wallet-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-related"}},[s._v("#")]),s._v(" wallet related")]),s._v(" "),a("p",[s._v("List all wallets.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-gateway wallet list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test1"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testminer"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3wbwannykivspagunexwwky7eiqg4qa25eoqmgolpkzdz3fidocbjeflbyxqqguyypsekyhqbkj33f657ulla"')]),s._v(",\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t1zkh45ooidf5zt3yv5o26uugjn5ao4fttsxfgdaq"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"016c1010-c56a-4849-89d1-e2b28aecc95a"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.5.64:50448"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-19T14:06:50.209609054+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test2"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test2"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3vwbowhnkripgyxdawgwepcwcsqmai5exxetord362wudwr24a3kvgndnpsn6i3md2i23cmjx3rfflvbu7gna"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"57971a25-b760-4744-b6c2-af470ab456a9"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:36598"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-20T17:34:33.809502589+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("Check individual wallet.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus-gateway wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("wallet-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"check-if-wallet-address-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-wallet-address-exists"}},[s._v("#")]),s._v(" Check if wallet address exists")]),s._v(" "),a("p",[s._v("Everytime gateway starts up, it will generate a random string ("),a("code",[s._v("gateway_string")]),s._v("). When a wallet tries to connect to gateway, it will carry a randomly generated string by itself ("),a("code",[s._v("wallet_string")]),s._v("). Gateway will then check each wallet address by calling "),a("code",[s._v("sign")]),s._v(" interface with hash of gateway_string + wallet_string as payload. Through "),a("code",[s._v("MsgMeta.Extra")]),s._v(", "),a("code",[s._v("gateway_string")]),s._v(" will also be transferred to wallet. And finally the result of wallet's "),a("code",[s._v("sign")]),s._v(" will be validatated by gateway.")])])}),[],!1,null,null,null);t.default=e.exports}}]);