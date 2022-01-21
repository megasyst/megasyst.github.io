<template>
  <q-page>
    <q-toolbar class="q-ml-xs q-pl-md">
        <q-avatar size="xs">
          <img src="icons/favicon-128x128.png">
        </q-avatar>

        <q-toolbar-title>
          Megasyst API
        </q-toolbar-title>
    </q-toolbar>
      
    <q-list dark>
      <q-item clickable v-ripple :to="{path: '/'}">
        <q-item-section avatar>
          <q-icon color="white" name="home" />
        </q-item-section>

        <q-item-section>{{ $t('index_link') }}</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{path: '/country_and_carrier_identifiers'}">
        <q-item-section avatar>
          <q-icon color="white" name="language" />
        </q-item-section>

        <q-item-section>{{ $t('country_and_carrier_identifiers') }}</q-item-section>
      </q-item>

      <q-separator dark />
      
      <q-item-label header>{{ $t('mobile_subscriptions') }}</q-item-label>

      <q-item clickable v-ripple :to="{path: '/subscriptions/click'}">
        <q-item-section avatar>
          <q-icon color="white" name="touch_app" />
        </q-item-section>

        <q-item-section>{{ $t('via_click_method') }}</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{path: '/subscriptions/pin'}">
        <q-item-section avatar>
          <q-icon color="white" name="fingerprint" />
        </q-item-section>

        <q-item-section>{{ $t('via_pin_method') }}</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{path: '/subscriptions/sms'}">
        <q-item-section avatar>
          <q-icon color="white" name="chat" />
        </q-item-section>

        <q-item-section>{{ $t('via_sms_method') }}</q-item-section>
      </q-item>

      <!-- <q-separator dark class="q-mt-md" />
      
      <q-item-label header>{{ $t('one_time_payments') }}</q-item-label>

      <q-item clickable v-ripple :to="{path: '/otp/click'}">
        <q-item-section avatar>
          <q-icon color="white" name="touch_app" />
        </q-item-section>

        <q-item-section>{{ $t('via_click_method') }}</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{path: '/otp/pin'}">
        <q-item-section avatar>
          <q-icon color="white" name="fingerprint" />
        </q-item-section>

        <q-item-section>{{ $t('via_pin_method') }}</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{path: '/otp/sms'}">
        <q-item-section avatar>
          <q-icon color="white" name="chat" />
        </q-item-section>

        <q-item-section>{{ $t('via_sms_method') }}</q-item-section>
      </q-item> -->
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>

