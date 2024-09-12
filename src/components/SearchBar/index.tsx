"use client"

import { usePostsContext } from "@/contexts"
import { Search as SearchIcon } from "react-feather"

interface SearchBarProps extends React.ComponentProps<'input'>{
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className, ...rest }) => {
  const { searchPosts } = usePostsContext()
  
  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    searchPosts(e.target.value);
  }

  return <div className={`flex relative ${className}`}>
      <input
        type="search"
        className="input"
        placeholder="Pesquise um conteúdo..."
        onChange={handleSearchInput}
        {...rest}
      />
      <span className="absolute text-primary top-3 right-4">
        <SearchIcon className="h-5" />
      </span>
    </div>
}
