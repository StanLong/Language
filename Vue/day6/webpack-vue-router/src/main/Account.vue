<template >
    <div>
        <h1>这是 Account 组件</h1>
        <router-link to='/account/login'>登录</router-link>
        <router-link to='/account/register'>注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
/*普通的style标签只支持普通的样式，如果要启用 scss 或者 less， 需要为 style 元素设置 lang 属性 */
// 只要style标签是在 .vue 组件中定义的，那么推荐style开启 scoped 属性
body {
    div {
        font-style: italic;
    }
}
</style>