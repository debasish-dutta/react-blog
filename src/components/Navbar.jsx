import { Link } from "react-router-dom";
// import logo from '../../assets/logo/pl-logo.jpeg';


// export default function Navbar() {
//     return(
//         <div className="bg-blue-500">
//         <div className="top">
//           <div className="topLeft">
//               {/* <img className="logo" src={logo} alt="Logo" /> */}
//           </div>
//           <div className="topCenter">
//             <ul className="topList">
//               <li className="topListItem text-3xl font-bold underline">
//                 <Link className="link" to="/">
//                   HOME
//                 </Link>
//               </li>
//               <li className="topListItem">
//                 <Link className="link" to="/about">
//                   ABOUT ME
//                 </Link>
//               </li>
//               <li className="topListItem">
//                 <Link className="link" to="/blog">
//                   BLOG
//                 </Link>
//               </li>
//               <li className="topListItem">
//                 <Link className="link" to="/podcast">
//                   PODCAST
//                 </Link>
//               </li>
//               <li className="topListItem">
//                 <Link className="link" to="/contact">
//                   CONTACT ME
//                 </Link>
//               </li>
//               {/* <li className="topListItem">
//                 <Link className="link" to="/write">
//                   WRITE
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
// }

const Navbar = () => (
    <div className="bg-blue-500">
      <div className="nav-left">
            LOGO
      </div>
      <div className="Nav">
          <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/blog">All Posts</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link> */}
          </nav>
      </div>
    </div>
  );
  
  export default Navbar;