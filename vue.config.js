module.exports = {
    chainWebpack: config => {
        config.resolve.set("symlinks", false);
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            return {
                externals: {
                    "vue-class-component": {
                        commonjs: "vue-class-component",
                        commonjs2: "vue-class-component"
                    },
                    "vue-property-decorator": {
                        commonjs: "vue-property-decorator",
                        commonjs2: "vue-property-decorator"
                    },
                    "portal-vue": {
                        commonjs: "portal-vue",
                        commonjs2: "portal-vue"
                    },
                    vue: {
                        commonjs: "vue",
                        commonjs2: "vue"
                    }
                }
            };
        }
    }
};
