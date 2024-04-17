import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants/constants'
import { Instagram } from 'lucide-react'
import { Linkedin,Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className='mt-20 border-t pt-12 border-neutral-700'>
        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4"> */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className='mt-4'>
                <h3 className='text-xl font-bold mb-4'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link,index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-blue-700">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-4'>
                <h3 className='text-xl font-bold mb-4'>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link,index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-blue-700">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-4'>
                <h3 className='text-xl font-bold mb-4'>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-blue-700">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='border-t flex flex-wrap justify-between items-center border-neutral-700 mt-10'>
            <p className='my-5 text-neutral-400'>Design and Developed by <a className='text-neutral-500 underline hover:text-blue-500' rel="noreferrer" href='https://www.linkedin.com/in/pavanbandi1999/' target='_blank'>Pavan Bandi</a></p>
            <div className='my-5 flex gap-4'>
                <a href="https://www.instagram.com/pavanbandi1999/" target="_blank" rel="noreferrer" className="no-underline hover:underline flex items-center gap-2 text-neutral-400 hover:text-blue-500"><Instagram /></a>
                <a href="https://www.linkedin.com/in/pavanbandi1999/" target="_blank" rel="noreferrer" className=" no-underline hover:underline flex items-center gap-2 text-neutral-400 hover:text-blue-500"><Linkedin /></a>
                <a href="https://github.com/pavanbandi199/" target="_blank" rel="noreferrer" className="no-underline hover:underline flex items-center gap-2 text-neutral-400 hover:text-blue-500"><Github /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer