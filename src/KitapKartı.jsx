import { Star } from 'lucide-react';

function KitapKartı({ baslik, yazar, kategori, id, favoriDeMi, durum, favoriyeEkle, durumDegistir }) {
  return (
    
    <div className="kitap-karti"> 

      {}
      <h3>{baslik}</h3>
      <p>{yazar} · {kategori}</p>

      <div>
        {}
        <select
          value={durum}
          onChange={(e) => durumDegistir(id, e.target.value)}
        >
          <option value="">Durum Seçin</option>
          <option value="okuyacağım">📚 Okuyacağım</option>
          <option value="okudum">✅ Okudum</option>
          <option value="okuyorum">📖 Okuyorum</option>
          <option value="bıraktım">❌ Bıraktım</option>
        </select>
      </div>

      {}
      <button onClick={() => favoriyeEkle(id)}>
        <Star size={16} fill={favoriDeMi ? "white" : "none"} />
        {favoriDeMi ? 'Favoride' : 'Favori Ekle'}
      </button>
    </div>
  );
}

export default KitapKartı;