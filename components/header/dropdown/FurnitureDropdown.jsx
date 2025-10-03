import React from 'react'

const FurnitureDropdown = () => {
  return (
      <div className="absolute left-10 right-10  top-full bg-white h-80 shadow-lg p-6 text-sm z-50 w-screen">
          <div className="grid grid-cols-5 gap-8 px-6">
            {/* Example column */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Seating</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#000000ff" }}
                >
                  <a href="#">Sofas</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Chairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Armchairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dining Room Chairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Seating</a>
                </li>
              </ul>
            </div>

            {/* Repeat for other columns */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Storage</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Cabinets</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dressers</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Night Stands</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Bookcases</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Storage</a>
                </li>
              </ul>
            </div>

            {/* Repeat for rest... */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Tables</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dining Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Coffee Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Side Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Desks</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Tables</a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Shop by Style</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Mid Century Modern</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Art Deco</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Louis XVI</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Styles</a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Shop by Creator</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Milo Baughman</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Gio Ponti</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Le Corbusier</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Ettore Sottsass</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Creators</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default FurnitureDropdown