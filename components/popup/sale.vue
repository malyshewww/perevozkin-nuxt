<template lang="pug">
	Teleport(to="body")
		Popup(:is-active="isActive" @close-popup="closePopup")
			.popup__header
				h2.popup__title {{data.title}}
			ContainerContent(class-names="popup__description")
				.content(v-html="data.descr")
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(["closePopup"]);

const closePopup = () => {
  emit("closePopup");
};
</script>
