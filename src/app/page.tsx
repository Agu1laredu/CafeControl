import Sidebar from '../SideBar/sidebar'
import { RxAvatar } from "react-icons/rx";

export default async function SidebarComponent () {
  return (
    <main  className="Content flex min-h-screen flex-col items-center justify-between p-24" > 
     <section className='dashboardContent'>
      <input className='Search' type="text" placeholder='Buscar'/>
      <div className='Avatar'>
      <RxAvatar style={{fontSize: '40px', cursor: 'pointer'}}/>
      </div>
      </section>
      < Sidebar />
    
      
      {/* button para iniciar session con github */}
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </main>
  )
}
