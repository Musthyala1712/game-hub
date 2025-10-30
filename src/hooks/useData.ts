import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface GameHubProps<T> {
  count: number;
  results: T[];
}
export const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, seterror] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<GameHubProps<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);

        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          seterror(err.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
