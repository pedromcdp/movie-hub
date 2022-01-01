import Image from "next/image"

function CreditsItem({ person }) {
  return (
    <div className="space-y-1 w-32">
      <div className="relative flex h-52 w-32 bg-gray-50 bg-opacity-10 my-2 z-0 rounded-lg items-center justify-center font-medium tracking-wide text-white">
        {person?.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300/${person?.profile_path}`}
            alt={person.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
            priority
          />
        ) : (
          <span className="px-2">{person?.name}</span>
        )}
      </div>
      <p className="text-white tracking-wide w-full text-center leading-4">
        {person?.name}
      </p>
      <p className="text-white font-light tracking-wide w-full text-center leading-4">
        {person?.character || person?.job}
      </p>
    </div>
  )
}
export default CreditsItem
