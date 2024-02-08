import React from 'react'

function Testimonials () {
  return (
    <section className="relative" id="testimonials">

      <div className="w-full min-w-48">
        <div className="absolute inset-0 top-12 -bottom-0 bg-gray-900 pointer-events-none -z-1" aria-hidden="true"></div>

        {/* Illustration behind content */}
        {/* <div className="absolute left-1/2 top-0 transform -translate-x-1/2 scale-x-[-1] bottom-0 pointer-events-none -mb-32" aria-hidden="true">
          <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="1630" cy="128" r="128" />
              <circle cx="178" cy="481" r="40" />
            </g>
          </svg>
        </div> */}

        <div className="mx-auto px-4 sm:px-6">
          <div className="py-14 md:py-24">

            {/* Section header */}
            <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4 text-sky-400 pt-10">Trusted by Amazon Sellers Everywhere</h2>
              <p className="text-xl text-gray-300" data-aos="zoom-y-out">
                Once a client, always a client.
                There&apos;s a reason that our sellers keep coming back.
                Take a look at what some of our biggest clients have to say.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center flex-wrap w-full gap-16">

              {/* Testimonial 1 */}
              <div className="max-w-xl" data-aos="zoom-y-out">
                <div className="relative flex items-start border-4 border-sky-300 rounded bg-white">
                  <div className="text-center px-12 py-8 pt-20">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-[#00A5E9]" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                    </div>
                    <blockquote className="text-md font-medium mb-4">
                      &quot;As a business proprietor, I rely on Skyline to fulfill all my e-commerce requirements. 
                      They provide an extensive range of the latest and most sought-after brands, significantly contributing to the prosperity of my store. 
                      If you aim to boost your sales and stay ahead of the competition, I wholeheartedly endorse Skyline.&quot;
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">Lyth Elkour</cite>
                    <div className="text-gray-600">
                      <span>Owner of Elkour Enterprises</span> <a className="text-blue-600 hover:underline" href="#0"></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="max-w-xl" data-aos="zoom-y-out">
                <div className="relative flex items-start border-4 border-sky-300 rounded bg-white">
                  <div className="text-center px-12 py-8 pt-20">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-[#00A5E9]" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                    </div>
                    <blockquote className="text-md font-medium mb-4">
                      &quot;Skyline Distribution has been a huge factor in the growth of our online business will continue to be so.
                      I can confidently say that they are great people to work with and it is clear that their top priority is the success of their clients.
                      I highly recommend working with them for you business needs.&quot;
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">Ryan del Rosario</cite>
                    <div className="text-gray-600">
                      <span>Owner of SF Ecom</span> <a className="text-blue-600 hover:underline" href="#0"></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
