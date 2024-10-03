<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { usefundStore } from "@/stores/fund";
import layout from "@/layouts/layout.vue";
import fundList from "@/components/fundList.vue";

const fundStore = usefundStore();
const router = useRouter();

const period = ref("1Y");

onMounted(() => {
  fundStore.loadProduct(period.value);
});

watch(period, (newPeriod) => {
  fundStore.loadProduct(newPeriod);
});
</script>

<template>
  <layout>
    <div class="mx-10">
      <label for="period-select">Select Period:</label>
      <select id="period-select" v-model="period">
        <option value="1Y">1 Year</option>
        <option value="6M">6 Month</option>
        <option value="3M">3 Month</option>
        <option value="1M">1 Month</option>
        <option value="1W">1 Week</option>
        <option value="1D">1 Day</option>
      </select>
    </div>

    <fundList :funds="fundStore.docList" :period="period" />
  </layout>
</template>