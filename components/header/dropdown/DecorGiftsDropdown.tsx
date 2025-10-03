import React from 'react'

const DecorGiftsDropdown = () => {
  return (
<div className="p-6 grid grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Decor</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Vases</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Mirrors</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rugs</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Clocks</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Gifts</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Candles</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Stationery</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Books</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Holiday</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Ornaments</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Wrapping Paper</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Gift Bags</a>
              </li>
            </ul>
          </div>
      </div>
  )
}

export default DecorGiftsDropdown