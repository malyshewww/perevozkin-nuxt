<template lang="pug">
    .content-container(:class="classNames")
        slot
</template>

<script setup>
const props = defineProps({
  classNames: {
    type: String,
    required: false,
    default: "",
  },
});

const device = useDevice();

onMounted(() => {
  if (device.isMobileOrTablet) {
    const tables = document.querySelectorAll(".content table");
    for (const table of tables) {
      const tableWrap = document.createElement("div");
      tableWrap.classList.add("table-wrap");
      table.parentNode.insertBefore(tableWrap, table);
      tableWrap.appendChild(table);
    }
  }
});
</script>
