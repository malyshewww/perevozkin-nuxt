const useLastBreadcrumb = (breadcrumbs) => {
   if (breadcrumbs && breadcrumbs.length) {
      const last = breadcrumbs.at(-1).text;
      return last;
   }
};

export default useLastBreadcrumb;
