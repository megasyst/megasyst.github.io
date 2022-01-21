<template>
  <div class="fit row wrap justify-start items-stretch content-start">
    <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md white-page">
      <div class="q-mb-sm text-h4">
        {{ $t('index_chapter_1_title') }}
      </div>

      <p>
        {{ $t('index_chapter_1') }}
      </p>

      <p>
        {{ $t('index_chapter_2_title') }}:
        <ul>
          <li>{{ $t('index_chapter_2_item_1') }},</li>
          <li>{{ $t('index_chapter_2_item_2') }},</li>
          <li>{{ $t('index_chapter_2_item_3') }},</li>
          <li>{{ $t('index_chapter_2_item_4') }}.</li>
        </ul>
      </p>
        
      <div class="q-mb-sm text-h5">{{ $t('index_chapter_3_title') }}:</div>
      
      <div class="row justify-start">
        <q-card flat class="col-sm-6 col-xs-12 column">
          <q-card-section style="flex-grow: 1">
            <div class="text-h6 text-secondary">{{ $t('mobile_subscriptions') }}</div>
            <div class="text-subtitle2">{{ $t('index_chapter_3_card_1') }}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="touch_app" :to="{path: '/subscriptions/click'}">Click</q-btn>
            <q-btn flat icon="fingerprint" :to="{path: '/subscriptions/pin'}">PIN</q-btn>
            <q-btn flat icon="chat" :to="{path: '/subscriptions/sms'}">SMS</q-btn>
          </q-card-actions>
        </q-card>

        <q-card flat class="col-sm-6 col-xs-12 column">
          <q-card-section style="flex-grow: 1">
            <div class="text-h6 text-secondary">{{ $t('one_time_payments') }}</div>
            <div class="text-subtitle2">{{ $t('index_chapter_3_card_2') }}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="touch_app" :to="{path: '/otp/click'}">Click</q-btn>
            <q-btn flat icon="fingerprint" :to="{path: '/otp/pin'}">PIN</q-btn>
            <q-btn flat icon="chat" :to="{path: '/otp/sms'}">SMS</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>
