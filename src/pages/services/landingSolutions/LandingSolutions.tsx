import React from 'react'
import styles from './LandingSolutions.module.scss'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import image_frst from '../../../assets/images/img_row_1.png'
import image_sec from '../../../assets/images/img_row_2.png'
import image_third from '../../../assets/images/img_row_3.png'
import image_four from '../../../assets/images/img_row_4.png'
import image_five from '../../../assets/images/img_row_5.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const LandingSolutions = () => {
     let arr = [image_frst, image_sec, image_frst, image_sec, image_frst]
     return (
          <section className={styles.landing_Solutions}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         <div className={styles.label}>Services</div>
                         Delivering a Full <span>Spectrum of Solutions </span>for Your Success
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We deliver innovative, sustainable solutions that drive impactful change,
                         empowering businesses to thrive and meet evolving industry demands.
                    </MainPara>
               </header>
               {/* <div className={styles.image_con_flex}>
                    {arr.map((item: any, index: any) => {
                         const isOdd = index % 2 == 0
                         return (
                              <React.Fragment key={index}>
                                   {isOdd ? (
                                        <div className={styles.image_wrapper_odd}>
                                             <Image
                                                  src={image_frst}
                                                  alt=''
                                                  className={styles.image}
                                             />
                                        </div>
                                   ) : (
                                        <div className={styles.image_wrapper_even}>
                                             <Image
                                                  src={image_sec}
                                                  alt=''
                                                  className={styles.image}
                                             />
                                        </div>
                                   )}
                              </React.Fragment>
                         )
                    })}
               </div> */}
               <div className={styles.image_con_grid}>
                    <div className={styles.card}>
                         <Image
                              src={image_frst}
                              priority
                              placeholder='blur'
                              alt=''
                              className={styles.image}
                         />
                    </div>
                    <div className={styles.card}>
                         <Image
                              src={image_sec}
                              priority
                              placeholder='blur'
                              alt=''
                              className={styles.image}
                         />
                    </div>
                    <div className={styles.card}>
                         <Image
                              src={image_third}
                              priority
                              placeholder='blur'
                              alt=''
                              className={styles.image}
                         />
                    </div>
                    <div className={styles.card}>
                         <Image
                              src={image_four}
                              priority
                              placeholder='blur'
                              alt=''
                              className={styles.image}
                         />
                    </div>
                    <div className={styles.card}>
                         <Image
                              src={image_five}
                              priority
                              placeholder='blur'
                              alt=''
                              className={styles.image}
                         />
                    </div>
               </div>
          </section>
     )
}

export default LandingSolutions
