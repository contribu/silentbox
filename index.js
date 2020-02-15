import single from './components/single.vue'
import group from './components/group.vue'
import item from './components/item.vue'

const VueSilentbox = {}

VueSilentbox.install = function(Vue, options) {
  Vue.mixin({
    components: {
      'silentbox-single': single,
      'silentbox-group': group,
      'silentbox-item': item
    }
  })
}

export { VueSilentbox as default, single as Single, group as Group, item as Item }
