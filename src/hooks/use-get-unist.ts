export const useGetUnist = () => {
  const units = async () => {
    const response = await fetch(
      "https://api.vnshop.nexpando.vn/config/units",
      {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJwcm92aWRlciI6IjMwU0VMTEVSX0NFTlRFUiIsInVzZXItaWQiOiIxIiwicm9sZXMiOiJhZG1pbiIsInN1Yi1tZXJjaGFudHMiOiIiLCJ0eXBlIjoiMTBWTlNIT1AiLCJlbWFpbCI6ImFkbWluQHZuc2hvcC52biIsInVzZXJuYW1lIjoiYWRtaW4iLCJzdWIiOiJhZG1pbkB2bnNob3Audm4iLCJpYXQiOjE3MTgxNjY2MTYsImV4cCI6MTcxODI1MzAxNn0.hp8M5pM382fOr6jr395p3uX2iTZYiX-7qQNKZZyA_Rk",
          "content-type": "application/json",
        },
        method: "GET",
      }
    );
    const unist = await response.json();
    localStorage.setItem("units", JSON.stringify(unist.data));
    return unist.data;
  };
  if (!localStorage.getItem("units")) {
    units();
  } 
  const data = JSON.parse(localStorage.getItem("units") || "[]");
  return data;
};
