const runtimeConfig = useRuntimeConfig();
const useDomain = (link) => {
   return runtimeConfig.public.apiBase + link;
};

export default useDomain;
