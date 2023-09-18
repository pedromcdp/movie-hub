import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"
import { Transition } from "@headlessui/react"

function ListItem({ item, type }) {
  return (
    <li className="hover:scale-110 ease-out duration-300 mb-6">
      <Link
        key={item.id}
        href={`/${type || item?.media_type}/${item.id}`}
        passHref
      >
        <Transition
          show={true}
          appear={true}
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          className="w-36 space-y-2"
        >
          <div className="relative flex h-52 w-36 bg-gray-50 bg-opacity-10 z-0 col-span-1 rounded-lg items-center justify-center font-medium tracking-wide text-white">
            {item.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w300/${item?.poster_path}`}
                alt={item.name || item.title}
                fill={true}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                sizes="(max-width: 640px) 100vw, 300px"
                className="rounded-lg"
                priority
                unoptimized
              />
            ) : (
              <span className="px-2">{item.name || item.title}</span>
            )}
          </div>
          <p className="text-white tracking-wide w-full text-center leading-4">
            {item?.title || item?.name}
          </p>
        </Transition>
      </Link>
    </li>
  )
}

export default memo(ListItem)

ListItem.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
}
