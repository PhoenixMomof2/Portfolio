import React from 'react';
import yoga from '../../../public/assets/yoga.jpg'
import friends from '../../../public/assets/friends.jpg'
import art from '../../../public/assets/art.jpeg'
import laugh from '../../../public/assets/laugh.jpg'
import ProjectItem from './ProjectItem';

const Interests = () => {
  
  return (
    <div className="mt-24">
      <h2 className="font-bold text-7xl mb-20 w-full text-center md:text-5xl xs:text-3xl md:mb-16">
        Activities & Interests</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <ProjectItem
            title='Comedy'
            backgroundImg={laugh}
            projectUrl='https://www.tiffanyhaddish.com/'
            tech='Laughter'
            // urlObj={projectUrl}          
          />
          <ProjectItem
            title='Friends'
            backgroundImg={friends}
            projectUrl='https://vacayou.com/magazine/black-owned-wellness-retreats/'
            tech='Friendships'
            // urlObj={projectUrl}          
          />
          <ProjectItem
            title='Yoga'
            backgroundImg={yoga}
            projectUrl='https://tribe.trapyogabae.com/'
            tech='Self-Care'
            // urlObj={projectUrl}          
          />
          <ProjectItem
            title='Creating'
            backgroundImg={art}
            projectUrl='https://africa.si.edu/'
            tech='Art'
            // urlObj={projectUrl}          
          />
        </div>
      </div>
  );
};
export default Interests;