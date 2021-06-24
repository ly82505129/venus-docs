(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{430:function(e,s,a){"use strict";a.r(s);var t=a(17),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"venus-tips-when-running-in-china"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-tips-when-running-in-china"}},[e._v("#")]),e._v(" Venus: tips when running in China")]),e._v(" "),a("p",[e._v("This guide provides a few tips for users in China to get around some of the bandwidth issues or slowness they can suffer when building and running Venus.")]),e._v(" "),a("h2",{attrs:{id:"speed-up-proof-parameter-download-for-first-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-up-proof-parameter-download-for-first-boot"}},[e._v("#")]),e._v(" Speed up proof parameter download for first boot")]),e._v(" "),a("p",[e._v("Running Venus requires the download of chain's proof parameters which are large files which by default are hosted outside of China and very slow to download there. To get around that, users should set the following environment variable when running Venus:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("IPFS_GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://proof-parameters.s3.cn-south-1.jdcloud-oss.com/ipfs/\n")])])]),a("h2",{attrs:{id:"speed-up-go-module-download-during-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-up-go-module-download-during-builds"}},[e._v("#")]),e._v(" Speed up Go module download during builds")]),e._v(" "),a("p",[e._v("Building Venus requires downloading a few Go modules. These are usually hosted on Github, which has very low bandwidth from China. To fix this use a local proxy by setting the following variable before running Venus:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://goproxy.cn\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);