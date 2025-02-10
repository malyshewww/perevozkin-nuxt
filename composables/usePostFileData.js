import ajax from "../ajax";

export const usePostFileData = async (file, id) => {
  const axios = await ajax();
  const response = await axios.post(
    `/webform_rest/${id}/upload/resume?_format=json`,
    file,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/octet-stream",
        "Content-Disposition":
          `attachment; filename="` +
          encodeURIComponent(file.name) +
          `"; filename*=UTF-8''` +
          encodeURIComponent(file.name),
      },
    }
  );
  return response;
};
