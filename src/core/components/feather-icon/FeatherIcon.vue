<script>
// import * as icons from 'vue-feather-icons'
import feather from 'feather-icons'
import {h,toRefs} from 'vue'

export default {
  name: 'FeatherIcon',
  functional: true,
  props: {
    icon: {
      required: false,
      type: [String, Object],
      default:'HomeIcon'
    },
    size: {
      type: String,
      default: '14',
    },
    badge: {
      type: [String, Object, Number],
      default: null,
    },
    badgeClasses: {
      type: [String, Object, Array],
      default: 'badge-primary',
    },
  },

  setup(props){

    const {size,badge,icon,badgeClasses} = toRefs(props)

    return () => {  

      const svg =  h('div', { innerHTML: feather.icons[icon.value].toSvg({width:size.value,height:size.value}) });

      if (!badge.value) return svg

      const badgeEl = h('span', { class: ['badge badge-up rounded-pill',badgeClasses.value] }, [badge.value])

      return h('span', { class: 'feather-icon position-relative' },[svg,badgeEl])
    }

  },
}
</script>

<style lang="scss">



svg.feather {
  outline: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
