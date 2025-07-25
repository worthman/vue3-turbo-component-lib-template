# Dialog 对话框

对话框组件，用于在不离开当前页面的情况下与用户进行交互。

## 基础用法

Dialog 弹出一个对话框，适合需要定向确认的场景。

<demo vue="ui/dialog/basic.vue" />

## 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了自定义样式的表单的例子。

<demo vue="ui/dialog/custom.vue" />

## 居中布局

标题和底部可水平居中

<demo vue="ui/dialog/center.vue" />

## 自定义头部

可以通过 `header` 插槽来自定义标题区的内容。若使用 `header` 插槽，则 `title` 属性会被忽略。

<demo vue="ui/dialog/custom-header.vue" />

## 可拖拽对话框

设置 `draggable` 属性为 `true` 即可使对话框可拖拽。

<demo vue="ui/dialog/draggable.vue" />

## API

### Props

| 属性               | 说明                                 | 类型    | 默认值 |
| ------------------ | ------------------------------------ | ------- | ------ |
| open               | 是否显示 Dialog                      | boolean | false  |
| title              | Dialog 的标题                        | string  | ''     |
| width              | Dialog 的宽度                        | string  | '50%'  |
| customClass        | Dialog 的自定义类名                  | string  | ''     |
| center             | 是否对头部和底部采用居中布局         | boolean | false  |
| showClose          | 是否显示关闭按钮                     | boolean | true   |
| modal              | 是否需要遮罩层                       | boolean | true   |
| closeOnClickModal  | 是否可以通过点击遮罩层关闭 Dialog    | boolean | true   |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog     | boolean | true   |
| showFooter         | 是否显示底部操作区                   | boolean | false  |
| fullscreen         | 是否全屏显示                         | boolean | false  |
| draggable          | 是否可拖拽                           | boolean | false  |
| top                | Dialog CSS 中的 margin-top 值        | string  | '15vh' |
| footerContent      | 自定义底部内容，会替换默认的底部内容 | string  | ''     |

### Events

| 事件名 | 说明                        | 回调参数 |
| ------ | --------------------------- | -------- |
| close  | Dialog 关闭的回调           | -        |
| open   | Dialog 打开的回调           | -        |
| opened | Dialog 打开动画结束时的回调 | -        |
| closed | Dialog 关闭动画结束时的回调 | -        |

### Slots

| 插槽名  | 说明                                    |
| ------- | --------------------------------------- |
| default | Dialog 的内容                           |
| header  | Dialog 标题区的内容，会替换标题部分     |
| footer  | Dialog 底部区的内容，会替换底部按钮部分 |

## 样式

对话框可以使用以下类名进行样式定制：

- `.v-dialog__wrapper`: 对话框外层容器。
- `.v-dialog`: 对话框主体。
- `.v-dialog__header`: 对话框头部。
- `.v-dialog__title`: 对话框标题。
- `.v-dialog__headerbtn`: 对话框关闭按钮。
- `.v-dialog__close`: 对话框关闭图标。
- `.v-dialog__body`: 对话框内容区域。
- `.v-dialog__footer`: 对话框底部区域。
- `.v-dialog__footer-buttons`: 对话框底部按钮区域。
