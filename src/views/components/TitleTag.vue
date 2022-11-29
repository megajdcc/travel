<script>

import {h,toRefs} from 'vue'

export default {
   
   props:{
      tag:{
         type:String,
         default:'h5',
         required:false
      },
      title:{
         type:String,
         Default:'Modal Title',
         required:false
      },
      titleClass:{
         type:[String,Array,Object],
         default:'',
         required:false,
      }
   },

   setup(props){

      const {title,tag} = toRefs(props)

      return () => h(tag.value, { class: ['modal-title',props.titleClass] }, [title.value])
   }

   
  
}
</script>