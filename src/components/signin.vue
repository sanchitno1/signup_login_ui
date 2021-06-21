<template>
    <q-form 
    class="q-gutter-md"
    >
    <p><strong>
        <center><h4><u>
            Login to Continue
        </u></h4></center>
    </strong></p>
    <q-input
        rounded filled
        v-model="email"
        label="Enter Your E-Mail *"
        lazy-rules
        :rules="[ val => val && val.length > 6 || 'Please type your Valid E-Mail']"
      ></q-input>
      <q-input
        rounded filled
        v-model="password"
        label="Enter Your Password *"
        lazy-rules
        :rules="[ val => val && val.length > 7 || 'Please type your Valid Password']"
      ></q-input>
      <div>
          <q-btn @click="onLogin()" label="Sign In" color="secondary"></q-btn>
          <q-btn @click="forgetPassword()" label="Forget Password" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
        <hr>
         <q-btn @click="onSignUp()" label="Sign Up" color="primary"></q-btn>
      <div>
          <img src="~assets/cila2.jpg" alt="Cila" height="400px" width="100%">
      </div>
    </q-form>
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
        onLogin(){
            if(this.email==null || this.password==null){
                alert("Enter the correct credentials")
            }else
            this.$router.push('/welcome')
        },
        forgetPassword(){
            this.$router.push('/password')
        },
        onSignUp(){
            this.$router.push('/signup')
        }
        
    }
}
</script>
