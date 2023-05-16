import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"

function ListItem({ item, type }) {
  return (
    <li className="hover:scale-125 ease-out duration-300 mb-6">
      <Link
        key={item.id}
        href={`/${type || item?.media_type}/${item.id}`}
        passHref
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-36 space-y-2"
        >
          <div className="relative flex h-52 w-36 bg-gray-50 bg-opacity-10  z-0 col-span-1 rounded-lg items-center justify-center font-medium tracking-wide text-white">
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
        </motion.div>
      </Link>
    </li>
  )
}

export default memo(ListItem)

ListItem.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
}
