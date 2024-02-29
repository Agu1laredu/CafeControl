import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '100px' }}>Archived System</h1>
      <section style={{ border: '2px solid white', width: '50%', margin: 'auto', marginTop: '10%', padding: '2%' }}>
        <div className='place-content-center min-h-screen' style={{ margin: 'auto', textAlign: 'center' }} >
          <h1 className='text-xl font-bold mb-4'>Inicia sesión </h1>
          <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
            <AuthButtonServer />
          </div>
        </div>
      </section>
    </div>
  )
}
// este Button es el componente padre de buttons server y cliente con su logica de comportamiento ya implementadas
// en page usamos este componente
