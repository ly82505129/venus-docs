(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{467:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" Venus Gateway")]),s._v(" "),a("p",[s._v("venus-gateway 类似于一个注册中心，用于注册钱包相关信息，也是其它组件和钱包交流的中间桥梁")]),s._v(" "),a("h2",{attrs:{id:"快速启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[s._v("#")]),s._v(" 快速启动")]),s._v(" "),a("h3",{attrs:{id:"下载代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载代码"}},[s._v("#")]),s._v(" 下载代码")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ipfs-force-community/venus-gateway.git\n")])])]),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("h3",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway run --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("autl-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("启动成功会在当前目录生成 "),a("code",[s._v("token")]),s._v(" 文件，里面存的是 jwt token，给命令行使用")])]),s._v(" "),a("h2",{attrs:{id:"cli-操作指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-操作指南"}},[s._v("#")]),s._v(" CLI 操作指南")]),s._v(" "),a("h3",{attrs:{id:"查看帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助"}},[s._v("#")]),s._v(" 查看帮助")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway -h\n\nNAME:\n   venus-gateway - venus-gateway "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" proxy incoming wallet and proof\n\nUSAGE:\n   venus-gateway "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nVERSION:\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+gitc2048fb'")]),s._v("\n\nCOMMANDS:\n   run      start venus-gateway daemon\n   miner    miner cmds\n   wallet   wallet cmds\n   help, h  Shows a list of commands or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nGLOBAL OPTIONS:\n   --listen value  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" address and port the worker api will listen on "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --help, -h      show "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --version, -v   print the version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"venus-gateway-基础操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway-基础操作"}},[s._v("#")]),s._v(" venus gateway 基础操作")]),s._v(" "),a("h4",{attrs:{id:"miner相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miner相关"}},[s._v("#")]),s._v(" miner相关")]),s._v(" "),a("ol",[a("li",[s._v("列出 miner")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway miner list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nt01561\nt02608\nt02082\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看单个miner状态")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway miner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("miner-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Connections"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Channel"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ddbbd646-f3a2-474b-8457-ea7195cf5765"')]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:36586"')]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-20T17:34:33.767108581+08:00"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectionCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"钱包相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钱包相关"}},[s._v("#")]),s._v(" 钱包相关")]),s._v(" "),a("ol",[a("li",[s._v("列出钱包")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway wallet list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test1"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testminer"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3wbwannykivspagunexwwky7eiqg4qa25eoqmgolpkzdz3fidocbjeflbyxqqguyypsekyhqbkj33f657ulla"')]),s._v(",\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t1zkh45ooidf5zt3yv5o26uugjn5ao4fttsxfgdaq"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"016c1010-c56a-4849-89d1-e2b28aecc95a"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.5.64:50448"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-19T14:06:50.209609054+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test2"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wallet_test2"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3vwbowhnkripgyxdawgwepcwcsqmai5exxetord362wudwr24a3kvgndnpsn6i3md2i23cmjx3rfflvbu7gna"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"57971a25-b760-4744-b6c2-af470ab456a9"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:36598"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-20T17:34:33.809502589+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看单个钱包")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus-gateway wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("wallet-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"验证钱包地址是否真实存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证钱包地址是否真实存在"}},[s._v("#")]),s._v(" 验证钱包地址是否真实存在")]),s._v(" "),a("ol",[a("li",[s._v("gateway 每次启动会生成一个随机的字符串(gateway_string)")]),s._v(" "),a("li",[s._v("钱包注册时携带一个随机字符串(wallet_string)给到 gateway")]),s._v(" "),a("li",[s._v("gateway 逐个验证钱包注册的地址：gateway 会调用"),a("code",[s._v("sign")]),s._v("接口，签名的数据是 hash(gateway_string+wallet_string)后的新的字符串，并通过 "),a("code",[s._v("MsgMeta.Extra")]),s._v("\n把 "),a("code",[s._v("gateway_string")]),s._v(" 携带给钱包，最后gateway验证钱包签名后的结果")])])])}),[],!1,null,null,null);t.default=e.exports}}]);