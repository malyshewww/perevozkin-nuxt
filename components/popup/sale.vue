<template lang="pug">
	Teleport(to="body")
		Popup(:is-active="isActive" @close-popup="closePopup")
			.popup__header
				h2.popup__title {{data.title}}
			.popup__description.content(v-html="data.descr")
</template>

<script setup>
const props = defineProps({
   isActive: {
      type: Boolean,
      required: true,
   },
   data: {
      type: Object,
      required: false,
   },
});

onMounted(() => {
   console.log(props.data);
});

const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};
</script>
