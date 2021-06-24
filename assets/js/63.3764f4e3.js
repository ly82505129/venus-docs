(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{406:function(a,e,t){"use strict";t.r(e);var s=t(17),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"venus-发送和接收fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-发送和接收fil"}},[a._v("#")]),a._v(" Venus: 发送和接收FIL")]),a._v(" "),t("p",[a._v("为了更好地使用钱包，请阅读 "),t("RouterLink",{attrs:{to:"/zh/How-to-use-wallet.html"}},[a._v("如何使用钱包")]),a._v("。")],1),a._v(" "),t("p",[a._v("本指南将向您展示如何创建和管理Venus钱包，以及如何使用它将一些FIL发送到其它地址。每个节点可以有多个地址。")]),a._v(" "),t("p",[a._v("要使用Venus接收和发送FIL，您将需要 "),t("RouterLink",{attrs:{to:"/zh/Getting-Started.html"}},[a._v("安装并运行Venus节点")]),a._v("。")],1),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#venus-发送和接收fil"}},[a._v("Venus: 发送和接收FIL")])]),t("li",[t("a",{attrs:{href:"#创建一个钱包"}},[a._v("创建一个钱包")]),t("ul",[t("li",[t("a",{attrs:{href:"#创建一个bls钱包"}},[a._v("创建一个bls钱包")])]),t("li",[t("a",{attrs:{href:"#创建一个secp256k1钱包"}},[a._v("创建一个secp256k1钱包")])]),t("li",[t("a",{attrs:{href:"#创建一个多重签名钱包"}},[a._v("创建一个多重签名钱包")])]),t("li",[t("a",{attrs:{href:"#列表地址"}},[a._v("列表地址")])]),t("li",[t("a",{attrs:{href:"#获取fil"}},[a._v("获取FIL")])]),t("li",[t("a",{attrs:{href:"#发送fil"}},[a._v("发送FIL")])]),t("li",[t("a",{attrs:{href:"#交易费用"}},[a._v("交易费用")])]),t("li",[t("a",{attrs:{href:"#导出和导入地址"}},[a._v("导出和导入地址")])]),t("li",[t("a",{attrs:{href:"#离线节点"}},[a._v("离线节点")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"创建一个钱包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个钱包"}},[a._v("#")]),a._v(" 创建一个钱包")]),a._v(" "),t("h3",{attrs:{id:"创建一个bls钱包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个bls钱包"}},[a._v("#")]),a._v(" 创建一个bls钱包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet new bls\n")])])]),t("h3",{attrs:{id:"创建一个secp256k1钱包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个secp256k1钱包"}},[a._v("#")]),a._v(" 创建一个secp256k1钱包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet new --type=secp256k1\n")])])]),t("h3",{attrs:{id:"创建一个多重签名钱包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个多重签名钱包"}},[a._v("#")]),a._v(" 创建一个多重签名钱包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus msig create address1 address2..\n")])])]),t("p",[a._v("这将创建一个新地址。您可以将mainnet与testnet地址区分开，因为mainnet以 "),t("code",[a._v("f")]),a._v(" 开头，testnet以 "),t("code",[a._v("t")]),a._v(" 开头。")]),a._v(" "),t("p",[a._v("::: 有关您钱包中地址的信息存储在 ~/.venus/wallet 中。\n删除这些文件夹也将删除密钥，您将失去对这些钱包中所有资金的控制权。 :::")]),a._v(" "),t("h3",{attrs:{id:"列表地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表地址"}},[a._v("#")]),a._v(" 列表地址")]),a._v(" "),t("p",[a._v("您可以根据需要创建任意多个地址。其中之一将是 "),t("em",[a._v("默认地址")]),a._v(".")]),a._v(" "),t("p",[a._v("您可以看到当前节点的所有地址的列表：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet ls\n")])])]),t("p",[a._v("您可以通过以下方式查看默认地址：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet default\n")])])]),t("p",[a._v("如果需要，可以将默认地址更改为其他地址：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet set-default <address>\n")])])]),t("h3",{attrs:{id:"获取fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取fil"}},[a._v("#")]),a._v(" 获取FIL")]),a._v(" "),t("p",[a._v("对于非主网络，"),t("code",[a._v("FIL")]),a._v(" 可以从 faucet 获得。"),t("a",{attrs:{href:"https://network.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("网络仪表板"),t("OutboundLink")],1),a._v(" 提供了 faucets 列表。\n对于主网，最简单的方法是 "),t("code",[a._v("FIL")]),a._v(" 从交易所购买。并非所有交易所都支持 "),t("code",[a._v("FIL")]),a._v("，所以在注册之前进行研究。")]),a._v(" "),t("p",[a._v("收到 "),t("code",[a._v("FIL")]),a._v("后，请使用电子钱包检查您的余额：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet balance <address>\n")])])]),t("p",[a._v("记住，只有当daemon完全同步后，您才会看到最新的余额。")]),a._v(" "),t("h3",{attrs:{id:"发送fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送fil"}},[a._v("#")]),a._v(" 发送FIL")]),a._v(" "),t("p",[a._v("使用send命令，后面跟接收地址和您要发送的  "),t("code",[a._v("FIL")]),a._v("  数额。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus send <target-address> --value=<FIL amount>\n\nIf you want to specify the sending address:\nvenus send <target-address> --value=<FIL amount> --from=<address>\n")])])]),t("p",[a._v("对于高级发送选项：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus send --help\n")])])]),t("h3",{attrs:{id:"交易费用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交易费用"}},[a._v("#")]),a._v(" 交易费用")]),a._v(" "),t("p",[a._v("发送的每笔交易都要根据其使用Gas usage支付额外的 "),t("code",[a._v("FIL")]),a._v("。默认情况下，Venus自动设置所有必要的值。但是，您可能希望在send命令中使用--gas-feecap标志，以避免在网络拥塞很高时出现意外情况。")]),a._v(" "),t("h3",{attrs:{id:"导出和导入地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出和导入地址"}},[a._v("#")]),a._v(" 导出和导入地址")]),a._v(" "),t("p",[a._v("::: 确保您地址的私钥安全！不要与任何人分享！将它们存放在安全的位置！:::")]),a._v(" "),t("p",[a._v("您可以导出和重新导入钱包，包括不同的Venus节点。从节点导出私钥需要两个步骤：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("first step:\nvenus wallet export <address>\n\nsecond step:\nenter wallet password\n")])])]),t("p",[a._v("使用钱包导入将地址导入节点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("venus wallet import <private_key>\n")])])]),t("h3",{attrs:{id:"离线节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线节点"}},[a._v("#")]),a._v(" 离线节点")]),a._v(" "),t("p",[a._v("每个节点将其钱包存储在 "),t("code",[a._v("~/.venus/wallet")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    |--- 000000.vlog\n    |--- 000001.sst\n    |--- KEYREGISTRY\n    |--- LOCK\n    |--- MANIFEST\n")])])]),t("p",[a._v("当节点离线时导出钱包，请将这些文件从 "),t("code",[a._v("~/.venus/wallet")]),a._v(" 复制到其他位置。要导入此钱包，请将这些文件复制到 "),t("code",[a._v("~/.venus/wallet")]),a._v("。下一次启动时，Venus节点将自动使用这些密钥。")]),a._v(" "),t("p",[a._v("在Github上"),t("a",{attrs:{href:""}},[a._v("编辑此页")]),a._v(" 或 "),t("a",{attrs:{href:"https://github.com/filecoin-project/venus-docs/issues",target:"_blank",rel:"noopener noreferrer"}},[a._v("创建一个问题"),t("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);