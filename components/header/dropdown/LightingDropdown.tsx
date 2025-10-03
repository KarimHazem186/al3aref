import React from 'react'

const LightingDropdown = () => {
    return (
      <div className="p-6 grid grid-cols-3 gap-8 text-sm max-w-screen-xl mx-auto">
          <div>
            <h4 className="font-semibold mb-3">Ceiling Lights</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Chandeliers
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Pendant Lights
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Flush Mounts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Lamps</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Table Lamps
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Floor Lamps
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Desk Lamps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop by Style</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Modern
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Industrial
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Vintage
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  All Styles
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default LightingDropdown