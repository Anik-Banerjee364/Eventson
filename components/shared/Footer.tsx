import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row bg-yellow-100">
        <Link href='/'>
          <Image 
            src="/assets/images/Eventson.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2024 Eventson. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer