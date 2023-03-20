import axios from "./axios";

export const login = (payload) => axios.post('/v1/app/auth/login', payload)
export const signUp = (payload) => axios.post('/v1/app/auth/signup', payload)