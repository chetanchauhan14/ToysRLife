import { useState, useEffect } from "react";
import {CARDS} from "data/cards.js";
const useMakeRequest = (endpoint) => {
  const [result, setResult] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        //const response = await fetch(endpoint);
        var json;
        console.log(endpoint)
        if (endpoint.includes("categories"))
        {
            console.log("category")
            const str = "[\"hairbands\", \"hairclips\", \"kids toys\", \"art and craft\"]";
            json = JSON.parse(str);
            console.log(json)
            console.log("category done")
        } else if (endpoint.includes("all")) {
            //const str = CARDS;
            json = CARDS;
            console.log("product done")
            //json = await response.json();
        } else if (endpoint.includes("category")) {
            console.log("category");
            const categories=endpoint.split("/");
            console.log(categories);
            const category=categories[categories.length-1];
            console.log(category);
            const filtered=CARDS.filter(item=>(item.category===category));
            json = filtered;
            console.log("product done")
      } else {
          json=CARDS[0];
        }
        
        setResult((old) => ({ ...old, data: json }));
      } catch (error) {
        setResult((old) => ({ ...old, error: new Error(error).message }));
      }
    };

    asyncFunc();
  }, [endpoint]);

  return result;
};

export default useMakeRequest;
