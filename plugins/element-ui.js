import Vue from 'vue'
import {Rate,Message} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(Rate,Message, { locale })

Vue.prototype.$message = Message;