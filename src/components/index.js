import Vue from 'vue'
import vnApp from '@/components/layouts/App'
import vnLayout from '@/components/layouts/Layout'

const Components = {
  vnApp,
  vnLayout
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
