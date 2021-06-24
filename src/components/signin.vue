<template>
    <div>
    <p style="font-size:30px">
        <center>Welcome, Enter Login Details</center>
    </p>
     <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-px-md">
                    <label>Username</label>
                    <q-input
                        ref="email"
                        outlined
                        v-model="email"
                        label="Username"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val && val.length > 7 || 'Please type valid email']"           
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
       <div class="row">
              <div class="col-4"></div>
                <div class="col-5">
                  <div class="col q-pt-lg q-px-md">
                    <label>Password</label>
                    <q-input
                        ref="password"     
                        outlined
                        v-model="password"
                        label="Enter Password" 
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val && val.length > 7 || 'Please type valid password',
                                  ]"           
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-7">
                <router-link style="font-size:18px;color:blue;" to="/password">*Forget Your Password</router-link>
            </div>
            <div class="col-4"></div>
        </div><br>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-5">
          <q-btn class="primary full-width q-px-xl" label="Sign In" color="primary" @click.prevent.stop="onSignin()"></q-btn>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row">
        <div class="col-5"></div>
        <div class="col-3">
          <h6>
            Don't have an account?
            <router-link style="text-decoration: none;" to="/signup">Register</router-link>
          </h6>
        </div>
        <div class="col-5"></div>
      </div>
    </div>
</template>

<script>
export default {
    name:'signin',
    data(){
        return{
            email:null,
            password:null,
        }
    },
    methods:{
      onSignin(){
         this.$refs.email.validate()
        this.$refs.password.validate()
        if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true 
      }
      else{
        this.$router.push('/welcome')
      }
      }
    }
}
</script>

