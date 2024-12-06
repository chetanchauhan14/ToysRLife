import { useState, useEffect } from "react";

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
        } else {
            const str = "[   { 	\"id\":1,     \"title\": \"sequins glitter hairbands\",     \"price\":150,     \"category\": \"hairbands\"   },   { 	\"id\":2,     \"title\": \"unicorn hairband wigs\",     \"price\":225,     \"category\": \"hairbands\"   },   { 	\"id\":3,     \"title\": \"butterfly headband for girls\",     \"price\":165,     \"category\": \"hairbands\"   },   { 	\"id\":4,     \"title\": \"sequins shining crown princess party\",     \"price\":145,     \"category\": \"hairbands\"   },   { 	\"id\":5,     \"title\": \"rainbow hairclip set\",     \"price\":80,     \"category\": \"hairclips\"   },   { 	\"id\":6,     \"title\": \"colourful glitter hairclip\",     \"price\":110,     \"category\": \"hairclips\"   },   { 	\"id\":7,     \"title\": \"children plush hairclip\",     \"price\":120,     \"category\": \"hairclips\"   },   { 	\"id\":8,     \"title\": \"3D princess hairclip\",     \"price\":250,     \"category\": \"hairclips\"   },   { 	\"id\":9,     \"title\": \"spiral ties for girls pony tail holder\",     \"price\":70,     \"category\": \"hairclips\"   },   { 	\"id\":10,     \"title\": \"kids intelligence learning e-book\",     \"price\":450,     \"category\": \"kids toys\"   },   { 	\"id\":11,     \"title\": \"8 wheels remote control rock climber monster off road car\",     \"price\":1450,     \"category\": \"kids toys\"   },   { 	\"id\":12,     \"title\": \"intelligent robot learning machine\",     \"price\":599,     \"category\": \"kids toys\"   },   { 	\"id\":13,     \"title\": \"galaxy projector with remote control\",     \"price\":999,     \"category\": \"kids toys\"   },   { 	\"id\":14,     \"title\": \"unicorn space cartoon colouring book\",     \"price\":299,     \"category\": \"art and craft\"   },   { 	\"id\":15,     \"title\": \"art and craft kits for kids\",     \"price\":199,     \"category\": \"art and craft\"   },   { 	\"id\":16,     \"title\": \"DIY Wood Paint Kit for Kids\",     \"price\":329,     \"category\": \"art and craft\"   },   { 	\"id\":17,     \"title\": \"180 Piece Painting Drawing Kit\",     \"price\":1099,     \"category\": \"art and craft\"   },   { 	\"id\":18,     \"title\": \"Scratch Book For Kids\",     \"price\":240,     \"category\": \"art and craft\"   } ]";
            json = JSON.parse(str);
            console.log("product done")
            //json = await response.json();
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
