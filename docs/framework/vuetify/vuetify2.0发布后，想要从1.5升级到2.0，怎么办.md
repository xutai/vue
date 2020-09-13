vuetify2.0发布后，想要从1.5升级到2.0，怎么办？



查看vuetify的文档[Quick Start](https://vuetifyjs.com/en/getting-started/quick-start)，看了一圈后，尝试使用`vue add vuetify`，结果重新安装了，并不是安装到了2.0而是还是1.5，并且一些文件内容更改了，比如`src/plugins/vuetify.js`内容就改了，可以说是内容丢了！所以操作要谨慎，先备份好文件

查看Vue CLI的文档[Using the GUI](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui)，使用命令`vue ui`后，查看了一番，在插件Plugins里，虽然有提示当前版本和最新版本的`vue-cli-plugin-vuetify`，但是并不像其他的插件有更新的选项，在Dependencies里面也是的，没有更新的选项只有删除的选项，所以怎么办？



查看`Getting started - Frequently asked questions`文档，有一条叫做[How do I upgrade to the latest version](https://vuetifyjs.com/en/getting-started/frequently-asked-questions)， 点进`v2.00`后，可以看到作者赞着，然后提到了一些更新的内容，比如从stylus转到用sass，从javascript到typescript, 全部组件遵从Material Design 2 specification等等。重要链接，一些FAQ，新组件和特色， 文档更新， 更新指南，发布笔记， 以往发布，已知问题，求助等等。

查看更新指南`Upgrade Guide`，一开始说的是使用`Bootstrap - Vue-cli 3 Vuetify plugin install`，先按照提示修改文件vuetify.js和main.js。然后我在Terminal里输入`vue ui`，进去后找到`Plugins`，然后是点击按钮`+ Add Plugin`，搜索`Vuetify`，可以找到v0.6.1，点击后自动勾选，点击右下方的`Install vue-cli-plugin-vuetify`，刷新可以看到安装成功。然后去找`Dependencies`，按同样的方法安装。发现vuetify并没有将指定的版本安装，结果安装了vuetify@1.5.16。所以我先尝试卸载。重新安装Vue-cli 3 Vuetify plugin，因为版本被改低了。还是会自动重新安装新版本。所以尝试将这两个都卸载了先。去Pakcage.json里去掉vue-cli-plugin-vuetify，或者更改数字^0.5.0为0.6.1，尝试`npm update`，`npm install`，`npm uninstall vue-cli-plugin-vuetify`，`npm install vue-cli-plugin-vuetify`,`npm uninstall vuetify`，和`npm install vuetify`，`npm uninstall vue-cli-plugin-vuetify@0.5.0`。不知道什么原因，即使使用npm安装了这两个东西，我查看了node_modules，然而vue ui里面里这个版本号依然是低版本号。

那么试试看到底行不行？查看发现一些文件改了app.vue，src/views/Home.vue等， 从新调整一下。然后又发现只写的一些内容显示不正确。比如`v-toolbar-side-icon`就失效了，用`v-app-bar-nav-icon`吧。以此类推继续按照文档来升级吧。

其实觉得很麻烦，要不重新写吧？
虽然重新写可以，不过难道所有的项目都重新写？大项目呢？就当作做为了做大项目，慢慢改。或者就不要更新版本。



