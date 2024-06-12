import Link from "next/link"
import React from "react"

export default function ProjectPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-8'>프로젝트</h1>

      <div className='bg-grey-200 border border-slate-400 px-4 py-2 rounded-md'>
        <h1 className='text-lg font-bold'>HCJ Demo</h1>
        <p>HTML, CSS, Javascript의 종합 활용예제</p>
        <Link href='#' className='text-green-800'>
          Link
        </Link>
      </div>

      <div className='bg-grey-200 border border-slate-400 px-4 py-2 rounded-md'>
        <h1 className='text-lg font-bold'>kiosk</h1>
        <p>메뉴주문 키오스크 예제</p>
        <Link href='#' className='text-green-800'>
          Link
        </Link>
      </div>
    </div>
  )
}
