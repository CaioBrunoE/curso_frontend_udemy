import { useState, useEffect } from "react";

//4 custom hook
export const useFetch = (url) => {

    const [data, setData] = useState(null)

    //5 refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    //6- loading
    const [loading, setLoading] = useState(false)

    //7 Error
    const [erros, setErros] =useState(null)

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }
    }


    useEffect(() => {
 
        const fetchData = async () => {
            //7 Error
            try {
                //5 loading
                setLoading(true)
                const res = await fetch(url);
                const json = await res.json()

                setData(json);
            } catch (error) {
                 console.log(error.message)

                 setErros("Ouve um erro ao carregar os dados")
            }


            setLoading(false)
        };
        fetchData();
    }, [url, callFetch]);

    // 5 refatorando post
    useEffect(() => {

        const httpRequest = async () => {
            let json;
            if (method === "POST") {
                let fetchOptions = [url, config]
                //5 loading
                setLoading(true)
                const res = await fetch(...fetchOptions)

                json = await res.json();

                setLoading(false)
            }

            setCallFetch(json);
        };

        httpRequest()

    }, [config, method, url]);

    return { data, httpConfig, loading , erros};
}