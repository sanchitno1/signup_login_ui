<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        rounded filled
        v-model="name"
        label="First name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your Valid First Name']"
      ></q-input>
      <q-input
        rounded filled
        v-model="last_name"
        label="Last name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your Valid Last Name']"
      ></q-input>

      <q-input
        rounded filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      ></q-input>
      <q-input
        rounded filled
        type="number"
        v-model="phone"
        label="Phone Number *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type correct number',
          val => val > 0 && val.length < 11 || 'Please type a correct number'
        ]"
      ></q-input>
      <q-input
        rounded filled
        v-model="email"
        label="Enter your email-id *"
        lazy-rules
        :rules="[
           val => val && val.length > 6 || 'Please type your Valid User Name']"
      ></q-input>
      <q-input
        rounded filled
        v-model="password"
        label="Enter your Password *"
        lazy-rules
        :rules="[
           val => val && val.length > 7 || 'Password must have at least 7 characters long']"
      ></q-input>

      <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

      <div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
      <hr>
      <p><strong>Have already an account ?</strong></p>
         <q-btn label="Sign In" @click="gotoSignIn()" color="secondary"></q-btn>
  </q-form>
</template>


<script>
export default {
  name:'signup',
  data () {
    return {
      name: null,
      last_name:null,
      age: null,
      phone:null,
      email:null,
      password:null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
           alert('You need to accept the license and terms first')
      }
      else {
          this.$router.push('/submitted')
       
      }
      const data={      //this code demonstrates that our data is reflected in console properly.
        name: this.name,
        last_name:this.last_name,
        age: this.age,
        phone:this.phone,
        email:this.email,
        password:this.password,
      };
      console.log(data) 
    },

    onReset () {
      this.name = null
      this.age = null
      this.last_name = null
      this.phone = null
      this.email = null
      this.password = null
      this.accept = false
    },
    gotoSignIn(){
      this.$router.push('/signin')
  }
  }
}

 
</script>