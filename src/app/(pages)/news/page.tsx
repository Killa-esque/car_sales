import React from 'react'
import { getAllNews } from '@/lib/newsApi'

type Props = {}

const NewsPage = async (props: Props) => {

  const allNews : [] = await getAllNews();

  return (
    <div>{allNews.length}</div>
  )
}

export default NewsPage
