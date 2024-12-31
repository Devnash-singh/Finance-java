import { Card , CardContent, CardDescription, CardFooter,CardHeader,CardTitle} from '../components/ui/Card'
import GoalsContent from './GoalsContent'


export default function Goals() {
  return (
    <div className='h-[100%] w-[100%]'>
        <Card className='min-h-full w-full'>
        <CardHeader>
         <div><CardTitle className='text-7xl font-mono'>Goals</CardTitle> </div> 
          <div className='flex flex-row'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Add Goal
            </button>
          </div>
          <CardDescription className='font-mono'>Set your future goals and tasks You wish to complete</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
             <GoalsContent/>   
          </div>
        </CardContent>
        <CardFooter>
          
        </CardFooter>
      </Card>
      
    </div>
  )
}
