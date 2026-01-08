import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path))
  }

  const styles = {
    header: {
      background: 'linear-gradient(135deg, #EFEBE9 0%, #D7CCC8 50%, #BCAAA4 100%)',
      color: '#5D4037',
      padding: '0 20px',
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(93, 64, 55, 0.15)'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      height: '70px'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold' as const,
      color: '#5D4037',
      textDecoration: 'none' as const,
      display: 'flex',
      alignItems: 'center'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      height: '100%'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      height: '100%'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },
    navLink: (active: boolean) => ({
      color: active ? '#FFF' : '#5D4037',
      textDecoration: 'none',
      padding: '0 20px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: active ? '600' : '400',
      background: active ? 'linear-gradient(45deg, #8D6E63, #5D4037)' : 'transparent',
      borderBottom: active ? '3px solid #5D4037' : '3px solid transparent',
      transition: 'all 0.3s ease',
      borderRadius: active ? '6px' : '0'
    })
  }

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Логотип */}
        <Link to="/" style={styles.logo}>
          AdPro
        </Link>

        {/* Навигация */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {[
              { path: '/', label: 'Главная' },
              { path: '/services', label: 'Услуги' },
              { path: '/portfolio', label: 'Портфолио' },
              { path: '/about', label: 'О нас' },
              { path: '/contacts', label: 'Контакты' }
            ].map((item) => (
              <li key={item.path} style={styles.navItem}>
                <Link 
                  to={item.path} 
                  style={styles.navLink(isActive(item.path))}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header