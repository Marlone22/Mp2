import c1 from '../assets/images/c1.jpeg';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c2.webp';
import c4 from '../assets/images/c4.webp';
import c5 from '../assets/images/c3.webp';
import c6 from '../assets/images/c5.jpeg';
import c7 from '../assets/images/c6.webp';
import c8 from '../assets/images/hero1.webp';
import c9 from '../assets/images/hero2.webp';
import c10 from '../assets/images/c5.png';
import c11 from '../assets/images/c4.png';
import c12 from '../assets/images/c3.png';

export default function Gallery() {
  return (
    <>   
    <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Gallery</h1>
        </div>
    </div>


<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c6} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c7} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c8} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c9} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c10} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c11}  alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={c12} alt=""/>
        </div>
    </div>
</div>

    </>
  )
}
