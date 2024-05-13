import { AuthButtonServer } from '@/app/components/auth-button-server';
import Logo from '../Img/Logo.png';
import Banner from '../Img/Aux1.png';

export default async function Login() {

  return (
    <div className='flex h-900 ' >
      <section className='bg-blue-700 w-1/2 h-900 flex flex-col justify-center items-center'>
        <h1 className='text-white text-6xl'>
          <img src={Logo.src} alt="Logo" />
        </h1>
        <div className='flex justify-center'>
          <AuthButtonServer />
        </div>
      </section>
      <section className='w-1/2 h-full flex justify-center items-center'>
        <img src={Banner.src} alt="Banner" className='h-full' />
      </section>
    </div>
  );
}
