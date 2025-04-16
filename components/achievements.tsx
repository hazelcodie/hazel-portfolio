import Image from "next/image";

export const Achievements = () => {
  return (
    <section className="flex justify-center px-4 pb-10">
      <div className="w-full max-w-2xl text-center">
        <div className="flex justify-center mb-8 mt-10">
          <Image
            src="/images/achievements-logo.png"
            alt="skills"
            width={350}
            height={119}
            className="w-40 sm:w-48 md:w-65"
          />
        </div>

        <div className="flex flex-col gap-5">
          {/* Left side message */}
          <div className="flex items-start gap-2.5">
            <Image
              className="w-8 h-8 rounded-full"
              src="/images/profile.png"
              width={60}
              height={60}
              alt="Hazel image"
            />
            <div className="flex flex-col w-full max-w-full sm:max-w-[320px] leading-1.5 p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700 items-start">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Hazel Delda
                </span>
                
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-justify">
                Looking for any achievements? Here&apos;s some of my achievements,
                yet.
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-end">
                Delivered
              </span>
            </div>
          </div>

          {/* accomplishments */}

          <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:justify-end">
            <div
              className="flex flex-col w-full max-w-full sm:max-w-[320px] gap-2.5 border-gray-200 bg-white
    rounded-s-xl rounded-ee-none rounded-se-none 
    px-4 py-2 dark:bg-gray-700 items-end sm:items-end"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Hazel Delda
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify">
                  We proudly won{" "}
                  <span className="font-semibold">3rd Place</span> in the{" "}
                  <span className="font-semibold">
                    International Student Scientific Information Technology
                    Applications (ISSITA) 2025
                  </span>{" "}
                  competition! <br />
                  <a
                    href="https://bipsu.edu.ph/index.php/news-articles/umio-news/bipsu-bscs-studes-win-3rd-place-in-int-l-research-comp?fbclid=IwY2xjawJrXIJleHRuA2FlbQIxMQABHgOebN3Bb75sVlydV-4sKfbA1uOsfsIg0-T0sy7AJfftA3wnZv7-I1ydFosi_aem_4jwIa7fZrwXc4ljRAjxZYQ"
                    className="text-blue-600 underline"
                  >
                Read more
                  </a>
                  .
                </p>
                <div className="group relative mt-2 w-full overflow-x-auto">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/ISSLET.jpg"
                        alt="isslet"
                        width={2048}
                        height={1536}
                        className="rounded-lg w-full"
                      />
                    </div>

                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/certificate.jpg"
                        alt="certificate"
                        width={1536}
                        height={1200}
                        className="rounded-lg w-full"
                      />
                    </div>

                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/researchers.jpg"
                        alt="researchers"
                        width={828}
                        height={780}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <Image
              className="h-8 w-8 rounded-full self-end sm:self-auto"
              src="/images/profile.png"
              width={60}
              height={60}
              alt="Hazel image"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:justify-end">
            <div
              className="flex flex-col w-full max-w-full sm:max-w-[320px] gap-2.5 border-gray-200 bg-white
    rounded-s-xl rounded-ee-none rounded-se-none 
    px-4 py-2 dark:bg-gray-700 items-end sm:items-end"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Hazel Delda
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify ">
                I have successfully completed my 3-month internship at CVISNET.
                  {" "} 
                  <a
                    href="https://www.facebook.com/share/p/16cgN4sd9L/"
                    className="text-blue-600 underline"
                  >
                  Read more
                  </a>
                  
                </p>
                <div className="group relative mt-2 w-full overflow-x-auto">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/cvisnetOne.jpg"
                        alt="cvisnet"
                        width={1080}
                        height={810}
                        className="rounded-lg w-full"
                      />
                    </div>

                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/cvisnetTwo.jpg"
                        alt="cvisnetpics"
                        width={1000}
                        height={750}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <Image
              className="h-8 w-8 rounded-full self-end sm:self-auto"
              src="/images/profile.png"
              width={60}
              height={60}
              alt="Hazel image"
            />
          </div>


        <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:justify-end">
            <div
              className="flex flex-col w-full max-w-full sm:max-w-[320px] gap-2.5 border-gray-200 bg-white
    rounded-s-xl rounded-ee-none rounded-se-none 
    px-4 py-2 dark:bg-gray-700 items-end sm:items-end"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Hazel Delda
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify ">
                I was a President’s Lister during my 1st and 4th years, and a Dean’s Lister in my 2nd year.
                  {" "} 
                  <a
                    href="https://www.facebook.com/share/p/163kYacgJE/"
                    className="text-blue-600 underline"
                  >
                    Read more
                  </a>
                  
                </p>
                <div className="group relative mt-2 w-full overflow-x-auto">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/honor.jpg"
                        alt="honorstudent"
                        width={1080}
                        height={1080}
                        className="rounded-lg w-full"
                      />
                    </div>

                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/cert.jpg"
                        alt="certificate"
                        width={2048}
                        height={1536}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <Image
              className="h-8 w-8 rounded-full self-end sm:self-auto"
              src="/images/profile.png"
              alt="Hazel image"
              width={60}
              height={60}
            />
          </div>


          <div className="flex items-start gap-2.5 justify-end">
            <div
              className="flex flex-col w-full max-w-full sm:max-w-[320px] gap-2.5 border-gray-200 bg-white 
              rounded-s-xl rounded-ee-none rounded-se-none 
              px-4 py-2 dark:bg-gray-700 items-end"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Hazel Delda
                </span>
              </div>

              <div className="leading-1.5 flex flex-col items-end w-full">
                <p className="text-sm font-normal text-gray-900 dark:text-white text-justify ">
                We were proudly proclaimed as 3rd Place winners in the Research Poster (Techno-Transfer) category.
                  {" "} 
                  <a
                    href="https://www.facebook.com/share/1Emfdg7sU9/?mibextid=wwXIfr"
                    className="text-blue-600 underline"
                  >
                    Read more
                  </a>
                  
                </p>
                <div className="group relative mt-2 w-full">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0 w-48 sm:w-64">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"></div>
                      <Image
                        src="/images/researchl.jpg"
                        alt="researchlympics"
                        width={1140}
                        height={858}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 self-start">
                Delivered
              </span>
            </div>
            <Image
              className="h-8 w-8 rounded-full"
              src="/images/profile.png"
              width={60}
              height={60}
              alt="Hazel image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
