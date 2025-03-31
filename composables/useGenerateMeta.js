const useGenerateMeta = (arr) => {
  const acc = [];
  let title = "";
  let descr = "";
  if (arr.length) {
    let getTitle = arr.find((item) => item[1] === "title");
    let getDescr = arr.find((item) => item[1] == "description");
    if (getTitle) {
      title = getTitle[0]["#attributes"].content || "";
    }
    if (getDescr) {
      descr = getDescr[0]["#attributes"].content || "";
    }
    arr.map((item) => {
      if (item[1] === "title" && item[0]["#attributes"].name === "title") {
        return;
      }
      if (item[1] == "canonical_url") {
        acc.push({
          rel: item[0]["#attributes"].rel,
          href: item[0]["#attributes"].href,
        });
      } else {
        acc.push({
          name: item[0]["#attributes"].name,
          content: item[0]["#attributes"].content,
        });
      }
    });
  }
  return {
    acc,
    title,
    descr,
  };
};

export default useGenerateMeta;
