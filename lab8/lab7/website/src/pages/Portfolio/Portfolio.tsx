import React from 'react'
import { useNavigate } from 'react-router-dom'
import portfolioData from '../../data/portfolio.json'
import { PortfolioCase } from '../../components/PortfolioCase'
import './Portfolio.css'

interface PortfolioItem {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  client: string
  industry: string
  services: string[]
  results: string[]
  galleryImages?: string[]
}

const Portfolio: React.FC = () => {
  const navigate = useNavigate()
  const portfolioItems: PortfolioItem[] = portfolioData

  const handleOrder = () => {
    navigate('/contacts')
  }

  return (
    <div className="portfolio">
      <h1>Наше портфолио</h1>
      <p>Примеры наших успешных проектов и кейсов</p>
      
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <PortfolioCase
            key={item.id}
            title={item.title}
            description={item.description}
            client={item.client}
            industry={item.industry}
            services={item.services}
            results={item.results}
            imageUrl={item.imageUrl}
            galleryImages={item.galleryImages}
            onViewDetails={() => {}}
            onOrder={handleOrder}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio