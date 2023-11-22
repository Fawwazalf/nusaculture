import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex justify-between mx-[117px] mt-7 text-[18px] items-center">
      <p className="text-4xl">Nusa Culture</p>
      <div className="flex">
        <ul>
          <li>
              <Link href="/" className="mx-6">Home</Link>
              <Link href="/" className="mx-6">Explore</Link>
              <Link href="/" className="mx-6">Favorite</Link>
              <Link href="/" className="mx-6">Quiz</Link>
          </li>
        </ul>
          <div className="flex ml-6">
            <p className="mr-2">ID</p>
            <div>|</div>
            <p className="ml-2">EN</p>
          </div>
      </div>
    </nav>
  )
}

export default Navigation