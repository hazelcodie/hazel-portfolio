export const Achievements = () => {
  return (
    <section className="flex justify-center px-4 pb-10">
      <div className="w-full max-w-2xl text-center">
        <div className="flex justify-center mb-8 mt-10">
          <img
            src="/images/achievements-logo.png"
            alt="skills"
            className="w-65"
          />
        </div>

        <div className="flex flex-col gap-5">
          {/* Left side message */}
          <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="/images/profile.png"
              alt="Hazel image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 items-start">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-justify">
                Looking for any achievements? Here's some of my achievements, yet.
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-end">
                Delivered
              </span>
            </div>
          </div>

          {/* Right side message */}
          <div className="flex items-start gap-2.5 justify-end">
            <div className="flex flex-col w-full max-w-[320px] gap-2.5 border-gray-200 bg-gray-100 
              rounded-s-xl rounded-ee-none rounded-se-none 
              px-4 py-2 dark:bg-gray-700 items-end">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify">
                  You can check out one of my featured achievements{" "}
                  <a
                    href="/achievement-details"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="group relative mt-2 w-full overflow-x-auto">
                  <div className="flex gap-4">
                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/ISSLET.jpg" className="rounded-lg w-full" />
                    </div>

                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/achievement2.jpg" className="rounded-lg w-full" />
                    </div>

                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/achievement3.jpg" className="rounded-lg w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <img
              className="h-8 w-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Jese image"
            />
          </div>

          <div className="flex items-start gap-2.5 justify-end">
            <div className="flex flex-col w-full max-w-[320px] gap-2.5 border-gray-200 bg-gray-100 
              rounded-s-xl rounded-ee-none rounded-se-none 
              px-4 py-2 dark:bg-gray-700 items-end">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify">
                We proudly won <span className="font-semibold text-blue-600">3rd Place</span> in the <span className="font-semibold">International Student Scientific Information Technology Applications (ISSITA)</span> competition!{" "}
                  <a
                    href="https://bipsu.edu.ph/index.php/news-articles/umio-news/bipsu-bscs-studes-win-3rd-place-in-int-l-research-comp?fbclid=IwY2xjawJrXIJleHRuA2FlbQIxMQABHgOebN3Bb75sVlydV-4sKfbA1uOsfsIg0-T0sy7AJfftA3wnZv7-I1ydFosi_aem_4jwIa7fZrwXc4ljRAjxZYQ"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="group relative mt-2 w-full overflow-x-auto">
                  <div className="flex gap-4">
                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/ISSLET.jpg" className="rounded-lg w-full" />
                    </div>

                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/achievement2.jpg" className="rounded-lg w-full" />
                    </div>

                    
                    <div className="relative flex-shrink-0 w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <img src="/images/achievement3.jpg" className="rounded-lg w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <img
              className="h-8 w-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Jese image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
