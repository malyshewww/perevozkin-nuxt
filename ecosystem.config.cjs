module.exports = {
   apps: [
      {
         name: "perevozkin_nuxt",
         port: "3000",
         exec_mode: "cluster",
         instances: "max",
         script: "./.output/server/index.mjs",
      },
   ],
};
