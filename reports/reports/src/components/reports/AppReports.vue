<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import type { ReportItem } from "@/types/reports";
import { columnsReports } from "@/constants/reports";
import { MOCSReports } from "@/mocs/reports";

const tableData = ref<ReportItem[]>([]);
const dateRange = ref<[Date | null, Date | null]>([null, null]);

const filteredData = computed(() => {
  if (!dateRange.value) {
    return MOCSReports;
  }

  const [startDate, endDate] = dateRange.value;

  if (!startDate || !endDate) {
    return tableData.value;
  }

  return tableData.value.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= endDate;
  });
});

onMounted(() => {
  tableData.value = MOCSReports;
});
</script>

<template>
  <div class="reports-view">
    <div class="reports-view__filters">
      <a-range-picker
        v-model:value="dateRange"
        format="DD-MM-YYYY"
        placeholder="Выберите интервал дат"
      />
    </div>

    <a-table
      :columns="columnsReports"
      :data-source="filteredData"
      row-key="id"
      bordered
      pagination
    >
    </a-table>
  </div>
</template>

<style scoped lang="scss">
.reports-view {
  &__filters {
    margin-bottom: 2rem;
  }
}
</style>
