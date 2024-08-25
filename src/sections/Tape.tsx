import StarIcon from '@/assets/icons/star.svg'

const words = [
  "performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]

export const TapeSection = () => {
  return (
    <div className='py-16'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400'>
        <div className='flex gap-4'>
          {words.map((word) => (
            <div key={word} className='inline-flex gap-4'>
              <span>{word}</span>
              <StarIcon className="size-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
