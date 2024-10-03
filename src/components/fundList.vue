<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  funds: Array,
  period: {
    type: String,
    required: true,
  },
});

const getReturnLabel = (fund) => {
  switch (props.period) {
    case "1D":
      return `Return 1D: ${fund.return_1d}`;
    case "1W":
      return `Return 1W: ${fund.return_1w}`;
    case "1M":
      return `Return 1M: ${fund.return_1m}`;
    case "3M":
      return `Return 3M: ${fund.return_3m}`;
    case "6M":
      return `Return 6M: ${fund.return_6m}`;
    case "1Y":
      return `Return 1Y: ${fund.return_1y}`;
    default:
      return `Return 1Y: ${fund.return_1y}`;
  }
};
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10"
  >
    <div
      v-for="(fund, index) in funds"
      class="card w-full bg-base-100 shadow-xl"
      :key="index"
    >
      <div class="card-body">
        <p>Rank : {{ index + 1 }}</p>
        <h2 class="card-title">Fund ID : {{ fund.fund_id }}</h2>
        <p>AMC Name : {{ fund.amc_name }}</p>
        <p>Short Code : {{ fund.short_code }}</p>

        <p style="font-weight: bold">{{ getReturnLabel(fund) }}</p>

        <p>Nav : {{ fund.nav }}</p>
        
        <p class="bg-yellow-400" v-if="fund.is_finnomena_pick">
          Finnomena Pick
        </p>

        <p style="font-size: small">
          Updated Date : {{ fund.nav_date.slice(0, 10) }}
        </p>
      </div>
    </div>
  </div>
</template>
