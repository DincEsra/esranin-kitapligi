function DurumFiltre({ seciliDurum, setDurum }) {
  const durumlar = [
    { value: "hepsi", label: "Tüm Durumlar" },
    { value: "okuyacağım", label: "📚 Okuyacağım" },
    { value: "okuyorum", label: "📖 Okuyorum" },
    { value: "okudum", label: "✅ Okudum" },
    { value: "bıraktım", label: "❌ Bıraktım" }
  ];
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Okuma Durumu</label>
      <select
        value={seciliDurum}
        onChange={(e) => setDurum(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {durumlar.map(durum => (
          <option key={durum.value} value={durum.value}>{durum.label}</option>
        ))}
      </select>
    </div>
  );
}

export default DurumFiltre;