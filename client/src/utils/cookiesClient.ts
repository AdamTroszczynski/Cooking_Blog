import Cookies from 'universal-cookie';

/** Cookies client to control all cookies */
export const cookies = new Cookies(null, { path: '/' });
