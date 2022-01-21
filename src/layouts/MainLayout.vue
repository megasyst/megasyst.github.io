<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer bordered show-if-above v-model="leftDrawerOpen">
      <main-menu />
    </q-drawer>

    <q-page-container>
      <div class="fit row wrap justify-start items-stretch content-start">
        <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 white-page" id="header">
          <q-toolbar class="q-gutter-xs q-ma-none">
            <q-avatar size="xs" v-if="!leftDrawerOpen">
              <img src="icons/favicon-128x128.png">
            </q-avatar>

            <q-toolbar-title v-if="!leftDrawerOpen">
              Megasyst API
            </q-toolbar-title>

            <q-toolbar-title v-else>
              <!-- Just make a space for right alignment -->
            </q-toolbar-title>

            <q-btn dense flat round color="secondary" icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

            <q-select borderless dense emit-value map-options :options="available_locales" v-model="locale" />
          </q-toolbar>
        </div>
      </div>

      <router-view />

      <div class="fit row wrap justify-start items-stretch content-start">
        <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md q-pt-xl text-right white-page" id="footer">
          &copy; Megasyst
        </div>
      </div>

    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import MainMenu from '../components/main_menu.vue'

const available_locales = [
  { label: 'English', value: 'en-US' },
  { label: 'Русский', value: 'ru-RU' },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainMenu
  },

  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    const leftDrawerOpen = ref(false)

    return {
      available_locales,
      locale,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
