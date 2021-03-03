// 按需全局引入 vant组件
import Vue from 'vue'
import {
    Button,
    List,
    Cell,
    Tabbar,
    TabbarItem,
    Field,
    Popup,
    Picker,
    Image as VanImage,
    Lazyload,
    Toast
} from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Lazyload);
Vue.use(VanImage)
Vue.use(Toast);