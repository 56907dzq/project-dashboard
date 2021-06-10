<template>
    <ul class="noahv-layout-login">
        <li>
            <div class="menu-div" :class="{hover: isShow}" @mouseover="mouseover($event)" @mouseout="mouseout($event)">
                <a href="javascript:;" ><Icon type="person"></Icon>{{username}}</a>
                <ul class="menu-list" v-show="isShow">
                    <li><a @click="UserLogout">退出</a></li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'User',
    data() {
        return {
            isShow: false
        };
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        mouseover() {
            this.isShow = true;
        },
        mouseout() {
            this.isShow = false;
        },
        UserLogout(){
            sessionStorage.removeItem('isLogin')
            this.$store.dispatch('setUserName', 'guest');
            this.$router.push('/login');
        }
    }
};
</script>
