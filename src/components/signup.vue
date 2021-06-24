<template>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-lg q-pt-xl">
          <div class="q-gutter">
            <div class="flex flex-center">
              <p class="text-weight-medium text-h5">Welcome,Create Account</p>
            </div>
   
            <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>First Name</label>
                    <q-input
                      outlined
                      ref="firstName"
                      v-model="firstName"
                      label="First Name"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Please type your First Name']"
                    ></q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>Last Name</label>
                    <q-input
                        outlined
                        ref="lastName"
                        v-model="lastName"
                        label="Last Name"
                        class="q-mt"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your Last Name']"
                      >
                    </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>Enter Your Age</label>
                    <q-input
                        outlined
                        ref="age"
                        v-model="age"
                        label="Age"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your Age',
                          val => val > 0 && val <100 || 'Please enter your correct age']"
                        >
                    </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>  
             <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>Contact</label>
                    <q-input
                        outlined
                        ref="phone"
                        v-model="phone"
                        label="Contact"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val !== null && val !== '' || 'Please type correct number',
                                  val => val > 0 && val.length < 11 || 'Please type a correct number']"
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
             <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>Enter Your Username</label>
                    <q-input
                        outlined
                        ref="email"
                        v-model="email"
                        label="Username"
                        class="q-mt "
                        lazy-rules
                        :rules="[
                                  val => val !== null && val !== '' || 'Please type correct email',
                                  val => val  && val.length > 6 || 'Please type a correct email'
                                  ]"
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-py-none">
                    <label>Create Password</label>
                    <q-input
                        outlined
                        ref="password"
                        v-model="password"
                        label="Create Password"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val && val.length > 7 || 'Password must have at least 7 characters long']"           
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
              <div class="col-5">
                <q-btn class="primary full-width q-px-xl" label="SignUp" color="primary" @click.prevent.stop="onSubmit()"></q-btn>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
                <div class="col-5"></div>
                <div class="col-3">
                  <h6>
                    Already have an account?
                    <router-link style="text-decoration: none;" to="/signin">Login</router-link>
                  </h6>
                </div>
                <div class="col-5"></div>
            </div>
          </div>
        </q-page> 
      </q-page-container>  
  </q-layout>
</template>


<script>
export default {
  name:'signup',
  data () {
    return {
      firstName: null,
      lastName:null,
      age: null,
      phone:null,
      email:null,
      password:null,
      accept: false
    }
  },
  methods: {
    onSubmit () { 
          this.$refs.firstName.validate()
          this.$refs.lastName.validate() 
          this.$refs.age.validate()    
          this.$refs.phone.validate()     
          this.$refs.email.validate()
          this.$refs.password.validate()
          if (this.$refs.firstName.hasError||this.$refs.lastName.hasError||
              this.$refs.age.hasError|| this.$refs.phone.hasError||
              this.$refs.email.hasError || this.$refs.password.hasError) {
              this.formHasError = true 
        } else{
          this.$router.push('/submitted')
      }
    }
    
    }
}
 
</script>