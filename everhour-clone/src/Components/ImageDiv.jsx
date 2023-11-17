import React from 'react'
import styles from "../Css/ImageDiv.module.css"

const ImageDiv = () => {
  return (
    <div className={styles.ImageDiv}>
      <div className={styles.ImageDiv1}>
        <h1>Everhour has helped 260,000+ people complete over 147 million tasks in over 3 million projects</h1>
        <div className={styles.ImageDiv11}>
          <div className={styles.ImageDiv12}><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxH9RRlmDnr_KPSdhqozrVfKe047hP_4hiOx4lQHEEzZp5ZMrt" alt="" /></div>
          <div className={styles.ImageDiv13}>
            <p>
Everhour helps us track our engineering hours which is a requirement for several Government grants we have received.
<span className={styles.pspan}> Without Everhour, we would be unable to accurately track the hours associated with each individual project we
  are working on as a company.</span> The reports are easily customizable which allows me to extract the data I need.
   Everhour is a great tool for our time tracking needs!</p>
   <p><span className={styles.pspan2}>Kelly Bonneau, CPA</span></p>
   <p>Accounting Manager at <span className={styles.pspan2}>7shifts</span></p>
          </div>
      </div>
      </div>
      <div className={styles.ImageDiv2}>
        <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp" alt="" />
      </div>
    </div>
  )
}

export default ImageDiv
