<template>
    <div class="row">
        <div class="widget-item col-md-5">
            <div class="overview-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-internet"></use>
                </svg>
                <p><b>2</b> Internet</p>
            </div>  
        </div>
        <div class="widget-item col-md-5">
            <div class="overview-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-apigatewayAPIwangguan"></use>
                </svg>
                <p><b>2</b> GW</p>
            </div>
        </div>
        <div class="widget-item col-md-5">
            <div class="overview-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-site"></use>
                </svg>
                <p><b>3</b> Site</p>
            </div>
        </div>
        <div class="widget-item col-md-5">
            <div class="overview-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-routerwireless"></use>
                </svg>
                <p><b>5</b> Device</p>
            </div>
        </div>
        <div class="widget-item col-md-5">
            <div class="overview-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shebei"></use>
                </svg>
                <p><b>6</b> AP</p>
            </div>
        </div>
    </div>
</template>

<script>
import '../util/iconfont.js'
export default {
    name: 'overview',
    data() {
        return {
            step: 7,
            distance: 7,
             datas: [
                {
                    name: '阶段1',
                    status: 'finished'
                },
                {
                    name: '阶段2',
                    status: 'running'
                }
             ]
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style scoped lang="less" >
.row {
    text-align: center;
    padding: 10px 0;
    .widget-item {
        .overview-item {
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 8px 15px;
            .icon {
                width: 3em;
                height: 3em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
                margin-bottom: 2px;
            }
            p b{
                // color: red;
            }
        }
    } 
}
</style>
