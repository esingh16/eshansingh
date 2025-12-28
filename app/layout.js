export const metadata = {
  title: 'Eshan Singh | Data Science & AI Portfolio',
  description: 'Master of Science in Data Science student at UMD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
