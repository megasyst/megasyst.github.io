<template>
  <div class="fit row wrap justify-start items-stretch content-start">
    <div class="col col-lg-6 col-md-8 col-sm-8 col-xl-4 col-xs-12 q-pa-md white-page">
      <div class="q-mb-md text-h4">
        {{ $t('country_and_carrier_identifiers') }}
      </div>

      <q-card class="q-mt-md q-pa-md" v-for="country_row in data" :key="country_row.country_id">
        <q-card-section>
          <div class="text-h6">
            <div :class="`fflag ff-app ff-lg fflag-${ country_row.country_id }`" style="margin-right: 0.25em;"></div>
            {{ country_row.country }}
          </div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left" style="width: 50px">{{ $t('country_id') }}</th>
              <th class="text-left" style="width: 50px">{{ $t('carrier_id') }}</th>
              <th class="text-left">{{ $t('carrier') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="carrier_row in country_row.carriers" :key="carrier_row.carrier_id">
              <td>{{ country_row.country_id }}</td>
              <td>{{ carrier_row.carrier_id }}</td>
              <td>{{ carrier_row.carrier }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const data = [
  { country_id: "AM", country: "Armenia", carriers: [{carrier_id: 28301, carrier: "Beeline"},{carrier_id: 28305, carrier: "Vivacell (MTS)"},{carrier_id: 28310, carrier: "Ucom"}]},
  { country_id: "AT", country: "Austria", carriers: [{carrier_id: 23201, carrier: "A1"},{carrier_id: 23205, carrier: "Drei"},{carrier_id: 23203, carrier: "TMobile"}]},
  { country_id: "AZ", country: "Azerbaijan", carriers: [{carrier_id: 40001, carrier: "Azercell"},{carrier_id: 40002, carrier: "Bakcell"},{carrier_id: 40004, carrier: "Narmobile"}]},
  { country_id: "BH", country: "Bahrain", carriers: [{carrier_id: 42601, carrier: "Batelco"},{carrier_id: 42604, carrier: "Viva"}]},
  { country_id: "BY", country: "Belarus", carriers: [{carrier_id: 25701, carrier: "A1 (Velcom)"},{carrier_id: 25704, carrier: "Life"},{carrier_id: 25702, carrier: "MTS"}]},
  { country_id: "CZ", country: "Czech Republic", carriers: [{carrier_id: 23002, carrier: "O2"}]},
  { country_id: "EG", country: "Egypt", carriers: [{carrier_id: 60201, carrier: "Orange"},{carrier_id: 60202, carrier: "Vodafone"}]},
  { country_id: "EE", country: "Estonia", carriers: [{carrier_id: 24802, carrier: "Elisa"},{carrier_id: 24801, carrier: "EMT"},{carrier_id: 24803, carrier: "Tele2"}]},
  { country_id: "GE", country: "Georgia", carriers: [{carrier_id: 28204, carrier: "Beeline"},{carrier_id: 28201, carrier: "Geocell"},{carrier_id: 28202, carrier: "Magti"}]},
  { country_id: "ID", country: "Indonesia", carriers: [{carrier_id: 51010, carrier: "Telkomsel"}]},
  { country_id: "IQ", country: "Iraq", carriers: [{carrier_id: 41800, carrier: "AsiaCell"},{carrier_id: 41840, carrier: "Korek"},{carrier_id: 41820, carrier: "Zain"}]},
  { country_id: "IT", country: "Italy", carriers: [{carrier_id: 22250, carrier: "Iliad"},{carrier_id: 22201, carrier: "Tim"},{carrier_id: 22299, carrier: "Tre"},{carrier_id: 22210, carrier: "Vodafone"},{carrier_id: 22288, carrier: "Wind"}]},
  { country_id: "JO", country: "Jordan", carriers: [{carrier_id: 41677, carrier: "Orange"}]},
  { country_id: "KZ", country: "Kazakhstan", carriers: [{carrier_id: 40107, carrier: "Altel"},{carrier_id: 40101, carrier: "Beeline"},{carrier_id: 40102, carrier: "Kcell"},{carrier_id: 40177, carrier: "Tele2"}]},
  { country_id: "KE", country: "Kenya", carriers: [{carrier_id: 63907, carrier: "Telkom"}]},
  { country_id: "LV", country: "Latvia", carriers: [{carrier_id: 24705, carrier: "Bite"},{carrier_id: 24701, carrier: "LMT"},{carrier_id: 24702, carrier: "Tele2"}]},
  { country_id: "LT", country: "Lithuania", carriers: [{carrier_id: 24602, carrier: "Bite"},{carrier_id: 24603, carrier: "Tele2"},{carrier_id: 24601, carrier: "Telia"}]},
  { country_id: "LU", country: "Luxembourg", carriers: [{carrier_id: 27001, carrier: "LuxGSM"},{carrier_id: 27077, carrier: "Tango"},{carrier_id: 27099, carrier: "Orange"}]},
  { country_id: "MD", country: "Moldova", carriers: [{carrier_id: 25999, carrier: "IDC"},{carrier_id: 25902, carrier: "Moldcell"},{carrier_id: 25901, carrier: "Orange"},{carrier_id: 25903, carrier: "Unite"}]},
  { country_id: "MA", country: "Morocco", carriers: [{carrier_id: 60402, carrier: "INWI"},{carrier_id: 60400, carrier: "Orange"}]},
  { country_id: "PH", country: "Philippines", carriers: [{carrier_id: 51502, carrier: "Globe"},{carrier_id: 51503, carrier: "Smart"}]},
  { country_id: "PL", country: "Poland", carriers: [{carrier_id: 26003, carrier: "Orange"},{carrier_id: 26006, carrier: "Play"},{carrier_id: 26001, carrier: "Plus"},{carrier_id: 26034, carrier: "Tmobile"}]},
  { country_id: "RU", country: "Russia", carriers: [{carrier_id: 25099, carrier: "Beeline"},{carrier_id: 25002, carrier: "Megafon"},{carrier_id: 25001, carrier: "MTS"},{carrier_id: 25020, carrier: "Tele2"}]},
  { country_id: "RS", country: "Serbia", carriers: [{carrier_id: 22011, carrier: "Globaltel"},{carrier_id: 22003, carrier: "MTS"},{carrier_id: 22001, carrier: "Telenor"},{carrier_id: 22005, carrier: "VIP"}]},
  { country_id: "TJ", country: "Tajikistan", carriers: [{carrier_id: 43604, carrier: "Babilon-Mobile"},{carrier_id: 43605, carrier: "Beeline"},{carrier_id: 43603, carrier: "Megafon"},{carrier_id: 43601, carrier: "Tcell"}]},
  { country_id: "UA", country: "Ukraine", carriers: [{carrier_id: 25507, carrier: "3Mob"},{carrier_id: 25502, carrier: "Kyivstar"},{carrier_id: 25506, carrier: "Lifecell"},{carrier_id: 25501, carrier: "Vodafone"}]}
]

export default defineComponent({
  setup () {
    return {
      data
    }
  }
})
</script>
