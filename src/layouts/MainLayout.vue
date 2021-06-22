<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Welcome to CILA!!!
        </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <signup/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import signup from 'components/signup.vue'
//import signin from 'components/signin.vue'
const linksData = [
  {
    title: 'Home',
    caption: 'Cila Home Page',
    icon: 'school',
    link: 'https://www.cilalabs.com/'
  },
  {
    title: 'Our Story',
    caption: 'Know Our Development Story',
    icon: 'code',
    link: 'https://www.cilalabs.com/our-story'
  },
  {
    title: 'Slack Chat Channel',
    caption: 'Slack Channel',
    icon: 'chat',
    link: 'https://cilalabs.slack.com/'
  },
  {
    title: 'Blog',
    caption: 'Explore our Blog!',
    icon: 'record_voice_over',
    link: 'https://www.cilalabs.com/blog'
  },
];

export default {
  name: 'MainLayout',
  components: { 
    EssentialLink,
    signup,
    // signin 
    },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
