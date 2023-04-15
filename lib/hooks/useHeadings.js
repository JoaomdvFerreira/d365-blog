import React, { useState, useEffect } from 'react'

export function useHeadings() {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3, article h4, article h5, article h6')
    )
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        title: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
      }))

    setHeadings(elements)
  }, [])

  return headings
}
