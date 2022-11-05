import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-300 to-black text-white"
      // id='about'
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-m mt-20">
        Carla L. Hines is a proud native of Atlanta, Georgia. After receiving her bachelor’s 
        degree from Georgia State University, Carla worked for many years in exports, 
        logistics, and customs for a global ocean freight company handling such VIP accounts 
        as Nike, Gap, HP, and Toys r’ Us. It was her work in the shipping industry that birthed 
        the idea of pursuing a legal career in admiralty law. 

        </p>

        <br />

        <p className="text-m">
        After graduating with her Juris Masters from Emory University School of Law, Carla 
        went on to pursue and earn her Juris Doctorate from Savannah Law School, a branch of 
        Atlanta’s John Marshall Law School. While in law school, she was a member of the Moot 
        Court Honor Board, competing at the University of Georgia Moot Court Competition in Spring 
        2016. She also served on the executive board of several school organizations including the
         Environmental Law Society working closely with the Coastal Empire Habitat for Humanity, Street Law, 
         which travelled to various inner city high schools and undergrad institutions encouraging students to 
         pursue a career in law, and Phi Alpha Delta Law Fraternity International. 
        </p>
        <p className="text-m mt-10">
        Carla’s most fond accomplishment as a law student was being accepted into the London Summer 
        Study Abroad program hosted by the Southern University Law Center where she studied International 
        Criminal Law and Constitutional Law, focusing on the intersections of British law and the U.S. 
        Constitution. Her knowledge and appreciation of global law expanded during her 6-week studies in Europe, 
        which included visits to Lloyd’s of London, the Royal Courts of Justice, and The International Court of
         Justice in the Hague, Netherlands.  

        </p>

        <br />

        <p className="text-m">
        As a practicing attorney, Carla has assisted clients in criminal, domestic, juvenile, 
        and entertainment matters. However, it was the memory of being injured in a car accident 
        that could have cost her life that motivated her to assist others injured due to drivers’ 
        negligence. When she’s not engrossed in the law, Carla attends church, loves travelling, 
        personal fitness/training, spending time with family and friends, composing music, and 
        binge-watching TV favorites like Law & Order and Game of Thrones.  
        </p>
      </div>
    </div>
  );
};

export default About;
