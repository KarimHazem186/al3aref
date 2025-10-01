 export const navItems = [
    {
      label: "NEW ARRIVALS",
    },
    {
      label: "FURNITURE",
      dropdown: (
        <div className="absolute left-10 right-10 mx-auto top-full bg-white h-80 shadow-lg p-6 text-sm z-50 w-screen">
          <div className="grid grid-cols-5 gap-8 px-6">
            {/* Example column */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Seating</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
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
      ),
    },
    {
      label: "LIGHTING",
      dropdown: (
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
      ),
    },
    {
      label: "DECOR & GIFTS",
      dropdown: (
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
      ),
    },
    {
      label: "ART",
      dropdown: (
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
      ),
    },
    {
      label: "JEWELRY",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Necklaces</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rings</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bracelets</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Earrings</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Style</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Vintage</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Modern</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Minimalist</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Statement</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "WATCHES",
      dropdown: (
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
      ),
    },
    {
      label: "FASHION",
      dropdown: (
        <div className="p-6 grid grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Clothing</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Dresses</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Tops</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Jackets</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Pants</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessories</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bags</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Belts</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Hats</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Scarves</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Style</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Casual</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Formal</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Streetwear</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">All Styles</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "WORLD OF 1STDIBS",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Our Story</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Press</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Help Center</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Blog</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "SALE",
      // dropdown: (
      //   <div className="p-6 grid grid-cols-2 gap-4 text-sm">
      //     <div>
      //       <h4 className="font-semibold mb-2">Clearance</h4>
      //       <ul className="space-y-1">
      //         <li><a href="#">Discounted Furniture</a></li>
      //         <li><a href="#">Lighting Deals</a></li>
      //         <li><a href="#">Decor Sales</a></li>
      //       </ul>
      //     </div>
      //     <div>
      //       <h4 className="font-semibold mb-2">Special Offers</h4>
      //       <ul className="space-y-1">
      //         <li><a href="#">Seasonal Sales</a></li>
      //         <li><a href="#">Bundle Deals</a></li>
      //       </ul>
      //     </div>
      //   </div>
      // ),
    },
  ];
