import {ref,computed} from 'vue'

export const useTogglePasswordVisibility = () => {

  const passwordFieldType = ref('password');

  const togglePasswordVisibility = ()  => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
  }
  const passwordToggleIcon = computed(() => {
    return passwordFieldType.value === 'password' ? 'eye' : 'eye-slash'
  })

  return {
    passwordFieldType,
    togglePasswordVisibility,
    passwordToggleIcon
  }

}

export const _ = null
