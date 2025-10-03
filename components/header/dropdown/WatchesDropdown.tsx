import React from 'react'

const WatchesDropdown = () => {
    return (
      <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Brands</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rolex</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Omega</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Tag Heuer</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Cartier</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Type</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Automatic</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Quartz</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Dive</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Chronograph</a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default WatchesDropdown