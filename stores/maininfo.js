import { defineStore } from "pinia";
export const useMainInfoStore = defineStore("mainInfoStore", {
  state: () => ({
    menu: [],
    links: {
      telegram: "",
      vk: "",
      youtube: "",
      phone: "",
      email: "",
      viber: "",
      whatsapp: "",
    },
    isStocks: "",
    services: "",
  }),
  actions: {
    async setData(res) {
      const { data } = res;
      try {
        this.services = data.services_menu;
        this.menu = data.menu_main;
        this.links.telegram = data.site_info[0].field_link_telegram;
        this.links.vk = data.site_info[0].field_link_vk;
        this.links.youtube = data.site_info[0].field_link_youtube;
        this.links.phone = data.site_info[0].field_phone;
        this.links.email = data.site_info[0].field_email;
        this.links.viber = data.site_info[0].field_viber;
        this.links.whatsapp = data.site_info[0].field_whatsapp;
        this.isStocks = data.actions_exists;
      } catch (error) {
        console.log("Oh my Error", error);
      }
    },
  },
});
