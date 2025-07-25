export interface DialogProps {
  /**
   * 是否显示 Dialog
   */
  open: boolean;
  /**
   * Dialog 的标题
   */
  title?: string;
  /**
   * Dialog 的宽度
   */
  width?: string;
  /**
   * Dialog 的自定义类名
   */
  customClass?: string;
  /**
   * 是否为居中布局
   */
  center?: boolean;
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean;
  /**
   * 是否需要遮罩层
   */
  modal?: boolean;
  /**
   * 是否可以通过点击遮罩层关闭 Dialog
   */
  closeOnClickModal?: boolean;
  /**
   * 是否可以通过按下 ESC 关闭 Dialog
   */
  closeOnPressEscape?: boolean;
  /**
   * 是否显示底部操作区
   */
  showFooter?: boolean;
  /**
   * 是否全屏显示
   */
  fullscreen?: boolean;
  /**
   * 是否可拖拽
   */
  draggable?: boolean;
  /**
   * 顶部距离
   */
  top?: string;
  /**
   * 自定义底部内容，会替换默认的底部内容
   */
  footerContent?: string;
}

export interface DialogEmits {
  /**
   * Dialog 关闭的回调
   */
  (e: 'close'): void;
  /**
   * Dialog 打开的回调
   */
  (e: 'open'): void;
  /**
   * Dialog 打开动画结束时的回调
   */
  (e: 'opened'): void;
  /**
   * Dialog 关闭动画结束时的回调
   */
  (e: 'closed'): void;
  /**
   * 更新open属性的回调
   */
  (e: 'update:open', value: boolean): void;
}
