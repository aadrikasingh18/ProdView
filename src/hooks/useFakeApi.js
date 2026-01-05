import { useState, useEffect } from "react";
import { generateRows } from "../data/generateRows";

export const useFakeApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      // 20% chance to fail
      if(Math.random() < 0.2) {
        setError(true);
        setLoading(false);
      } else {
        setData(generateRows());
        setLoading(false);
      }
    }, 1000); // 1s delay

    return () => clearTimeout(timeout);
  }, []);

  return { data, loading, error };
};