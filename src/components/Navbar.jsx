import React from 'react'

const Navbar = () => {

    const navHeaders = [
        {
            name: "Destination",
            link: "/destinations",
        },
        {
            name: "Inspirations",
            link: "/inspiration",
        },
        {
            name: "About Us",
            link: "/about",
        },
        {
            name: "Your First Safari",
            link: "/safari",
        }
    ]

  return (
    <nav className='container mx-auto justify-between w-full hidden md:block'>
        <div className='sapce-x-3'>

        </div>
    </nav>
  )
}

export default Navbar
