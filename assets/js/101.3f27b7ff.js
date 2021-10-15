(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{486:function(e,s,a){"use strict";a.r(s);var t=a(46),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"venus-分布式矿池常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-分布式矿池常见问题"}},[e._v("#")]),e._v(" venus 分布式矿池常见问题")]),e._v(" "),a("h2",{attrs:{id:"venus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[e._v("#")]),e._v(" venus")]),e._v(" "),a("h3",{attrs:{id:"异常关闭venus或者某些特殊情形下可能会对本地存储造成破坏-并且是不可逆的-故需要定时备份本地存储-以便存储损坏是及时替换。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常关闭venus或者某些特殊情形下可能会对本地存储造成破坏-并且是不可逆的-故需要定时备份本地存储-以便存储损坏是及时替换。"}},[e._v("#")]),e._v(" 异常关闭venus或者某些特殊情形下可能会对本地存储造成破坏，并且是不可逆的，故需要定时备份本地存储，以便存储损坏是及时替换。")]),e._v(" "),a("ol",[a("li",[e._v("停止venus")]),e._v(" "),a("li",[e._v("rm -rf ~/.venus/*")]),e._v(" "),a("li",[e._v("用备份的解压或覆盖到~/.venus目录")]),e._v(" "),a("li",[e._v("重启venus")])]),e._v(" "),a("h3",{attrs:{id:"worker-fil-不足未及时处理或venus节点出口流量被打满-大量任务卡在waitseed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-fil-不足未及时处理或venus节点出口流量被打满-大量任务卡在waitseed"}},[e._v("#")]),e._v(" worker fil 不足未及时处理或venus节点出口流量被打满，大量任务卡在WaitSeed")]),e._v(" "),a("p",[e._v("   在venus-auth节点上使用"),a("code",[e._v("./venus-messager msg list-fail")]),e._v("命令打开失败的消息，然后使用"),a("code",[e._v("./venus-messager msg mark-bad --really-do-it <失败消息id>")]),e._v("命令将失败的消息打回sealer侧重启判断消息是否有问题；再次检查是否还有失败的消息")]),e._v(" "),a("h3",{attrs:{id:"venus节点宕机或磁盘空间将满-切换备机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus节点宕机或磁盘空间将满-切换备机"}},[e._v("#")]),e._v(" venus节点宕机或磁盘空间将满，切换备机")]),e._v(" "),a("p",[e._v("venus-message: 修改用户家目录下的messager.toml配置文件里的内容,指向新节点后，重启venus-message服务")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('cat ~/messager.toml\n[node]\n    url = "/ip4/192.168.1.134/tcp/3453"\n    token= "eyJhbGciOIUacbciIsInR5cCI6I.iLCJwZXJtIjoic2lnbiIs.c65GtR7IVjJYE"\n')])])]),a("p",[e._v("kill掉之前的venus-messager进程后，再重新启动即可")]),e._v(" "),a("p",[e._v("venus-miner: 修改用户家目录下的配置文件，连接的ip地址")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('cat ~/.venusminer/config.toml\nListenAPI = "/ip4/192.168.0.98/tcp/3453/http"\nToken = "eyJhbGciOiJIUzIsInR5c.eyJuYW1lIjoibWMmV4dCI6IiJ9.3P0x6StVjJYEhv198"\n')])])]),a("p",[e._v("重新启动venus-miner服务")]),e._v(" "),a("p",[e._v("winning-post和sealer节点修改.lotus/api和.lotus/token值")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat .venus/api\n/ip4/120.78.159.125/tcp/3453/http\n")])])]),a("p",[e._v("修改完成后使用重启winning-post和sealer")]),e._v(" "),a("h2",{attrs:{id:"venus-messager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager"}},[e._v("#")]),e._v(" venus-messager")]),e._v(" "),a("h3",{attrs:{id:"venus-messager-中大量消息卡住"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager-中大量消息卡住"}},[e._v("#")]),e._v(" venus-messager 中大量消息卡住")]),e._v(" "),a("p",[e._v("   默认每个worker地址30秒只往链上发送的消息数最多只有20条，可以根据实际体量进行稍微增加到30条（值越大同一高度往链上发送的消息数就越多，可能造成小部分的SysErrOutOfGas消息）")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./venus-messager address set-sel-msg-num --num "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("worker 地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"venus-message消息签名失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-message消息签名失败"}},[e._v("#")]),e._v(" venus-message消息签名失败")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-07-12T16:37:45+8:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" wallet sign failed "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("65735211")]),e._v("-9b4f-447q-9c8f-ad23791c75e fail **could not decrypt key with given password**\n")])])]),a("p",[e._v("从日志中发现消息在签名时失败，主要是wallet设置了错误的钱包密码。")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ERROR wallet sign failed 7edd68a5-4a6f-42c1-bded-acfd7d320118 **fail no connect found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" account sealer** and from "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("主要是wallet没有支持"),a("code",[e._v("sealer")]),e._v("这个账户，"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer/issues/63#issuecomment-880363242",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决方案"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[e._v("#")]),e._v(" venus-miner")]),e._v(" "),a("h2",{attrs:{id:"venus-miner无法出块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner无法出块"}},[e._v("#")]),e._v(" venus-miner无法出块")]),e._v(" "),a("ul",[a("li",[e._v("确认venus-miner连接的venus节点同步高度正常，并检查其日志是否正常；")]),e._v(" "),a("li",[e._v("在venus-miner节点上logs/venus-miner.log日志信息；使用 ./venus-miner address state 命令确认IsMining为true")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ ./venus-miner address state\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Addr"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"f0xxx"')]),e._v(",     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 矿工号")]),e._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"IsMining"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" true,    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 是否在挖矿（出块）")]),e._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Err"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" null          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 是否有报错信息")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h2",{attrs:{id:"venus-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[e._v("#")]),e._v(" venus-wallet")]),e._v(" "),a("h3",{attrs:{id:"venus-wallet启动之后报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet启动之后报错"}},[e._v("#")]),e._v(" venus-wallet启动之后报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ERROR\twallet_event\twallet_event/listenevent.go:192 WalletSign error password not set {"api hub": "/ip4/<IP_ADDRESS>/tcp/45132"}\n')])])]),a("p",[e._v("是由于没有执行./venus-wallet set-password命令设置密码导致的，每次venus-wallet重启都需要执行设置密码的操作，也可以在启动时设置密码："),a("code",[e._v("./venus-wallet run --password=<password>")]),e._v("\n设置密码后，如果有下列报错，则需要检查配置文件。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("ERROR\twallet_event\twallet_listen/listenevent.go:120 listen wallet event errored: listenWalletRequestOnce listenWalletRequestOnce call failed: handler: websocket connection closed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api hub"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ip4/47.251.6.27/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("直到到connect to server返回正确的消息为止。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("INFO\twallet_event\twallet_event/listenevent.go:156 connect to server "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("65735211")]),e._v("-9b4f-447q-9c8f-ad23791c75e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api hub"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ip4/47.251.6.27/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"venus-wallet-连接gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet-连接gateway"}},[e._v("#")]),e._v(" venus-wallet 连接gateway")]),e._v(" "),a("ol",[a("li",[e._v("token错误")])]),e._v(" "),a("p",[e._v("错误日志：2021-08-02T11:37:33.063+0800    ERROR   wallet_event    wallet_event/listenevent.go:65  connect to api hub /ip4/127.0.0.1/tcp/45132/ws failed websocket: "),a("strong",[e._v("bad handshake")])]),e._v(" "),a("h2",{attrs:{id:"venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer"}},[e._v("#")]),e._v(" venus-sealer")]),e._v(" "),a("ul",[a("li",[e._v("开启rust日志：export RUST_LOG=debug")])]),e._v(" "),a("h3",{attrs:{id:"venus-sealer-创建矿工失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer-创建矿工失败"}},[e._v("#")]),e._v(" venus-sealer 创建矿工失败")]),e._v(" "),a("ol",[a("li",[e._v("检查 sealer的日志是否有异常")])]),e._v(" "),a("blockquote",[a("p",[e._v("日志中会输出创建矿工的消息：Pushed CreateMiner message: 556f3c3b-35cb-40e5-b096-924e33920420")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("查看消息是否推送到messager")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('./venus-messager msg search --id="9965e5ea-8142-4b61-8312-425d5598092e"\n\n{\n        "ID": "9965e5ea-8142-4b61-8312-425d5598092e",\n        "SignedCid": null,\n        "from": "t3wjbqsk5wvm7troa72xnnzjvxuspvtdemdcetrml3rmq3h4lghhqw5ys42vymitoanacinmkaf5pwf2kfclsa",\n        "Height": 0,\n        "Receipt": {\n                "ExitCode": -1,\n                "ReturnValue": "",\n                "GasUsed": 0\n        },\n        "State": "UnFillMsg",\n }\n')])])]),a("p",[e._v(":::info\n消息各个状态代表的含义：\nUnFillMsg：未签名消息\nFillMsg：已签名消息\nOnChainMsg：已上链消息\nFailedMsg：由于各种原因失败的消息\n:::")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("消息已推送到messager，检查消息状态，初始状态是 "),a("code",[e._v("UnFillMsg")])])]),e._v(" "),a("ul",[a("li",[e._v("若消息长时间是"),a("code",[e._v("UnFillMsg")]),e._v("状态，查看日志，可能是gas预估失败或者签名失败")]),e._v(" "),a("li",[e._v("若消息状态是"),a("code",[e._v("FillMsg")]),e._v("，但长时间未上链，先查看messager日志，再检查是否已推送到节点消息池："),a("code",[e._v("./venus mpool pending --from <address>")]),e._v("，若不在消息池，查看节点日志")]),e._v(" "),a("li",[e._v("若消息状态是"),a("code",[e._v("FailedMsg")]),e._v("，查看失败原因："),a("code",[e._v("./venus-messager msg list-fail --from <address>")])])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("消息未推送到messager，sealer日志会有错误提示")])]),e._v(" "),a("h3",{attrs:{id:"创建矿工提示钱包不存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建矿工提示钱包不存在"}},[e._v("#")]),e._v(" 创建矿工提示钱包不存在")]),e._v(" "),a("ul",[a("li",[e._v("错误日志："),a("strong",[e._v("wallet(admin_2)")]),e._v(" address t3s22ny35ai24f23avj5s4nmc6hq3wt3uegnigqrdvzid5hplskg2wmqei3j433w4qoxdiy5jxk5yrqcn7p2aq not exists")]),e._v(" "),a("li",[e._v("解决方法：需要在"),a("code",[e._v("venus-wallet")]),e._v("中支持下"),a("code",[e._v("admin_2")]),e._v(" "),a("code",[e._v("./venus-wallet support admin_2")])])]),e._v(" "),a("h3",{attrs:{id:"启动遇到矿工不存在-address-t02871-not-exit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动遇到矿工不存在-address-t02871-not-exit"}},[e._v("#")]),e._v(" 启动遇到矿工不存在 "),a("code",[e._v("address t02871 not exit")])]),e._v(" "),a("ul",[a("li",[e._v("错误日志：2021-08-03T10:11:14.154+0800    ERROR   proof_event     proof_client/proof_event.go:28  listen head changes errored: listenHeadChanges ChainNotify call failed: "),a("strong",[e._v("address t02871 not exit")])]),e._v(" "),a("li",[e._v("解决方法：在"),a("code",[e._v("venus_auth")]),e._v("中添加该矿工 "),a("code",[e._v("./venus-auth update --name =admin_2 --miner=t02871")])])]),e._v(" "),a("h3",{attrs:{id:"wdpost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wdpost"}},[e._v("#")]),e._v(" wdPoSt")]),e._v(" "),a("p",[e._v("venus-sealer需要周期性进行wdPoSt,一旦失败,将有惩罚算力和扣除抵押的风险.故需要特别重视:")]),e._v(" "),a("ul",[a("li",[e._v("sealer所在机器要预留一定的cpu资源给wdPoSt;")]),e._v(" "),a("li",[e._v("如果有gpu的话,其他抢占gpu资源的任务不能同sealer在一台机器运行,否则会造成wdPoSt等待gpu无法开始.")]),e._v(" "),a("li",[e._v("需要关注wdPoSt的证明周期,特别是sector被分配的那些窗口期(如下图deadline 0和2),一旦出现wdPoSt任务未开始或失败及时处理")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./venus-sealer proving deadlines\nSealer: t0***\ndeadline partitions sectors (faults) proven partitions\n0        1          9 (9)            0\n1        0          0 (0)            0\n2        1          1 (1)            0\n3        0          0 (0)            0\n4        0          0 (0)            0\n5        0          0 (0)            0\n6        0          0 (0)            0\n7        0          0 (0)            0\n8        0          0 (0)            0\n9        0          0 (0)            0\n10       0          0 (0)            0\n11       0          0 (0)            0\n12       0          0 (0)            0\n13       0          0 (0)            0\n14       0          0 (0)            0\n15       0          0 (0)            0\n16       0          0 (0)            0\n17       0          0 (0)            0\n18       0          0 (0)            0\n19       0          0 (0)            0\n20       0          0 (0)            0\n21       0          0 (0)            0\n22       0          0 (0)            0\n23       0          0 (0)            0\n24       0          0 (0)            0\n25       0          0 (0)            0\n26       0          0 (0)            0\n27       0          0 (0)            0\n28       0          0 (0)            0\n29       0          0 (0)            0\n30       0          0 (0)            0\n31       0          0 (0)            0\n32       0          0 (0)            0 (current)\n33       0          0 (0)            0\n34       0          0 (0)            0\n35       0          0 (0)            0\n36       0          0 (0)            0\n37       0          0 (0)            0\n38       0          0 (0)            0\n39       0          0 (0)            0\n40       0          0 (0)            0\n41       0          0 (0)            0\n42       0          0 (0)            0\n43       0          0 (0)            0\n44       0          0 (0)            0\n45       0          0 (0)            0\n46       0          0 (0)            0\n47       0          0 (0)            0\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);