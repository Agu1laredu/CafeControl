'use client' // esto le dictamina al componente que solo será del lado del cliente sus comportamientos

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
       redirectTo: 'http://cafecontro.vercel.app/auth/callback'
        // Redireccion al inicio y obtencion de los datos cuando inicias sesion
        // sin esto quedaria en el login por mas que si haya iniciado sesion en el servidor
      }
    })
  }

  const signInWithFacebook = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
        // Redireccion al inicio y obtencion de los datos cuando inicias sesion
        // sin esto quedaria en el login por mas que si haya iniciado sesion en el servidor
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
    //
    // El refresh sirve para forzar la ventana y los datos en ella cuando surgen cambios del lado del servidor
  }

  return (
    //    Componente Button controla el inicio y cierre de la sesion del lado del cliente
    <header>
      {
        // si la session es igual a null , es decir, no inicia
        session === null
          ? (
            // devolveme este button , equivale al inicio del login
        <div>
              <button style={{ cursor: 'pointer', width: '55px', height: '55px', margin: '10px' }} onClick={handleSignIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5  focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2">
              <div style={{ display: 'flex', width: '200px', textAlign: 'center', height: '40px' }}>
                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            <button style={{ cursor: 'pointer', width: '55px', height: '55px', margin: '10px' }} onClick={signInWithFacebook} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5  focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2">
            <div style={{ display: 'flex', width: '200px', textAlign: 'center', height: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M 7 5 C 5.90625 5 5 5.90625 5 7 L 5 25 C 5 26.09375 5.90625 27 7 27 L 25 27 C 26.09375 27 27 26.09375 27 25 L 27 7 C 27 5.90625 26.09375 5 25 5 Z M 7 7 L 25 7 L 25 25 L 19.8125 25 L 19.8125 18.25 L 22.40625 18.25 L 22.78125 15.25 L 19.8125 15.25 L 19.8125 13.3125 C 19.8125 12.4375 20.027344 11.84375 21.28125 11.84375 L 22.90625 11.84375 L 22.90625 9.125 C 22.628906 9.089844 21.667969 9.03125 20.5625 9.03125 C 18.257813 9.03125 16.6875 10.417969 16.6875 13 L 16.6875 15.25 L 14.0625 15.25 L 14.0625 18.25 L 16.6875 18.25 L 16.6875 25 L 7 25 Z"></path>
              </svg>
            </div>
          </button>
        </div>)

          : <button className='button-c' style={{ cursor: 'pointer' }} onClick={handleSignOut}>Cerrar sesión</button>
        // Sino devolveme este otro button , que tiene la funcion de cerrar sesion una vez iniciada la misma
      }
    </header >)
}
