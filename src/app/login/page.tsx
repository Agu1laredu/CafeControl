import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section>
      <div className='place-content-center min-h-screen' style={{ margin: 'auto', textAlign: 'center' }} >
        <h1 className='text-xl font-bold mb-4'>Inicia sesión </h1>
        <AuthButtonServer />
      </div>
    </section>
  )
}
// este Button es el componente padre de buttons server y cliente con su logica de comportamiento ya implementadas
// en page usamos este componente
