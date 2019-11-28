# mobile-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### keep-alive
See (https://segmentfault.com/a/1190000010546663).

`activated`: 在组件被激活时调用，在组件第一次渲染时也会被调用，之后每次keep-alive激活时被调用
`deactivated`: 在组件被停用时调用
1. 当引入keep-alive的时候，页面第一次进入，钩子的触发顺序`created-> mounted-> activated`，退出时触发`deactivated`
2. 当再次进入（前进或者后退）时，只触发`activated`，退出时触发`deactivated`
3. 被包含在 `<keep-alive>` 中创建的组件，会多出两个生命周期的钩子: `activated` 与 `deactivated`
4. 只有组件被 `keep-alive` 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用
5. 在 2.1.0 版本之后，使用 `exclude` 排除之后，就算被包裹在 keep-alive 中，这两个钩子依然不会被调用！
方法一：
```
// id: this.$route.query.id this.id 只会被调用一次
activated() {
  const id = this.$route.query.id
  api(id).then(data => {
    this.data = data
  })
}
deactivated() {
  this.data = ''
}
```
// 方法二
```
<keep-alive exclude="Article">
  <router-view class="app-view"></router-view>
  </keep-alive>
<script>

export default {
  name: 'Article'
}
</script>
```
### 动画
```
components -> Comments
```
### timestamp -> date
```
utils -> format.js
```