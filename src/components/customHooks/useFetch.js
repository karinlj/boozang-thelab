import { useState, useEffect } from "react";

const useFetch = (url) => {
  //dynamic reusable fetch data component
  //name need to start with use...

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //runs on every render
  //if [] = runs only on 1st render
  //if [name] = runs when name changes
  useEffect(() => {
    const abortContrl = new AbortController();
    //with this we can stop the fetch when we want
    //faking that fetching data from db takes time
    setTimeout(() => {
      fetch(url, { signal: abortContrl.signal })
        .then((res) => {
          console.log(res);
          //if request REACHES server but sends ERROR back
          //maybe endpoint does not exist or if request is denied
          if (!res.ok) {
            //the ok prop on the res object will be false
            throw Error("Could not fetch the data for that resourse");
            //throw it here and catch it further down
          }
          //to get the data we have to do something with it when using the fetch-api
          //this also returns a promise
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        //if connection error = if request NOT REACH server, will get Failed to fetch
        .catch((err) => {
          if (err.name === "AbortError") {
            // console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
          //console.log(err.message);
        });
      // console.log("use effect ran");
      // console.log("data", data);
    }, 1000);
    return () => abortContrl.abort();
  }, [url]);
  //return an object with the states
  return { data, isLoading, error };
};

export default useFetch;
