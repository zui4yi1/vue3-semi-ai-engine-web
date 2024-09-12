# vue3-semi-ai-engine-web

这是半 AI 代码引擎的前端脚手架，提供了`vue3-semi-ai-engine`的安装、演示例子、AI 语言模板、以及创建页面的脚本等模块或功能。

# 依赖环境

- node 18 或 node 20+
- vscode 安装通义灵码插件——AI 语言大模型, 免费的

# 安装

**1. 安装脚手架: 先不做`npx`形式的脚手架，直接下载工程**

```
git clone https://github.com/zui4yi1/vue3-semi-ai-engine-web.git
```

**2. 安装创建页面的 node 脚本 `create-page`**
脚手架已自带`create-page`，但需要手动加入到 node:

```
npm link --force
```

如果只有一个工程的话，使用`npm link`也是可以的。如果有多个工程的话，每次都得执行上述语句一遍，因为每个工程的页面模板都是可以修改的，修改了就不一样了。

# 使用方法

## 1. 创建页面

比如想创建一个叫`xxx-xxx`的页面，在控制台执行如下命令:

```
create-page xxx-xxx
```

即可在 `src/pages/xxx-xxx` 目录下找到创建好的页面文件，里面包含了页面模板和`curd`引擎模板

也支持路径的形式，比如：`create-page xxx/yyy`, 生成的是 `src/pages/xxx/yyy`

默认页面的根目录是`src/pages/`, 可以在`bin/create-page/index.js`中改为其它路径

## 2. 加入到路由

在 `src/router/index.ts` 文件中加入页面的路由。
**这里有个小技巧，先复制相对路径，再`router`中输入`// 相对路径`并回车，ai 会自动提示生成路由。**

## 3. 使用 AI 语言模板，生成`curd`引擎所需要的配置或数据：

在`docs/ai-templates/`这个目录下已提供好了与 AI 对话的模板，这样即可让通义灵码 AI 语言大模型，帮你生成`curd`引擎所需要的配置或数据。

- **ai-dialogs.txt** 是对话模板，包含了查询条件、列表、表单三种模板。
- **query-schemes.ts** 是生成规则模板, 定义了如何生成查询条件。
- **table-schemes.ts** 是生成规则模板, 定义了如何生成列表、数据字典、字典枚举值、以及 demo 数据等共四个。
- **form-schemes.ts** 是生成规则模板, 定义了如何生成表单。

**AI 语言模板的使用方法:**
比如要创建查询条件，按以下步骤：

- **1. 打开`ai-dialogs.txt`文件，拷贝查询条件模板的内容**
- **2. 打开`query-schemes.ts`生成规则模板文件。**
- **3. 打开通义灵码**
- **4. 选中步骤 2 的所有内容, ctrl + A 选中即可， 不要有其它动作**
- **5. 在通义灵码中粘贴步骤 1 的查询条件，并回车**
- **6. 等待通义灵码生成配置，然后拷贝到`_schemes.ts`文件中的`_conditionBlock`即可**

表单的类似，列表的则比较多有四种，需要分别拷贝。注意生成列表的时候，如果发现四种都在一个代码块中生成了，则马上停止，并告诉 ai 分别在不同的代码块中生成，这样方便拷贝 。

# CURD 引擎的 API 地址

[vue3-semi-ai-engine](https://www.npmjs.com/package/vue3-semi-ai-engine)
