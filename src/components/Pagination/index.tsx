import { usePostsContext } from '@/contexts/posts'
import React from 'react'

interface PaginationComponentProps {
  currentPage: number
  onPageChange: (page: number) => void
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  onPageChange,
}) => {
  const { posts } = usePostsContext()
  const totalPages = Math.ceil(posts.length / 2)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  return (
    <div className='bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md'>
    <button
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
    >
      Anterior
    </button>
    <span className='text-gray-700'>
      Página {currentPage} de {totalPages}
    </span>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
    >
      Próxima
    </button>
  </div>
  )
}

export default PaginationComponent
