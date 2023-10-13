"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { checkout } from '@/checkout';
const dotenv = require("dotenv")


dotenv.config()

export default function Home() {
  return (
   <main className={styles.main}>
    <div>
      <Image alt = 'vercel' src="/vercel.svg" width={400} height={50}/>
    </div>
    <button className={styles.button} onClick={(()=>{
      checkout({
        lineItems: [{price :"price_1O0fIySBaGK1HCW2teQ0tc3n",quantity:1}]
      })
    })}>Buy Now</button>
   </main>
  )
}
