import React from 'react'
import styles from './Portfolio.module.css';

export default function Portfolio({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div className={`${styles['portfolio-container']}`}>
      {children}
    </div>
  )
}
