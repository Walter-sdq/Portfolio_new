import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const handleDelete = (id) => {
    // const newData = data.filter(list => list.id !== id)
    // setData(newData)
    // console.log(url+id);
    fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not get data :(`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setErr(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted");
        } else {
          setLoading(false);
          setErr(err.message);
        }
      });
    return () => {
      abort.abort();
    };
  }, [url]);
  return {
    data,
    loading,
    err,
    handleDelete,
  };
};

export default useFetch;
