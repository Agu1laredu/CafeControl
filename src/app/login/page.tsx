import { AuthButtonServer } from '@/app/components/auth-button-server';
import Logo from '../Img/Logo.png';
import Banner from '../Img/Aux1.png';
import './page.login.css';


export default async function  Login()  {
 

  return (
    <div className='ContainerLogin'>
      <section className='SectionUno'>
      <h1 style={{ fontSize: '100px' }}>
        <img src={Logo.src} alt="Logo" />  
      </h1>
      <form className='FormContainer'>
      <button className="buttonInit">
        <h3 >Iniciar sesión</h3>
      </button>
      <input type="email" placeholder='Email' autoComplete='username' />
      <input type="password"  placeholder='Contraseña' autoComplete='current-password' />
      </form>
          <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
            <AuthButtonServer />
          </div>
      </section>
      <section className='SectionDos'>
      <img src={Banner.src} alt="Logo" className='Logo' />  
      </section>
    </div>
  );
}

