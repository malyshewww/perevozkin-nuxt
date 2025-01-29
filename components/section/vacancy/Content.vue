<template lang="pug">
	.vacancy__content.content
		.vacancy__item.item-vacancy(v-for="(vacancy, index) in modifiedVacancyList" :key="vacancy.id")
			h3.item-vacancy__title {{ vacancy.field_name[0] }}
			.item-vacancy__groups
				.item-vacancy__group
					.item-vacancy__main.main-info
						.main-info__inner(v-if="vacancy.field_salary.length")
							.main-info__label Заработная плата:
							.main-info__values(data-attr="от") {{ vacancy.field_salary[0] }}
						.main-info__inner(v-if="vacancy.field_contacts.length")
							.main-info__label Контакты отдела персонала:
							.main-info__values
								a.main-info__value(v-for="(phone, phoneIndex) in vacancy.field_contacts" :key="phoneIndex" :href="`tel:${vacancy.field_contacts_new[phoneIndex]}`") {{ phone }}
				.item-vacancy__group(v-if="vacancy.field_responsibilities.length")
					.item-vacancy__label Обязанности
					ul
						li(v-for="(r, i) in vacancy.field_responsibilities" :key="i") {{ r }}
				.item-vacancy__group(v-if="vacancy.field_requirements.length")
					.item-vacancy__label Требования
					ul
						li(v-for="(r, i) in vacancy.field_requirements" :key="i") {{ r }}
				.item-vacancy__group(v-if="vacancy.field_working_conditions.length")
					.item-vacancy__label Условия работы
					ul
						li(v-for="(c, i) in vacancy.field_working_conditions" :key="i") {{ c }}
</template>

<script setup>
const props = defineProps({
  vacancyList: {
    type: Object,
    required: true,
  },
});

const modifiedVacancyList = ref([]);
modifiedVacancyList.value = props.vacancyList.map((item) => {
  const filedContacts = item.field_contacts;
  const field_contacts_new = [];
  if (filedContacts.length) {
    filedContacts.forEach((field) => {
      const phone = field.replace(/[^\d\+]/g, "");
      field_contacts_new.push(phone);
    });
  }
  return {
    ...item,
    field_contacts_new,
  };
});
</script>

<style lang="scss">
.vacancy {
  &__content {
    display: grid;
    gap: 60px;
    max-width: 995px;
    @media screen and (max-width: $xl) {
      max-width: 100%;
      gap: 40px;
    }
  }
  &__item {
  }
}
.item-vacancy {
  &:not(:last-child) {
    padding-bottom: 52px;
    border-bottom: 1px solid $bg-asphalt;
    @media screen and (max-width: $xl) {
      padding-bottom: 30px;
    }
  }
  h3 {
    margin-bottom: 32px;
    @media screen and (max-width: $md) {
      margin-bottom: 30px;
    }
  }
  &__main {
  }
  &__groups {
    display: grid;
    gap: 40px;
    @media screen and (max-width: $xl) {
      gap: 30px;
    }
  }
  &__group {
  }
  &__label {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }
}
.main-info {
  display: grid;
  gap: 12px;
  &__inner {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 17px;
    font-size: 20px;
    line-height: 28px;
    @media screen and (max-width: $md) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  &__label {
    color: $gray;
  }
  &__values {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 16px;
    font-weight: 600;
    color: $bg-white;
    &[data-attr] {
      gap: 8px;
      &::before {
        content: attr(data-attr);
        font-weight: 400;
      }
    }
  }
}
</style>
