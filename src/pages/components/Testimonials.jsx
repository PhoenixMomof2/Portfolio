import React from 'react'
import Section from './common/Section'
import avatar_unsplash from '../../../public/assets/avatar_unsplash.jpeg'
import recentpic from '../../../public/assets/recentpic.jpeg'
import joseph_gonzalez from '../../../public/assets/joseph_gonzalez.jpeg'
import Image from 'next/image';

const Testimonials = () => {

  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar_unsplash,
      name: "Martin Lawrence",
      comment: "Consequat amet dolor ea exercitation irure non dolor cillum irure minim minim quis incididunt. Veniam ullamco consequat excepteur nulla est. Aliquip est elit dolore aute et sit magna Lorem esse qui.",
    },
    {
      id: 2,
      image: recentpic,
      name: "Alter Ego",
      comment: "Consequat amet dolor ea exercitation irure non dolor cillum irure minim minim quis incididunt. Veniam ullamco consequat excepteur nulla est. Aliquip est elit dolore aute et sit magna Lorem esse qui.",
    },
    {
      id: 3,
      image: joseph_gonzalez,
      name: "Joseph Gonzalez",
      comment: "Consequat amet dolor ea exercitation irure non dolor cillum irure minim minim quis incididunt. Veniam ullamco consequat excepteur nulla est. Aliquip est elit dolore aute et sit magna Lorem esse qui.",
    },
  ]
  
  return (
    <Section title='Testimonials 👁️‍🗨️' subtitle="This is what my other clients have to say about me.  I'd like to share my career feedback with you.">
      <div className="max-w-xl flex flex-col gap-8">
        {TESTIMONIALS.map(({id, image, name, comment}) => (
        <div 
        key={id} 
        className="flex p-4 rounded-xl shadow-md
        dark:shadow-gray-300"
        >
          <div className="w-1/3">
            <Image src={image} alt={name}
            className="w-30 h-30 object-cover object-top pt-2"/>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm font-light">{comment}</p>
          </div>
        </div>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials