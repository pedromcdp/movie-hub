import Image from "next/image"
import Link from "next/link"
function ListItem({ item, type }) {
  return (
    <Link key={item.id} href={`/${type}/${item.id}`} passHref>
      <div className="relative h-52 w-36 bg-red-100 my-6 hover:scale-125 ease-out duration-300 z-0 col-span-1 rounded-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${item?.poster_path}`}
          alt="movie cover"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
          priority
        />
      </div>
    </Link>
  )
}

export default ListItem
