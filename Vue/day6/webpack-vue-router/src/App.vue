<template>
    <div>
        <h1>这是 App 组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>

        <!-- 设置颜色 -->
        <mt-button type="default" @click=show()>default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
</template>

<script>
// 按需导入 Toast 组件
import { Toast } from 'mint-ui';

export default{
    data(){
        return{
            totalInstance : null
        };
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){ // 模拟获取列表的一个 ajax 方法
            this.show(); // 在获取数据之前，立即弹出 Toast 提示用户，正在加载数据

            setTimeout(() => {
                // 当3s过后，要把 Toast 移除
                this.totalInstance.close()
            }, 3000)
        },
        show(){
            this.totalInstance = Toast({
                message:'这是消息',
                duration:-1, // 单位毫秒 , 如果是 -1 则弹出后不消失
                position:'top', // 提示消息在顶部展示
                iconClass: 'oi oi-account-login',
                className:'mytoast' // 自定义 Toast 样式，需要自己提供类

            })
        }
    }
}
</script>

<style>

</style>