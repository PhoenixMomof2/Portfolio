import React from 'react';
import yoga from '../../assets/yoga.jpeg'
import friends from '../../assets/friends.jpeg'
import art from '../../assets/art.jpeg'
import laugh from '../../assets/laugh.jpeg'
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