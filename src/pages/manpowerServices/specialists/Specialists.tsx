import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_hse_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_hse_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const Specialists = () => {
     let skillWorkArr = [
          {
               img: cardImage1,
               title: 'HSE Managers',
               link: 'HSE-managers',
               description:
                    'Ensuring compliance with environmental and safety standards in renewable energy plants, LNG terminals, and manufacturing sites.',
          },
          {
               img: cardImage2,
               title: 'Safety Officers',
               link: 'safety-officers',
               description:
                    'Providing on-site safety oversight, risk assessments, and compliance with occupational health and safety regulations.',
          },
     ]
     return (
          <section
               id='HS-specialists'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         HSE (Health, Safety, and Environmental) Specialists
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our HSE Managers and Safety Officers ensure environmental and safety
                         compliance, performing on-site risk assessments and ensuring adherence to
                         regulations.
                    </MainPara>
               </header>
               {skillWorkArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         link={item.link}
                         opacityAnimation={true}
                    />
               ))}
          </section>
     )
}

export default Specialists
