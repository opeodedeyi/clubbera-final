import axios from 'axios';
import { cookies } from 'next/headers';
import { UserProvider } from '@/context/UserContext';
import { deleteCookie } from '@/service/cookieManager';
import { redirect } from 'next/navigation';
import './globals.css';


export const metadata = {
  title: 'Clubbera',
  description: 'Connecting people with local communities',
  icons: {
    icon: '/LogoClubbera.svg',
    apple: '/LogoClubbera.svg',
  }
}


async function getData() {
  const nextCookies = cookies();
  const token = nextCookies.get('auth_token')?.value;

  if (token) {
    try {
      const response = await axios.get(`${process.env.API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      return response.data;
    } catch (error) {
      console.log('will delete cookie')
    }

  }
}


export default async function RootLayout({ children }) {
  const user = await getData() || null;

  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={user}>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
