import React from 'react'
import card from '../assets/css/card.module.css'
import Link from 'next/link'

type Props = {
  imgUrl: string,
  title: string,
  hrefUrl: string,
}

const CardNews = ({ imgUrl, title, hrefUrl }: Props) => {
  return (
    <div className={card["card"]}>
      <Link href={hrefUrl} className={card["img-redirect"]}>
        <img src={imgUrl} alt="team1" className={card["img-fluid"]} />
      </Link>
      <div className={card["card-body"]}>
        <h3 className={card["name_staff"]}><Link href={hrefUrl}>{title}</Link></h3>
        <p>Volkswagen</p>
      </div>
    </div>
  )
}

export default CardNews
