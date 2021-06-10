<template>
    <div class="noahv-layout">
        <div class="noahv-layout-header">
            <!-- you can diy header in this content -->
        </div>
        <!-- pleas keep this node -->
        <div class="common-404">
            <Nv404
                :title="title"
                :tips="tips"
                :href="href"
            />
        </div>
        <div class="noahv-layout-footer">
            <!-- you can diy footer in this content -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'common-404',
    data() {
        return {
            title: '404',
            tips: '啊嘞，找不到路了~',
            href: '#/'
        };
    }
};
</script>

<style lang="less">
.common-404 {

}
</style>
