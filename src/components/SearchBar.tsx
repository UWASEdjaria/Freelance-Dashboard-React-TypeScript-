interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border rounded mb-4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
