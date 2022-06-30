(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{371:function(n,e,t){"use strict";t.r(e),e.default="# 使用 Canvas 或者 SVG 渲染\n\n浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些场景中，他们的表现和能力又有一定差异。于是，对它们的选择取舍，就成为了一个一直存在的不易有标准答案的话题。\n\nECharts 从初始一直使用 Canvas 绘制图表。而 [ECharts v4.0](https://github.com/apache/echarts/releases) 发布了 SVG 渲染器，从而提供了一种新的选择。只须在初始化一个图表实例时，设置 [renderer 参数](${mainSitePath}/api.html#echarts.init) 为 `'canvas'` 或 `'svg'` 即可指定渲染器，比较方便。\n\n> SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时被透明支持，主要归功于 ECharts 底层库 [ZRender](https://github.com/ecomfe/zrender) 的抽象和实现，形成可互换的 SVG 渲染器和 Canvas 渲染器。\n\n## 选择哪种渲染器\n\n一般来说，Canvas 更适合绘制图形元素数量较多（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 [特效](${mainSitePath}/examples/editor.html?c=lines-bmap-effect)。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、并且用户使用浏览器内置的缩放功能时不会模糊。\n\n选择哪种渲染器，我们可以根据软硬件环境、数据量、功能需求综合考虑。\n\n- 在软硬件环境较好，数据量不大的场景下，两种渲染器都可以适用，并不需要太多纠结。\n- 在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：\n  - 在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善。大略的说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如 [水球图](https://ecomfe.github.io/echarts-liquidfill/example/) 等，SVG 渲染器可能效果更好。\n  - 数据量较大（经验判断 > 1k）、较多交互时，建议选择 Canvas 渲染器。\n\n我们强烈欢迎开发者们[反馈](https://github.com/apache/echarts/issues/new)给我们使用的体验和场景，帮助我们更好的做优化。\n\n注：当前某些特殊的渲染依然需要依赖 Canvas：如[炫光尾迹特效](${optionPath}series-lines.effect)、[带有混合效果的热力图](${mainSitePath}/examples/editor.html?c=heatmap-bmap)等。\n\n## 如何使用渲染器\n\n如果是用如下的方式完整引入`echarts`，代码中已经包含了 SVG 渲染器和 Canvas 渲染器\n\n```js\nimport * as echarts from 'echarts';\n```\n\n如果你是按照 [在项目中引入 Apache ECharts](${lang}/basics/import) 一文中的介绍使用按需引入，则需要手动引入需要的渲染器\n\n```js\nimport * as echarts from 'echarts/core';\n// 可以根据需要选用只用到的渲染器\nimport { SVGRenderer, CanvasRenderer } from 'echarts/renderers';\n\necharts.use([SVGRenderer, CanvasRenderer]);\n```\n\n然后，我们就可以在代码中，初始化图表实例时，[传入参数](${mainSitePath}/api.html#echarts.init) 选择渲染器类型：\n\n```js\n// 使用 Canvas 渲染器（默认）\nvar chart = echarts.init(containerDom, null, { renderer: 'canvas' });\n// 等价于：\nvar chart = echarts.init(containerDom);\n\n// 使用 SVG 渲染器\nvar chart = echarts.init(containerDom, null, { renderer: 'svg' });\n```\n"}}]);