import OurVue, { VueConstructor } from "vue";
import * as components from "./components";

const CompnentLibrary = {
    install(Vue: VueConstructor) {
        if (OurVue !== Vue) {
            console.error(`Multiple instances of Vue detected!`);
        }
        const list: any = components;
        for (const componentName in list) {
            const component = list[componentName];
            Vue.component(component.name, component);
        }
    }
};

export default CompnentLibrary;

export * from "./components";

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(CompnentLibrary);
}
