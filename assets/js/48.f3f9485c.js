(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{387:function(e,t,s){"use strict";s.r(t);var a=s(17),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),s("p",[e._v("This is a step-by-step guide for installing and running a Filecoin node connected to the testnet on your local machine. Subsequent tutorials explain how to "),s("a",{attrs:{href:"Mining-Filecoin"}},[e._v("mine Filecoin")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#getting-started"}},[e._v("Getting started")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#table-of-contents"}},[e._v("Table of contents")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#minimal-requirements"}},[e._v("Minimal requirements")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#installing-go"}},[e._v("Installing Go")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#installing-rustup"}},[e._v("Installing Rustup")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#install-system-dependencies"}},[e._v("Install system dependencies")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#linux"}},[e._v("Linux")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#macos"}},[e._v("MacOS")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#xcode-command-line-tools"}},[e._v("XCode Command Line Tools")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#install-homebrew"}},[e._v("Install Homebrew")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#installing-dependencies"}},[e._v("Installing dependencies")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#building-filecoin-and-running-tests"}},[e._v("Building Filecoin and running tests")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#start-running-filecoin"}},[e._v("Start running Filecoin")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wait-for-chain-sync"}},[e._v("Wait for chain sync")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#viewing-network-information"}},[e._v("Viewing network information")])])])])]),e._v(" "),s("h2",{attrs:{id:"minimal-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal-requirements"}},[e._v("#")]),e._v(" Minimal requirements")]),e._v(" "),s("p",[e._v("To run a Lotus node, your computer must have:")]),e._v(" "),s("ul",[s("li",[e._v("macOS or Linux installed. Windows is not yet supported.")]),e._v(" "),s("li",[e._v("8-core CPU and 32 GiB RAM. Models with support for "),s("em",[e._v("Intel SHA Extensions")]),e._v(" (AMD since Zen microarchitecture, or Intel since Ice Lake) will significantly speed things up.")]),e._v(" "),s("li",[e._v("Enough space to store the current Lotus chain (preferably on an SSD storage medium). The chain grows at approximately 12 GiB per week. The chain can be also "),s("RouterLink",{attrs:{to:"/modules/chain.html"}},[e._v("synced from trusted state snapshots and compacted")]),e._v(".")],1)]),e._v(" "),s("h4",{attrs:{id:"installing-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-go"}},[e._v("#")]),e._v(" Installing Go")]),e._v(" "),s("p",[e._v("The build process for "),s("code",[e._v("venus")]),e._v(" requires "),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),s("OutboundLink")],1),e._v(" >= v1.16.")]),e._v(" "),s("blockquote",[s("p",[e._v("Installing Go for the first time? We recommend "),s("a",{attrs:{href:"https://www.ardanlabs.com/blog/2016/05/installing-go-and-your-workspace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),s("OutboundLink")],1),e._v(" which includes environment setup.")])]),e._v(" "),s("p",[e._v("Due to the use of "),s("code",[e._v("cgo")]),e._v(" in "),s("code",[e._v("venus")]),e._v(", a C compiler is required to build it whether a prebuilt library is being used or it is compiled from source. To use "),s("code",[e._v("gcc")]),e._v(" (e.g. "),s("code",[e._v("export CC=gcc")]),e._v("), v7.4.0 or higher is required.")]),e._v(" "),s("p",[e._v("The build process will download a static library containing the "),s("a",{attrs:{href:"https://github.com/filecoin-project/rust-fil-proofs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin proofs implementation"),s("OutboundLink")],1),e._v(" (which is written in Rust).")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("NOTICE:")]),e._v(" To build proofs from source, (1) a Rust development environment must be installed and (2) the environment variable "),s("code",[e._v("FFI_BUILD_FROM_SOURCE=1")]),e._v(" must be set. More information can be found in "),s("a",{attrs:{href:"https://github.com/filecoin-project/filecoin-ffi",target:"_blank",rel:"noopener noreferrer"}},[e._v("filecoin-ffi"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"installing-rustup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-rustup"}},[e._v("#")]),e._v(" Installing Rustup")]),e._v(" "),s("p",[e._v("Lotus needs "),s("a",{attrs:{href:"https://rustup.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustup"),s("OutboundLink")],1),e._v(". The easiest way to install it is:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --proto "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=https'")]),e._v(" --tlsv1.2 -sSf https://sh.rustup.rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Make sure your "),s("code",[e._v("$PATH")]),e._v(" variable is correctly configured after the rustup installation so that "),s("code",[e._v("cargo")]),e._v(" and "),s("code",[e._v("rustc")]),e._v(" are found in their rustup-configured locations.")])]),e._v(" "),s("h4",{attrs:{id:"install-system-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-system-dependencies"}},[e._v("#")]),e._v(" Install system dependencies")]),e._v(" "),s("h5",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),s("p",[e._v("Arch:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -Syu opencl-icd-loader gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" bzr jq pkg-config opencl-icd-loader opencl-headers hwloc\n")])])]),s("p",[e._v("Ubuntu/Debian:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mesa-opencl-icd ocl-icd-opencl-dev gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" bzr jq pkg-config "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" clang build-essential hwloc libhwloc-dev "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade -y\n")])])]),s("p",[e._v("Fedora:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf -y "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" bzr jq pkgconfig mesa-libOpenCL mesa-libOpenCL-devel opencl-headers ocl-icd ocl-icd-devel clang llvm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" hwloc libhwloc-dev\n")])])]),s("p",[e._v("OpenSUSE:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" jq "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" libOpenCL1 opencl-headers ocl-icd-devel clang llvm hwloc "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/lib64/libOpenCL.so.1 /usr/lib64/libOpenCL.so\n")])])]),s("p",[e._v("Amazon Linux 2:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" gcc bzr jq pkgconfig clang llvm mesa-libGL-devel opencl-headers ocl-icd ocl-icd-devel hwloc-devel\n")])])]),s("h5",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" MacOS")]),e._v(" "),s("p",[e._v("These instructions are specific to macOS. If you are installing Lotus on a Linux distribution, head over to the "),s("a",{attrs:{href:"#linux"}},[e._v("Linux section")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"xcode-command-line-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xcode-command-line-tools"}},[e._v("#")]),e._v(" XCode Command Line Tools")]),e._v(" "),s("p",[e._v("Lotus requires that X-Code CLI tools be installed before building the Lotus binaries.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Check if you already have the XCode Command Line Tools installed via the CLI, run:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("xcode-select -p\n")])])]),s("p",[e._v("If this command returns a path, you can move on to the "),s("a",{attrs:{href:"#install-homebrew"}},[e._v("next step")]),e._v(". Otherwise, to install via the CLI, run:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("xcode-select --install\n")])])])]),e._v(" "),s("li",[s("p",[e._v("To update, run:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /Library/Developer/CommandLineTools\nxcode-select --install\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"install-homebrew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-homebrew"}},[e._v("#")]),e._v(" Install Homebrew")]),e._v(" "),s("p",[e._v("We recommend that MacOS users use "),s("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),s("OutboundLink")],1),e._v(" to install each of the necessary packages.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Use the command "),s("code",[e._v("brew install")]),e._v(" to install the following packages:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" go bzr jq pkg-config rustup hwloc\n")])])])])]),e._v(" "),s("h4",{attrs:{id:"installing-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[e._v("#")]),e._v(" Installing dependencies")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("Clone the "),s("code",[e._v("venus")]),e._v(" git repository and enter it:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /path/to/filecoin-project\n "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/filecoin-project/venus.git /path/to/filecoin-project/venus\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Load all the Git submodules:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Initialize the build dependencies:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deps\n")])])])])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("NOTICE:")]),e._v(" The first "),s("code",[e._v("deps")]),e._v(" start up can be "),s("strong",[e._v("slow")]),e._v(", as very large parameter files are either downloaded or generated locally in "),s("code",[e._v("/var/tmp/filecoin-proof-parameters")]),e._v(". Have patience; future runs will be faster.")])]),e._v(" "),s("h3",{attrs:{id:"building-filecoin-and-running-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-filecoin-and-running-tests"}},[e._v("#")]),e._v(" Building Filecoin and running tests")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Build the binary:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Run the unit tests:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("go run ./build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Optionally, building and tests can be combined:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("go run ./build best\n")])])])])]),e._v(" "),s("p",[e._v("Other handy build commands include:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check the code for style and correctness issues")]),e._v("\ngo run ./build lint\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run different categories of tests by toggling their flags")]),e._v("\ngo run ./build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -unit"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false -integration"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -functional"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test with a coverage report")]),e._v("\ngo run ./build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -cover\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test with Go's race-condition instrumentation and warnings (see https://blog.golang.org/race-detector)")]),e._v("\ngo run ./build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -race\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deps, Lint, Build, Test (any args will be passed to `test`)")]),e._v("\ngo run ./build all\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("NOTICE:")]),e._v(" Any flag passed to "),s("code",[e._v("go run ./build test")]),e._v(" (e.g. "),s("code",[e._v("-cover")]),e._v(") will be passed on to "),s("code",[e._v("go test")]),e._v(".")])]),e._v(" "),s("p",[s("strong",[e._v("For all problems with the build")]),e._v(", please consult the "),s("a",{attrs:{href:"https://go.filecoin.io/venus-tutorial/Troubleshooting-&-FAQ.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Troubleshooting"),s("OutboundLink")],1),e._v(" section of this documentation.")]),e._v(" "),s("h2",{attrs:{id:"start-running-filecoin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-running-filecoin"}},[e._v("#")]),e._v(" Start running Filecoin")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("If "),s("code",[e._v("venus")]),e._v(" has been run on the system before, remove existing Filecoin repo ("),s("strong",[e._v("this will delete all previous filecoin data")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf ~/.venus\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Start the venus daemon:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("venus daemon\n")])])])])]),e._v(" "),s("p",[e._v('This should return "My peer ID is '),s("code",[e._v("<peerID>")]),e._v('", where '),s("code",[e._v("<peerID>")]),e._v(" is a long "),s("a",{attrs:{href:"https://github.com/filecoin-project/specs/blob/master/definitions.md#cid",target:"_blank",rel:"noopener noreferrer"}},[e._v("CID"),s("OutboundLink")],1),e._v(' string starting with "Qm".')]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Print a list of bootstrap node addresses:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("venus config bootstrap.addresses\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Choose any address from the list you just printed, and connect to it (Automatic peer discovery and connection coming soon.):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("venus swarm connect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("any-filecoin-node-mulitaddr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("NOTICE:")]),e._v(" This can be "),s("strong",[e._v("slow")]),e._v(" the first time. The filecoin node needs a large parameter file for proofs, stored in "),s("code",[e._v("/tmp/filecoin-proof-parameters")]),e._v(". It is usually generated by the "),s("code",[e._v("deps")]),e._v(" build step. If these files are missing they will be regenerated, which can take up to an hour. We are working on a better solution.")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Check the node's connectivity:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("venus swarm peers                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# list addresses of peers to which you're connected")]),e._v("\n")])])])])]),e._v(" "),s("p",[e._v("The node should now be connected to some peers and will begin downloading and validating the blockchain.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("NOTICE:")]),e._v(" The daemon is now running indefinitely in its own Terminal ("),s("code",[e._v("Ctrl + C")]),e._v(" to quit). To run other "),s("code",[e._v("venus")]),e._v(" commands, open a second Terminal tab or window ("),s("code",[e._v("Cmd + T")]),e._v(" on Mac)._")])]),e._v(" "),s("p",[e._v("_Need help? See "),s("a",{attrs:{href:"Troubleshooting-&-FAQ"}},[e._v("Troubleshooting & FAQ")]),e._v(" or "),s("a",{attrs:{href:"https://riot.im/app/#/room/#fil-dev:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("#fil-dev on Matrix chat"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"wait-for-chain-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-chain-sync"}},[e._v("#")]),e._v(" Wait for chain sync")]),e._v(" "),s("p",[e._v("🎉 Congratulations, you're now connected to Filecoin! The daemon is now busy syncing and validating the existing blockchain, which can take awhile -- hours or even days depending on network age and activity.")]),e._v(" "),s("p",[e._v("During this initial sync time ther will be intense activity on one CPU core. Find out what the current block height is first by visiting the "),s("a",{attrs:{href:"https://stats.testnet.filecoin.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("network stats page"),s("OutboundLink")],1),e._v(" then observe the nodes syncing progress:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("venus "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v(" status\n")])])]),s("h2",{attrs:{id:"viewing-network-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewing-network-information"}},[e._v("#")]),e._v(" Viewing network information")]),e._v(" "),s("p",[e._v("There are a few visualisation tools to help users understand what is happening within the Filecoin network, such as the official "),s("a",{attrs:{href:"http://stats.testnet.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("network stats"),s("OutboundLink")],1),e._v(" page as well as the community-managed block explorers "),s("a",{attrs:{href:"https://filscan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("filscan.io"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://filscout.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("filscout.io"),s("OutboundLink")],1),e._v(", and "),s("a",{attrs:{href:"https://filfox.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("filfox.io"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);