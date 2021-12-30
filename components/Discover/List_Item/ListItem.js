import Image from "next/image"
import Link from "next/link"
function ListItem({ item, type }) {
  return (
    <Link
      key={item.id}
      href={`/${type || item?.media_type}/${item.id}`}
      passHref
    >
      <div className="w-36 hover:scale-125 ease-out duration-300 hover:space-y-2">
        <div className="relative flex h-52 w-36 bg-gray-50 bg-opacity-10 my-6 z-0 col-span-1 rounded-lg items-center justify-center font-medium tracking-wide text-white">
          {item.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w300/${item?.poster_path}`}
              alt={item.name || item.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              priority
            />
          ) : (
            <span className="px-2">{item.name || item.title}</span>
          )}
        </div>
        <p className="text-white font-medium tracking-wide w-full text-center">
          {item?.title || item?.name}
        </p>
      </div>
    </Link>
  )
}

export default ListItem
