import './Button.css'
import React from 'react'

function Button({ link, name }) {
  const href = encodeURI(link)

  // fallback downloader (use when download attribute is ignored)
  const handleDownload = async (e) => {
    // keep normal anchor behaviour if download attribute works
    if (!href.startsWith('http') || new URL(href, window.location.href).origin === window.location.origin) {
      return
    }
    e.preventDefault()
    try {
      const res = await fetch(href, { mode: 'cors' })
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = name || ''
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      // fallback: open in new tab
      window.open(href, '_blank', 'noopener')
    }
  }

  return (
    <div>
      <a href={href} download={name || ''} onClick={handleDownload} rel="noopener noreferrer">
        <button className="card-btn">Download PDF</button>
      </a>
    </div>
  )
}

export default Button