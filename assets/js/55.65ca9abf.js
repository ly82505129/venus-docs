(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{412:function(s,a,e){"use strict";e.r(a);var t=e(17),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"如何使用-venus-messager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-venus-messager"}},[s._v("#")]),s._v(" 如何使用 Venus Messager")]),s._v(" "),e("p",[s._v("messager是用于管理本地消息的组件，目的是保存地址消息，管理消息状态以及控制推送消息的频率。")]),s._v(" "),e("p",[s._v("[目录]")]),s._v(" "),e("h2",{attrs:{id:"从这开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从这开始"}},[s._v("#")]),s._v(" 从这开始")]),s._v(" "),e("h3",{attrs:{id:"将此git仓库clone到您的机器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将此git仓库clone到您的机器"}},[s._v("#")]),s._v(" 将此git仓库Clone到您的机器")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone git@github.com:ipfs-force-community/venus-messager.git\n")])])]),e("h3",{attrs:{id:"安装依赖项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项"}},[s._v("#")]),s._v(" 安装依赖项")]),s._v(" "),e("ol",[e("li",[s._v("首先, 加载所有Git子模块。")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git submodule update --init --recursive\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("初始化构建依赖关系。")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("make deps\n")])])]),e("h3",{attrs:{id:"构建并运行测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建并运行测试"}},[s._v("#")]),s._v(" 构建并运行测试")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 首先，构建二进制文件\nmake\n\n# 然后，运行并测试\nmake test\n")])])]),e("h3",{attrs:{id:"启动messager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动messager"}},[s._v("#")]),s._v(" 启动messager")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# --config | -c        specify config file (default: "./messager.toml")\n# --auth-url           url for auth server (default: "http://127.0.0.1:8989")\n# --node-url           url for connection lotus/venus\n# --node-token         token auth for lotus/venus\n# --db-type            which db to use. sqlite/mysql (default: "sqlite")\n# --sqlite-path        sqlite db path (default: "./message.db")\n# --mysql-dsn          mysql connection string\n\n# use sqlite db\n./venus-messager run --config <config path> --auth-url <auth url> --node-url <node url> --node-token <node token> --db-type sqlite --sqlite-path <sqlite path>\n# use mysql db\n./venus-messager run --config <config path> --auth-url <auth url> --node-url <node url> --node-token <node token> --db-type mysql --mysql-dsn <mysql dsn>\n')])])]),e("h2",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),e("h3",{attrs:{id:"message命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message命令"}},[s._v("#")]),s._v(" Message命令")]),s._v(" "),e("ol",[e("li",[s._v("搜索message")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg search --id=<message id>\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("message列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg list\n# list messages with the same address\n./venus-messager msg list --from <address>\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("手动更新一个已fill的message状态")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg update_filled_msg --id=<message id>\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("手动更新所有已fill的message状态")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg update_all_filled_msg\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("等待消息MSG id的结果")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg wait <message id>\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("通过ID重新发布message")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg republish <message id>\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[s._v("替换message")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg replace --gas-feecap=[gas-feecap] --gas-premium=[gas-premium] --gas-limit=[gas-limit] --auto=[auto] --max-fee=[max-fee] <message-id>\n# or\n./venus-messager msg replace --gas-feecap=[gas-feecap] --gas-premium=[gas-premium] --gas-limit=[gas-limit] --auto=[auto] --max-fee=[max-fee] <from> <nonce>\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[s._v("列出失败的messages，可能是消息签名失败或gas估算失败")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg list-fail\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[s._v("列出一段时间未链接的message")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg list-blocked\n")])])]),e("ol",{attrs:{start:"10"}},[e("li",[s._v("手动标记错误的messages")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager msg mark-bad <message id>\n")])])]),e("h3",{attrs:{id:"地址命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地址命令"}},[s._v("#")]),s._v(" 地址命令")]),s._v(" "),e("ol",[e("li",[s._v("搜索地址")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address search <address>\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("地址清单")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address list\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("更新地址随机数")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address update_nonce --nonce=5 <address>\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("禁止地址")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address forbidden <address>\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("激活冻结的地址")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address active <address>\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("设置地址选择消息的数量")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager address set_sel_msg_num --num=5 <address>\n")])])]),e("h3",{attrs:{id:"签名命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签名命令"}},[s._v("#")]),s._v(" 签名命令")]),s._v(" "),e("ol",[e("li",[s._v("通过名称搜索钱包")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager wallet search <wallet-name>\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("添加钱包")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager wallet add --name=<wallet-name> --url=<wallet-url> --token=<wallet-token>\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("钱包列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager wallet list\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("远程钱包地址列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager wallet list-addr --uuid=<wallet-id>\n# or\n./venus-messager wallet list-addr --name=<wallet-name>\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("通过名称删除钱包")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager wallet del <name>\n")])])]),e("h3",{attrs:{id:"共享参数的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享参数的命令"}},[s._v("#")]),s._v(" 共享参数的命令")]),s._v(" "),e("ol",[e("li",[s._v("获取共享的参数")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager share-params get\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("设置共享的参数")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# expireEpoch is the expiration height of the message, 0 means it will not expire\n# selMsgNum is the maximum number of messages pushed to mpool by a single address at a time\n# scanInterval is the interval to scan the remote wallet\n# maxEstFailNumOfMsg is the number of failures allowed to estimate gas consumption\n\n./venus-messager share-params set "{\\"expireEpoch\\": 0, \\"gasOverEstimation\\": 1.25, \\"maxFee\\": 7000000000000000, \\"maxFeeCap\\": 0, \\"selMsgNum\\": 20, \\"scanInterval\\": 10, \\"maxEstFailNumOfMsg\\": 50}"\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("从数据库手动刷新共享参数")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager share-params refresh\n")])])]),e("h3",{attrs:{id:"节点命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点命令"}},[s._v("#")]),s._v(" 节点命令")]),s._v(" "),e("ol",[e("li",[s._v("按名称搜索节点信息")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager node search <name>\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("添加节点信息")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager node add --name=<node-name> --url=<node-url> --token=<node-token>\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("节点信息列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager node list\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("根据名称删除节点信息")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./venus-messager node del <name>\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);