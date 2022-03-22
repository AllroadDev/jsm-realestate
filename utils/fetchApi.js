import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '67c7f799cemsh645a0b42e4f6953p14f92cjsnfcf00618c85e'
          }

    });

    return data;
}