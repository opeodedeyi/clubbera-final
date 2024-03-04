'use server';

import { cookies } from 'next/headers';

export async function deleteCookie() {
    const nextCookies = cookies();
    nextCookies.delete('auth_token')
}


// import Cookies from 'js-cookie';

// export async function deleteCookie() {
//     console.log('====================================');
//     console.log('trying to remove cookie');
//     console.log('====================================');
//     Cookies.remove('auth_token');
// }