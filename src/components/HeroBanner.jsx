import C2 from '../assets/images/c1.jpeg';
import C3 from '../assets/images/c3.webp';
import C4 from '../assets/images/c4.webp';
import C5 from '../assets/images/c5.jpeg';
import C6 from '../assets/images/c6.webp';





export default function HeroBanner() {


  return (
    
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2c1820] to-[#302992] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
          <p className="text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
          Strength, Endurance, and Tenacity Converge
            </p>
          </div>
        </div>

<div className="grid gap-4">
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={C2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={C3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={C4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={C5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={C6} alt=""/>
        </div>
    </div>
</div>
        

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#39191e] to-[#2a275b] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        
      </div>

    
  )
}
