"use client"
import styles from "../styles/homepage.module.css"
export default function Homepage(){
    return(
        <div className={styles.main}>
            
            <div className="container p-4">
            <img src="../image/banner.webp" alt="image" />
            </div>

            <div>


                <div  className=" container-fluid row row-cols-1 row-cols-md-4 g-7 p-5">
  <div className="col">
    <div className={styles.card}>

      <img src="../image/watch11.jpeg" className={styles.cardimg}  alt="..."/>

      <div className="card-body">

        <div style={{marginTop:"20px"}} className="card-title">Casio Illuminator</div>  

     <div className="btnWrapper">
  <button className={styles.minimalBtn}>Buy</button>
</div>

       




      </div>
    </div>
  </div>

  <div className="col">
    <div className={styles.card}>
      <img src="../image/watch10.jpeg" className={styles.cardimg}  alt="..."/>
      <div className="card-body">
        <div style={{marginTop:"20px"}} className="card-title">Versace</div>  
        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

    <div className="col">
    <div className={styles.card}>
     <img src="../image/watch4.jpeg" className={styles.cardimg}  alt="..."/>
      <div  className="card-body">
        <div style={{marginTop:"20px",marginLeft:"20px"}} className="card-title">Casio</div>  

        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

   <div className="col">
    <div className={styles.card}>
       <img src="../image/watch8.jpeg" className={styles.cardimg}  alt="..."/>
      <div className="card-body">
        <div style={{marginTop:"20px"}} className="card-title">Tissot chain</div>  

        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

</div>
            </div>


           <div className="container">
            <img src="../image/banner1.webp" height={"100px"}  alt=""/>
            
            </div> 
            
             <div>
            <h2>Best collections</h2>
              </div> 



<div className="container-fluid">
  <div className="row g-3">

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch4.jpeg" className={styles.img_fluid} />
    </div>

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch5.jpeg" className={styles.img_fluid} />
    </div>

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch6.jpeg" className={styles.img_fluid}  />
    </div>

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch7.jpeg" className={styles.img_fluid}  />
    </div>

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch8.jpeg" className={styles.img_fluid}  />
    </div>

    <div className="col-6 col-md-4 col-lg-2">
      <img src="../image/watch9.jpeg" className={styles.img_fluid}  />
    </div>

    

  </div>
</div>




<div  className=" container-fluid row row-cols-1 row-cols-md-4 g-7 p-5">
  <div className="col">
    <div className={styles.card}>

      <img src="../image/watch11.jpeg" className={styles.cardimg}  alt="..."/>

      <div className="card-body">

        <div style={{marginTop:"20px"}} className="card-title">Casio Illuminator</div>  

     <div className="btnWrapper">
  <button className={styles.minimalBtn}>Buy</button>
</div>

       




      </div>
    </div>
  </div>

  <div className="col">
    <div className={styles.card}>
      <img src="../image/watch10.jpeg" className={styles.cardimg}  alt="..."/>
      <div className="card-body">
        <div style={{marginTop:"20px"}} className="card-title">Versace</div>  
        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

    <div className="col">
    <div className={styles.card}>
     <img src="../image/watch4.jpeg" className={styles.cardimg}  alt="..."/>
      <div  className="card-body">
        <div style={{marginTop:"20px",marginLeft:"20px"}} className="card-title">Casio</div>  

        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

   <div className="col">
    <div className={styles.card}>
       <img src="../image/watch8.jpeg" className={styles.cardimg}  alt="..."/>
      <div className="card-body">
        <div style={{marginTop:"20px"}} className="card-title">Tissot chain</div>  

        <button className={styles.minimalBtn}>Buy</button>


      </div>
    </div>
  </div>

</div>











        </div>
    )
}