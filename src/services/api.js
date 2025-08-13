export const fetchApiData = () => {
  return ffetch("/api/mockfast")

    .then((res) => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    });
};
