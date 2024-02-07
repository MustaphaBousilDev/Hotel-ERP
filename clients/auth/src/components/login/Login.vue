<script setup>
  import { Form, Field } from 'vee-validate'
  import * as Yup from 'yup'
  import './login.scss'
  import Users from '../icons/User.vue'
  import Emails from '../icons/Email.vue'
  import Password from '../icons/Password.vue'

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  function onSubmit(values){
    const { username, password } = values 
  }
</script>

<template>
  <div class="card w-full h-screen relative">
      <div class="card-body z-30  relative auth">
          <Form 
            class="form shadow-md rounded-lg overflow-hidden"
            @submit="onSubmit" 
            :validation-schema="schema" 
            v-slot="{ errors, isSubmitting }"
          >
              <div class="logo">
                <img 
                class=" w-full h-full"
                src="https://www.hotel-versailles-chantiers.com/wp-content/uploads/versailles-chantiers/accueil/chambre-confort-versailles-hotel-versailles-chantiers-1200x1403.webp"
                alt="" />
              </div>
              <div class="content px-6 md:px-10 lg:px-14  py-5 bg-white flex flex-col gap-3">
                <div class="form-group">
                  <div class="  py-4  flex items-center justify-center">
                      <Users
                      className="  border-2 p-4 border-black rounded-full" 
                      width="120" 
                      height="120" 
                      color="#000"
                    />
                  </div>
                </div>
                <div class=" flex flex-col gap-3  mt-3">
                  <div class="form-group">
                    <div class="border w-full  relative  rounded-lg overflow-hidden">
                      <Emails 
                        width="17" 
                        height="17" 
                        class=" icon-input-left "
                        color="grey" 
                      />
                      <Field 
                        name="username" 
                        placeholder="email"
                        type="text" 
                        class="input ml-5 py-3 px-3 w-full  outline-none 
                        border-gray-400 bg-white transition" 
                        :class="{ 'is-invalid': errors.username }" 
                      />
                    </div>
                    <span class="invalid-feedback">{{ errors.username }}</span>
                  </div>
                  <div class="form-group">
                    <div class="border w-full relative  rounded-lg overflow-hidden">
                      <Password
                        width="17" 
                        height="17" 
                        class=" icon-input-left text-red-400"
                        color="grey" 
                      />
                      <Field 
                        name="password" 
                        placeholder="*********"
                        type="password" 
                        class="input ml-5 py-3 px-3 w-full  outline-none 
                        border-gray-400 bg-white transition" 
                        :class="{ 'is-invalid': errors.password }" 
                      />
                    </div>
                    <span class="invalid-feedback">{{ errors.password }}</span>
                  </div>
                  <div class="form-group">
                    <button 
                      class="button-login rounded-lg w-full py-3 bg-blue-500 text-white" 
                      :disabled="isSubmitting"
                    >
                      <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                      Login
                    </button>
                    <router-link to="register" class="btn btn-link">Register</router-link>
                  </div>
                </div>
              </div>
          </Form>
      </div>
  </div>
</template>