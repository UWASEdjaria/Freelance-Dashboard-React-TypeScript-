interface SearchBarProps {
  onSearch: (text: string) => void;
  placeholder: string;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 bg-transparent border-2  border-red-900 rounded-full mb-4  hover:bg-blue-100 "
      onChange={e => onSearch(e.target.value)} // text typed by user
    />
  );
}
