export const fetchApiData = () => {
  return fetch("https://mockfast.io/backend/apitemplate/get/ZCKZ8H8MTA")
    .then((res) => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    });
};
