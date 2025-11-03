import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuData = [
  { label: 'Help?', href: '/faq/' },
  { label: 'Track Order', href: '/track-order/' },
  {
    label: 'Language',
    dropdown: ['English', 'Hindi', 'Gujarati'],
  },
  {
    label: 'Currency',
    dropdown: ['USD $', 'EUR €'],
  },
];

function TopHeader() {
  return (
    <div className="container-fluid bg-light border-bottom py-2">
      <div className="row align-items-center">
        
        {/* LEFT SIDE */}
        <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <small className="text-dark fw-medium">Flat 50% Off On Grocery Shop.</small>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end flex-wrap gap-3">
          {menuData.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div className="dropdown">
                  <a
                    className="dropdown-toggle text-dark text-decoration-none"
                    href="#"
                    id={`dropdownMenu-${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={`dropdownMenu-${index}`}>
                    {item.dropdown.map((subItem, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a className="text-dark text-decoration-none" href={item.href}>{item.label}</a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TopHeader;









































// import React from 'react';
// import './TopHeader.css';

// const menuData = [
//   { label: 'Help?', href: '/faq/' },
//   { label: 'Track Order', href: '/track-order/' },
//   {
//     label: 'Language',
//     dropdown: ['English', 'Hindi', 'Gujarati'],
//   },
//   {
//     label: 'Currency',
//     dropdown: ['USD $', 'EUR €'],
//   },
// ];

// function TopHeader() {
//   return (
//     <div className="container-fluid bg-lighter py-2 border-bottom">
//       <div className="row align-items-center">
        
//         {/* ✅ LEFT COLUMN */}
//         <div className="col-md-6 text-center text-md-start">
//           <h6 className="m-0 heading6">Flat 50% Off On Grocery Shop.</h6>
//         </div>
        
//         {/* ✅ RIGHT COLUMN */}
//         <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
//           <div className="col-right-bar d-flex gap-3">
//             {menuData.map((item, index) => (
//               <div className="cols" key={index}>
//                 {item.dropdown ? (
//                   <div className="custom-dropdown">
//                     <a className="bb-dropdown-toggle" href="#">
//                       {item.label}
//                     </a>
//                     <ul className="dropdown">
//                       {item.dropdown.map((subItem, i) => (
//                         <li key={i}>
//                           <a href="#">{subItem}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <a href={item.href}>{item.label}</a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default TopHeader;
