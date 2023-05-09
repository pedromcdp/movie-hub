import Image from "next/image"

function ProfilePic() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 bg-gradient-to-t from-slate-300 to-white shadow-xl rounded-full relative">
        <Image
          src="/assets/profile.png"
          layout="fill"
          alt="foto de perfil"
          priority
        />
      </div>
      <p className="mt-4 text-white font-medium tracking-wide">
        Pedro Miguel Pereira
      </p>
      <p className=" text-white font-light tracking-wide">@pedromcdp</p>
    </div>
  )
}

export default ProfilePic
