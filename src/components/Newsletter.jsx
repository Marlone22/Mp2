import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function NewsLetter() {
  const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    const email = document.getElementById('email-address').value;

    if (email) {
      setSubmitted(true);
      document.getElementById('myForm').submit();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="relative isolate overflow-hidden bg-gray py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Subscribe to our newsletter.</h2>
            <div className="mt-6 flex max-w-md gap-x-4">
            <div>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-red/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="flex-none rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
      </form>

      {submitted && <div className="text-green-600">Successfully Submitted!</div>}
    </div>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-black">
                Be Updated
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">No spam</dt>
              <dd className="mt-2 leading-7 text-black">
                No more spam, No more scam
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0d0d0d] to-[#02000d] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

