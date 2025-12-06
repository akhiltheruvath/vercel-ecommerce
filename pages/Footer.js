// import styles from "../app/styles/footer.module.css"
// export default function Footer(){
//     return(
//          <div>
//                <div className={styles.main}>
//             <div className="container">
//                 <div className="row">

               
//                     <div className="col"></div>

//                       <div className="col">Products

//                         <div className="">Md Bootstrap</div>
//                         <div className="">Brand flow</div>
//                       </div>
                      

//                         <div className="col">Usefull links

//                             <div className="">your account</div>
//                              <div className="">shiping rate</div>
//                               <div className="">help</div>


//                         </div>



//                           <div className="col">Contact
//                               <p className="footer-info">
//     <i className="fa fa-map-marker"></i> New York, NY 10012, US
//   </p>

//   <p className="footer-info">
//     <i className="fa fa-envelope"></i> info@example.com
//   </p>

//   <p className="footer-info">
//     <i className="fa fa-phone"></i> +01 234 567 88
//   </p>

//   <p className="footer-info">
//     <i className="fa fa-print"></i> +01 234 567 89
//   </p>
//    </div>
//        </div>
//          </div>
//            </div>

//         </div>
//     )
// }

// components/Footer.jsx


import styles from '../app/styles/footer.module.css'; 

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Products</h5>
            <div>Md. Bootstrap</div>
            <div>Brand flow</div>
          </div>

          <div className="col">
            <h5>Useful links</h5>
            <div>your account</div>
            <div>shipping rate</div>
            <div>help</div>
          </div>

          <div className="col">
            <p>© 2025 MySite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
