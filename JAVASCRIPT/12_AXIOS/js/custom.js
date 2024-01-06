const postsFetch = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com",
    headers:{
        Accept:"application/json",
        Authorization:"meunovotoken",
    }
})