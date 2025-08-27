import { useState } from "react";

export default function useFetch(apiFunc) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const result = await apiFunc();
    setData(result);
    setLoading(false);
  };

  return { data, loading, fetchData };
}
