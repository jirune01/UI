import { SideMenu } from 'components/SideMenu';
import { Code } from 'components/Code';

export const App = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-between '> 
    <SideMenu/>
    <main className='flex flex-col gap-4 w-250 h-200 border border-neutral-500 rounded-sm p-4'>
      {/* component view */}
      <div className='w-full h-115 border'>
        Component View
      </div>
      {/* component props */}
      <div className='w-full h-75 border'>
        Component Props
      </div>
    </main>
    {/* code */}
   <Code/>
    </div>
  )
}
