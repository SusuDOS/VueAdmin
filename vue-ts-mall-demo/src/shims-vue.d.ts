/* eslint-disable */
// 识别vue文件类型,不配置是无法识别的.
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
