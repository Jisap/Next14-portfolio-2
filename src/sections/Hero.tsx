import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'

export const HeroSection = () => {
  return (
    <div className='py-32'>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className='size-[100px]'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex'>
            <div></div>
            <div>Available for a new projects</div>
          </div>
        </div>
      <h1>Building Exceptional User Experiences</h1>
      </div>


      <p>
        I specialize in transforming designs into funcitonal, high-performing web applications. Let's discuss your next project.
      </p>

      <div>
        <button>
          <span>Explore My Work</span>
          <ArrowDown />
        </button>
        <button>
          <span>🖐</span>
          Connect
        </button>
      </div>
    </div>
  )
};
