<script>

// import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'

// const { t } = useI18nUtils()
const { canViewVerticalNavMenuHeader } = useAclUtils()

import {h,toRefs} from 'vue'

export default {

  props:{
    item: {
      type: Object,
      required: true,
    },
  },

  setup(props){
    const {item} = toRefs(props)
    

   

    return () => {
      const span = h('span', {}, item.value.header)
      const icon = h('font-awesome', { props: { icon: 'MoreHorizontalIcon', size: '18' } })
      if (canViewVerticalNavMenuHeader(this.item)) {
       return  h('li', { class: 'navigation-header text-truncate' }, [span, icon])
      }
      return h();
    }
  }

 
}
</script>
