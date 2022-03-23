import axios from "axios";



export const api = axios.create({
    baseURL: `${process.env.NODE_ENV === 'production'?'https://dtmoney-mu-tawny.vercel.app//api' :'http://localhost:3000/api'}`,  //endereço que se repete em todas as requisições
})