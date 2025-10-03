import React from 'react'

const ArtDropdown = () => {
  return (
<div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Paintings</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Abstract</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Landscape</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Portrait</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Modern</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sculptures</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bronze</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Wood</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Ceramic</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Glass</a>
              </li>
            </ul>
          </div>
      </div>
  )
}

export default ArtDropdown