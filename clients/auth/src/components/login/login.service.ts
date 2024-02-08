import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup(){
    return { $v: useVuelidate()}
  },
  data(){
    return {
      form:{
        email: '',
        password: ''
      }
    }
  },
  validations(){
    return {
      form: {
        email: {
          required,email
        },
        password:{
          required,
          min: minLength(6)
        }
      }
    }
  }
}