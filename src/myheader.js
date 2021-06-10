const headerHanlder = config => {
    const {header, hasBread} = config;

    // default hasBread
    let hasBreadSource = hasBread !== false;


    // the headerMap array
    let headerMap = [];
    let redirectRouter = '';


    function getHeaderMap(headers) {
        if (Array.isArray(headers)) {
            headers.forEach(item => {
                if (typeof item.parent === 'undefined') {
                    item.parent = null;
                }
                headerMap.push(item);

                if (item.children) {
                    item.children.forEach(chItem => {
                        chItem.parent = item.key;
                        return null;
                    });

                    getHeaderMap(item.children);
                }
            });
        }
    }

    getHeaderMap(header);

    const getCurrentItem = (key, value) => {
        let res = {};
        headerMap.forEach(item => {
            if (item[key] && item[key] === value) {
                res = item;
            }
        });

        return res;
    };

    const unSelectedItem = item => {
        item.forEach(curItem => {
            curItem.selected = false;
            if (curItem.children) {
                unSelectedItem(curItem.children);
            }
        });
    };

    const linkInHeader = path => {
        let inHeaderFlag = false;
        headerMap.forEach(item => {
            if (item.link === path) {
                inHeaderFlag = true;
            }
        });
        return inHeaderFlag;
    };


    const addSelectedProperty = header => {
        header.forEach(item => {
            if (typeof item.selected === 'undefined') {
                item.selected = false;

                if (item.children) {
                    addSelectedProperty(item.children);
                }
            }
        });
    };

    addSelectedProperty(header);

    function getRedirectRouter(data) {
        data.forEach(item => {
            if (item.selected) {
                if (!item.children) {
                    redirectRouter = item.link;
                }
                else {
                    getRedirectRouter(item.children);
                }
            }
        });
    }

    getRedirectRouter(header);

    return {
        headerConf: config.header,
        logo: config.logo,
        hasBread: hasBreadSource,
        separator: config.separator,
        getCurrentItem: getCurrentItem,
        unSelectedItem: unSelectedItem,
        linkInHeader: linkInHeader
    };

};

export default headerHanlder;
