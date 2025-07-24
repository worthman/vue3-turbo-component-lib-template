<!--
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-11 14:52:36
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-24 09:42:03
 * @FilePath: \vue3-turbo-component-lib-template\apps\docs\zh\packages\ui\button.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Button 按钮

常用的操作按钮，支持多种类型、尺寸和状态。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<demo vue="ui/button/basic.vue" />

## 禁用状态

使用 `disabled` 属性来定义按钮是否被禁用。该属性接受一个 Boolean 类型的值。

<!-- <demo vue="ui/button/disabled.vue" /> -->

## 文字按钮

没有边框和背景色的按钮，通过 `text` 属性设置。

<!-- <demo vue="ui/button/text.vue" /> -->

## 链接按钮

使用 `link` 属性创建链接样式的按钮。

<demo vue="ui/button/link.vue" />

## 图标按钮

使用 `icon` 属性为按钮添加图标，也可以单独使用图标按钮。

<demo vue="ui/button/icon.vue" />

## 加载状态

通过设置 `loading` 属性为 `true` 来显示加载中状态。

<demo vue="ui/button/loading.vue" />

## 调整尺寸

使用 `size` 属性配置尺寸，可使用 `large` 和 `small` 两种值。

<demo vue="ui/button/size.vue" />

## API

### Props

| 属性            | 说明                         | 类型                                                      | 默认值   |
| --------------- | ---------------------------- | --------------------------------------------------------- | -------- |
| type            | 按钮类型                     | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | ''       |
| size            | 按钮大小                     | 'small' \| 'medium' \| 'large'                            | 'medium' |
| disabled        | 是否禁用                     | boolean                                                   | false    |
| round           | 是否为圆角按钮               | boolean                                                   | false    |
| circle          | 是否为圆形按钮               | boolean                                                   | false    |
| plain           | 是否为朴素按钮               | boolean                                                   | false    |
| text            | 是否为文字按钮               | boolean                                                   | false    |
| bg              | 文字按钮是否显示背景色       | boolean                                                   | false    |
| link            | 是否为链接按钮               | boolean                                                   | false    |
| loading         | 是否为加载中状态             | boolean                                                   | false    |
| loadingIcon     | 自定义加载中状态图标组件     | string                                                    | ''       |
| icon            | 图标组件                     | string                                                    | ''       |
| autoInsertSpace | 两个中文字符之间自动插入空格 | boolean                                                   | true     |

### Events

| 事件名 | 说明           | 回调参数                    |
| ------ | -------------- | --------------------------- |
| click  | 点击按钮时触发 | (event: MouseEvent) => void |
