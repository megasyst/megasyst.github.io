<template>
  <div class="fit row wrap justify-start items-stretch content-start">
    <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md white-page" style="padding-bottom: 0">
      <div class="q-mb-sm text-h4">
        {{ $t('mobile_subscriptions') }}
      </div>

      <div class="q-mb-sm text-h5">
        {{ $t('via_click_method') }}
      </div>

      <div>{{ $t('mobile_subscription_click_chapter_1_title') }}</div>

      <ul>
        <li>{{ $t('mobile_subscription_click_chapter_1_item_1') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_1_item_2') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_1_item_3') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_1_item_4') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_1_item_5') }}</li>
      </ul>

      <div class="text-h5">{{ $t('mobile_subscription_click_chapter_2_title') }}</div>

      <ol>
        <li>{{ $t('mobile_subscription_click_chapter_2_item_1') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_2_item_2') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_2_item_3') }}</li>
        <li>{{ $t('mobile_subscription_click_chapter_2_item_4') }}</li>
      </ol>
    </div>
  </div>

  <div class="fit row wrap justify-start items-stretch content-start">
    <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md white-page" style="padding-bottom: 0; padding-top: 0;">
      <ol class="q-pt-none" start="5" style="margin-top: 0">
        <li>
          {{ $t('mobile_subscription_click_chapter_2_item_5') }}
          <ul>
            <li><strong>ad_channel</strong> - {{ $t('parameter_description_ad_channel') }}</li>
            <li><strong>carrier</strong> - {{ $t('parameter_description_carrier') }}</li>
            <li><strong>country</strong> - {{ $t('parameter_description_country') }}</li>
            <li><strong>event</strong> = SUBSCRIPTION</li>
            <li><strong>flow</strong> = CLICK</li>
            <li><strong>id</strong> - {{ $t('parameter_description_order_id') }}</li>
            <li><strong>keyword</strong> - {{ $t('parameter_description_keyword') }}</li>
            <li><strong>service</strong> - {{ $t('parameter_description_service') }}</li>
            <li><strong>status</strong> - {{ $t('parameter_description_status') }}</li>
            <li><strong>status_code</strong> - {{ $t('parameter_description_status_code') }}</li>
            <li><strong>subscriber</strong> - {{ $t('parameter_description_subscriber') }}</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="col col-lg-6 col-md-4 col-sm-4 col-xl-8 col-xs-12 q-pa-md" style="padding-bottom: 0; padding-top: 0;">
      <div class="text-warning">{{ $t('mobile_subscription_click_chapter_2_item_5_example') }}</div>
      <div class="q-py-sm text-white" style="font-family: monospace; font-size: 0.8em; overflow-wrap: anywhere;">
        ad_channel=SYSTEM&amp;carrier=12345&amp;country=XX&amp;event=SUBSCRIPTION&amp;flow=CLICK&amp;id=12345678901234567890&amp;keyword=KEYWORD&amp;service=MYSERVICE&amp;status=SUCCESSFUL&amp;subscriber=12345678900
      </div>
    </div>
  </div>

  <div class="fit row wrap justify-start items-stretch content-start">
    <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md white-page" style="padding-top: 0">
      <ol class="q-pt-none" start="6" style="margin-top: 0">
        <li>
          {{ $t('mobile_subscription_click_chapter_2_item_6') }}
          <ul>
            <li><strong>ad_channel</strong> - {{ $t('parameter_description_ad_channel') }}</li>
            <li><strong>carrier</strong> - {{ $t('parameter_description_carrier') }}</li>
            <li><strong>country</strong> - {{ $t('parameter_description_country') }}</li>
            <li><strong>currency</strong> - {{ $t('parameter_description_currency') }}</li>
            <li><strong>data</strong> - {{ $t('parameter_description_web_data') }}</li>
            <li><strong>event</strong> = SUBSCRIPTION</li>
            <li><strong>flow</strong> = CLICK</li>
            <li><strong>free_period</strong> - {{ $t('parameter_description_free_period') }}</li>
            <li><strong>id</strong> - {{ $t('parameter_description_order_id') }}</li>
            <li><strong>ip</strong> - {{ $t('parameter_description_ip') }}</li>
            <li><strong>keyword</strong> - {{ $t('parameter_description_keyword') }}</li>
            <li><strong>need_mt_sms</strong> = {{ $t('parameter_description_need_mt_sms') }}</li>
            <li><strong>payment_schedule</strong> - {{ $t('parameter_description_payment_schedule') }}</li>
            <li><strong>previous_order</strong> - {{ $t('parameter_description_previous_order') }}</li>
            <li><strong>price</strong> - {{ $t('parameter_description_price') }}</li>
            <li><strong>service</strong> - {{ $t('parameter_description_service') }}</li>
            <li><strong>sn</strong> - {{ $t('parameter_description_sn') }}</li>
            <li><strong>status</strong> - {{ $t('parameter_description_status') }}</li>
            <li><strong>status_code</strong> - {{ $t('parameter_description_status_code') }}</li>
            <li><strong>subscriber</strong> - {{ $t('parameter_description_subscriber') }}</li>
            <li><strong>subscriber_currency</strong> - {{ $t('parameter_description_subscriber_currency') }}</li>
            <li><strong>subscriber_price</strong> - {{ $t('parameter_description_subscriber_price') }}</li>
            <li><strong>time</strong> - {{ $t('parameter_description_time') }}</li>
            <li><strong>user_agent</strong> - {{ $t('parameter_description_user_agent') }}</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="col col-lg-6 col-md-4 col-sm-4 col-xl-8 col-xs-12 q-pa-md" style="padding-bottom: 0; padding-top: 0;">
      <div class="text-warning">{{ $t('mobile_subscription_click_chapter_2_item_6_example') }}</div>
      <div class="q-py-sm text-white" style="font-family: monospace; font-size: 0.8em; overflow-wrap: anywhere;">
        ad_channel=SYSTEM&amp;carrier=12345&amp;country=XX&amp;currency=XXX&amp;data=KEYWORD?your=custom_param&amp;event=SUBSCRIPTION&amp;flow=CLICK&amp;free_period=86400&amp;id=12345678901234567890&amp;ip=1.2.3.4&amp;keyword=KEYWORD&amp;price=0.1&amp;payment_schedule=EVERYDAY&amp;service=MYSERVICE&amp;sn=1234&amp;status=SUCCESSFUL&amp;subscriber=12345678900&amp;subscriber_currency=XXX&amp;subscriber_price=0.1&amp;time=2020-01-01+01%3A01%3A01+UTCuser_agent=Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/605.1.15+(KHTML,+like+Gecko)
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>
