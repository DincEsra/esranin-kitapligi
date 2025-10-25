import { Search } from 'lucide-react';

function AramaCubugu({ value, onChange }) {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Başlık veya yazar ara..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default AramaCubugu;