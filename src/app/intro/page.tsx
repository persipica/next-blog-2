import Link from "next/link"
import React from "react"

export default function IntroPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-8'>자기 소개</h1>

      <Image
        src='/blog3.jpg'
        width='200'
        height='200'
        alt='profile'
        className='mb-4'
      />

      <div>
        <p>연락처: 000-0000-0000</p>
        <p>
          Link:
          <Link href='https://gitgub.com/Ibcsultan' className='text-green-400'>
            Github
          </Link>
        </p>
      </div>
    </div>
  )
}
