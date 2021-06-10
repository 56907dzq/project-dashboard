<template>
    <div class="noahv-layout">
        <div class="noahv-layout-header noahv-layout-header-sidebar">
            <div class="noahv-layout-header-inner">
                <Logo :logo="headerConfig.logo"></Logo>
                <headerLink
                    :header="headerConfig.headerConf"
                    @header-item-event="changeHeaderItem"
                    @has-children-event="changeHeaderHasChildren"
                >
                </headerLink>
                <User />
            </div>
        </div>
        <!-- pleas keep this node -->
        <div class="noahv-layout-content noahv-layout-content-header-sidebar">
            <div class="noahv-layout-content-wrapper">
                <div class="noahv-layout-breadcrumb">
                    <Breadcrumb :separator="headerConfig.separator">
                        <template v-for="(item, index) in breadcrumb">
                            <BreadcrumbItem>
                                {{item.label}}
                            </BreadcrumbItem>
                        </template>
                    </Breadcrumb>
                </div>
                <Row class="noahv-layout-content-sidebar">
                    <sidebarLink :header="headerConfig" :span="hasChildrenFlag ? 4 : 0"></sidebarLink>
                    <Col class="noahv-layout-content-main-root" :span="hasChildrenFlag ? 20 : 24">
                        <div class="noahv-layout-content-main">
                            <router-view></router-view>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="noahv-layout-footer">
            <!-- you can diy footer in this content -->
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import config from '../header'
import headerHandler from '../../myheader';
import sidebarLink from './header-sidebar/sidebarLink';
import headerLink from './header-sidebar/headerLink';
import User from './header-sidebar/user';
import Logo from './header-sidebar/logo';


export default {
    name: 'sa-home',
    components: {
        sidebarLink,
        headerLink,
        Logo,
        User
    },
    data() {
        return {
            headerConfig: {"separator": "/", "headerConf": []},
            hasChildrenFlag: false,
            breadcrumb: [],
            tempBreadCrumb: [],
        }
    },
    created() {
        this.headerConfig = headerHandler(config)
        this.getDefaultBreadcrumb()
        this.selectItemByNotInHeader();
    },
    watch: {
        // '$route': 'getDefaultBreadcrumb'
        '$route': 'routerChange'
    },
    methods: {
        routerChange() {
            const path = this.$route.path.replace(/[\^/]/, '');
            const flag = this.headerConfig.linkInHeader(path);
            if (!flag) {
                this.headerConfig.unSelectedItem(this.headerConfig.headerConf);
                this.selectItemByNotInHeader();
            }
            else {
                const item = this.headerConfig.getCurrentItem('link', path);
                this.fullPath = [];
                this.getFullRouterPath(path);
                const fullPath = this.fullPath.join(';');
                this.changeSidebarItem(item, fullPath);
            }
        },
        changeHeaderItem(item) {
            this.headerConfig.headerConf.forEach(headerItem => {
                headerItem.selected = false;
                if (headerItem.key === item.key) {
                    headerItem.selected = true;

                    // header click is router, change the breadcrumb
                    if (headerItem.link) {
                        this.breadcrumb = [headerItem];
                    }
                }
            });

            // the new property can't be watched, so set the new header for watch
            this.headerConfig.headerConf = this.headerConfig.headerConf.slice(0);

        },
        changeHeaderHasChildren(flag) {
            this.hasChildrenFlag = flag;
        },
        selectedItemsBySidebarClick(item, selectedKey) {
            item.forEach(curItem => {
                if (_.indexOf(selectedKey, curItem.key) !== -1) {
                    curItem.selected = true;

                    if (_.indexOf(this.tempBreadCrumb, curItem) === -1) {
                        this.tempBreadCrumb.push(curItem);
                    }
                    if (curItem.children) {
                        this.selectedItemsBySidebarClick(curItem.children, selectedKey);
                    }
                }
            });
        },
        selectItemByNotInHeader() {
            if (this.$route.meta.root) {
                const root = this.$route.meta.root.replace(/[\^/]/, '');
                const item = this.headerConfig.getCurrentItem('link', root);
                this.changeHeaderItem(item);
            }
        },
        getDefaultBreadcrumb() {
            const path = this.$route.path.replace(/[\^/]/, '');
            // console.log("path", path)
            if (path !== '') {
                const item = this.headerConfig.getCurrentItem('link', path);
                // console.log("item", item)
                this.breadcrumb = [];
                if (Object.keys(item).length) {
                    this.breadcrumb.unshift(item);
                }

                if (item.parent && item.parent !== null) {
                    this.changeBreadcrumb(item.parent);
                }

                const breadcrumb = [];
                this.breadcrumb.forEach(breadItem => {
                    breadcrumb.push(breadItem.key);
                });

                const key = breadcrumb.join(';');

                if (key === '') {
                    return;
                }
                this.changeSidebarItem(item, key);

                // change the hasChildrenFlag
                const topItem = this.headerConfig.getCurrentItem('key', this.breadcrumb[0].key);
                if (topItem.children) {
                    this.hasChildrenFlag = true;
                }
            }
        },
        changeBreadcrumb(item) {
            const list = this.headerConfig.getCurrentItem('key', item);

            if (Object.keys(list).length) {
                this.breadcrumb.unshift(list);
            }

            if (list.parent !== null) {
                this.changeBreadcrumb(list.parent);
            }
        },
        changeSidebarItem(item, key) {
            const selectedKey = key.split(';');
            this.headerConfig.unSelectedItem(this.headerConfig.headerConf);
            // when header map set the tempBreadCrumb empty
            this.headerConfig.headerConf.forEach(curItem => {
                this.tempBreadCrumb = [];
                if (_.indexOf(selectedKey, curItem.key) !== -1) {
                    curItem.selected = true;
                    this.tempBreadCrumb.push(curItem);

                    if (curItem.children) {
                        this.selectedItemsBySidebarClick(curItem.children, selectedKey);
                    }

                }
            });
            this.selectedItemsBySidebarClick(this.headerConfig.headerConf, selectedKey);
            this.headerConfig.headerConf = this.headerConfig.headerConf.slice(0);

            // update the breadcrumb
            this.breadcrumb = this.tempBreadCrumb;
        }
    }
};
</script>