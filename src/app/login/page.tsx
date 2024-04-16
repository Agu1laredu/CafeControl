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
        <form className='grid w-1/2'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-8">
            <h3 className="text-white">Iniciar sesión</h3>
          </button>
          <input type="email" placeholder='Email' autoComplete='username' className='w-full bg-transparent border-b-2 border-white text-white mb-4' />
          <input type="password" placeholder='Contraseña' autoComplete='current-password' className='w-full bg-transparent border-b-2 border-white text-white mb-4' />
        </form>
        <div className='flex justify-center'>
          <AuthButtonServer />
        </div>
      </section>
      <section className='w-1/2 h-full flex justify-center items-center'>
        <img src={Banner.src} alt="Logo" className='h-full' />
      </section>
    </div>
  );
}

