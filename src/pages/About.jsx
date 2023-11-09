import Banner from '../assets/images/hero1.webp';

export default function About() {
  return (
    <>   
    <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Us</h1>
        </div>
    </div>
    
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-indigo-600">Unleash Your Inner BEAST</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elevate Your Fitness Journey</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">Join us at BEAST and discover what it means to unlock your true potential. Whether youre a seasoned athlete or just beginning your fitness journey, BEAST welcomes you to a community where strength knows no bounds.</p>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={Banner}alt=""/>
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-gray-900">Mission.</strong> At BEAST, our mission is to empower individuals to unlock their full potential through relentless dedication to fitness and well-being. We strive to create a community that fosters strength, endurance, and mental resilience. Through cutting-edge training programs, expert guidance, and unwavering support, we aim to inspire a transformational journey towards a healthier, more empowered life.</span>
            </li>
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-gray-900">Vision</strong> Our vision is to revolutionize the fitness industry by redefining the limits of human performance. We aspire to be the beacon of excellence in empowering individuals to surpass their physical and mental boundaries. Through innovative approaches, personalized training, and a vibrant community, we envision a world where everyone embraces their inner BEAST, achieving levels of strength, agility, and vitality they never thought possible.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
