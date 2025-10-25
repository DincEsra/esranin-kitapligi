

function KategoriFiltre({ seciliKategori, setKategori }) {
  const kategoriler = ["Tümü", "Dünya Klasikleri", "Bilim Kurgu", "Türk Klasikleri", "Modern Klasikler", "Davranış Bilimleri", "Fantastik", "Edebi Kurgu", "Tarih ve Eleştiri"];
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
      <select
        value={seciliKategori}
        onChange={(e) => setKategori(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>{kat}</option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;