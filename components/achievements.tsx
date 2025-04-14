export const Achievements = () => {
   return (
       <section className="flex flex-col items-center justify-center pt-20 text-center gap-5">
           <h1 className="text-5xl font-bold text-black dark:text-white py-5">
               Achievements
           </h1>

           <div className="flex items-start gap-2.5">
               <img className="w-8 h-8 rounded-full" src="/images/profile.png" alt="Hazel image" />
               <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                   <div className="flex items-center space-x-2 rtl:space-x-reverse">
                       <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                       <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                   </div>
                   <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-justify">
                       Looking for any achievements? Here's some of her achievements, yet.
                   </p>
                   <span className="text-sm font-normal text-gray-500 dark:text-gray-400 text-right">Delivered</span>
               </div>
           </div>
       </section>
   );
};

export default Achievements;
