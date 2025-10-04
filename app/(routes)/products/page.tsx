import React from 'react'
import ProductGrid from './ProductGrid'
import SidebarFilter from './SidebarFilter'

const page = () => {
  return (
      <div className='flex'>
      <SidebarFilter />

      <ProductGrid />
      </div>
  )
}

export default page