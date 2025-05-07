import React, { useState, useMemo, Profiler } from 'react';
import { useNavigate } from 'react-router';
import Card from '../molecules/Card.jsx';

function CardSection () {
  const [activeCategory, setActiveCategory] = useState('semua');
  const navigate = useNavigate();

  const toAdmin = () => {
    navigate('/admin')
  }

  const categories = [
    { id: 'semua', name: 'Semua Kelas' },
    { id: 'pemasaran', name: 'Pemasaran' },
    { id: 'desain', name: 'Desain' },
    { id: 'pengembangan', name: 'Pengembangan Diri' },
    { id: 'bisnis', name: 'Bisnis' }
  ];

  const cardData = [
    {
      id: 1,
      category: 'desain',
      imageUrl: "src/assets/images/Card-Images/img1.svg",
      title: "Dasar-dasar UI/UX Design",
      description: "Pelajari fundamental desain antarmuka pengguna modern",
      profileIcon: "src/assets/images/Avatar-Icon/avatar1.svg",
      profile: "Jenna Ortega",
      status: "Senior Accountant di ",
      ratingIcon: "src/assets/images/yellow-star.svg",
      rating: 4.5,
      price: "300K"
    },
    {
      id: 2,
      category: 'pemasaran',
      imageUrl: "src/assets/images/Card-Images/img.svg",
      title: "Digital Marketing untuk Pemula",
      description: "Strategi pemasaran digital yang efektif untuk bisnis Anda"
    },
    {
      id: 3,
      category: 'pengembangan',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+3",
      title: "Pengembangan Diri & Leadership",
      description: "Tingkatkan soft skill dan kemampuan kepemimpinan Anda"
    },
    {
      id: 4,
      category: 'bisnis',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+4",
      title: "Manajemen Bisnis Online",
      description: "Kelola bisnis online Anda dengan lebih efisien"
    },
    {
      id: 5,
      category: 'pemasaran',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+5",
      title: "Content Creation & Copywriting",
      description: "Buat konten menarik yang mengkonversi"
    },
    {
      id: 6,
      category: 'pemasaran',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+6",
      title: "Social Media Strategy",
      description: "Optimalkan kehadiran brand Anda di media sosial"
    },
    {
      id: 7,
      category: 'bisnis',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+7",
      title: "Data Analytics untuk Bisnis",
      description: "Gunakan data untuk pengambilan keputusan bisnis"
    },
    {
      id: 8,
      category: 'pengembangan',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+8",
      title: "Public Speaking & Presentasi",
      description: "Tingkatkan kemampuan berbicara di depan umum"
    },
    {
      id: 9,
      category: 'bisnis',
      imageUrl: "https://via.placeholder.com/400x200?text=Kelas+9",
      title: "Manajemen Keuangan Pribadi",
      description: "Kelola keuangan pribadi Anda dengan lebih bijak"
    }
  ];

  const filteredCards = useMemo(() => {
    if (activeCategory === 'semua') {
      return cardData;
    }
    return cardData.filter(card => card.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
        <div className='container mx-auto px-4 lg:px-20'>
          <h3>Koleksi Video Pembelajaran Unggulan</h3>
          <p className='text-textDark-secondary mb-6'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
          
          <div className='relative mb-8 overflow-hidden '>
            <div className='flex overflow-x-auto pb-3 hide-scrollbar justify-between'>
              <div className='flex gap-6 min-w-max'>
                {categories.map((category) => (
                  <div key={category.id} className="relative">
                    <button
                      className={`py-3 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
                        activeCategory === category.id
                          ? 'text-tertiary-default hover:cursor-pointer'
                          : 'text-textDark-secondary hover:cursor-pointer'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                    
                    {/* Underline */}
                    <div 
                      className={`absolute bottom-0 left-0 h-1 pb-1 bg-tertiary-default transition-transform duration-300 w-full rounded-xl ${
                        activeCategory === category.id 
                          ? 'scale-x-50' 
                          : 'scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left' }}
                    ></div>
                  </div>
                ))}
              </div>
              <button
                type='button'
                onClick={toAdmin}
                className='text-white bg-primary-default rounded-2xl p-3'
              >
                Admin
              </button>
            </div>
          </div>
        
        {/* Cards Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card 
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              icon={card.profileIcon}
              profile={card.profile}
              status={card.status}
              ratingIcon={card.ratingIcon}
              rating={card.rating}
              price={card.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p>Tidak ada kelas dalam kategori ini.</p>
          </div>
        )}
        </div>
      </div>
    </>
  )

}

export default CardSection