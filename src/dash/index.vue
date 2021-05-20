<template>
    <div class="dash-index">
        <!-- <div class="col-lg-4 col-xs-8">  
            <div class="small-box bg-aqua">
                <div class="inner">
                    <h3><countTo :startVal='0' :endVal='global.length' :duration='duration'></countTo></h3>
                    <p>关联集团数</p>
                </div>
                <div class="icon">
                    <i class="fa fa-bank"></i>
                </div>
                <a class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-xs-8">
            <div class="small-box bg-green">
                <div class="inner">
                    <h3><countTo :startVal='0' :endVal='site_length' :duration='duration'></countTo></h3>
                    <p>关联门店数</p>
                </div>
                <div class="icon">
                    <i class="fa fa-map-marker"></i>
                </div>
                <a class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-xs-8">
            <div class="small-box bg-yellow">
                <div class="inner">
                    <h3><countTo :startVal='0' :endVal='device_length' :duration='duration'></countTo></h3>
                    <p>关联设备数</p>
                </div>
                <div class="icon">
                    <i class="fa fa-laptop"></i>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    name: 'dash-index',
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style lang="less" >
    .dash-index {

    }
</style>
