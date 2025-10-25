function FavoriPaneli({ favoriler, favoridenCikar }) {
  const durumEmojileri = {
    okudum: "✅",
    okuyorum: "📖",
    okuyacağım: "📚",
    bıraktım: "❌",
  };

  const durumMetinleri = {
    okudum: "Okudum",
    okuyorum: "Okuyorum",
    okuyacağım: "Okuyacağım",
    bıraktım: "Bıraktım",
  };

  return (
    <div>
      <div className="favori-baslik">
        <span style={{ fontSize: "1.5rem" }}>⭐</span>
        <span>Favoriler</span>
        <span style={{ 
          background: "linear-gradient(135deg, #ffd700, #ffed4e)",
          color: "#000",
          padding: "0.2rem 0.6rem",
          borderRadius: "12px",
          fontSize: "0.9rem",
          fontWeight: "700",
          marginLeft: "auto"
        }}>
          {favoriler.length}
        </span>
      </div>

      {favoriler.length === 0 ? (
        <div className="favori-bos">
          <div className="favori-bos-icon">⭐</div>
          <p>Henüz favori kitap eklemediniz</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", color: "#888" }}>
            Kitaplara ⭐ vererek favorilere ekleyebilirsiniz
          </p>
        </div>
      ) : (
        <div>
          {favoriler.map((kitap) => (
            <div key={kitap.id} className="favori-karti">
              <div style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                fontSize: "1.2rem",
                filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))"
              }}>
                ⭐
              </div>

              <h4 style={{ paddingRight: "2rem" }}>{kitap.baslik}</h4>
              
              <p style={{ 
                color: "#bbb",
                fontSize: "0.9rem",
                marginBottom: "0.5rem"
              }}>
                {kitap.yazar}
              </p>
              
              <p style={{ 
                fontSize: "0.75rem", 
                color: "#777",
                marginBottom: "0.8rem",
                fontStyle: "italic",
                borderTop: "1px solid #333",
                paddingTop: "0.5rem"
              }}>
                {kitap.kategori}
              </p>

              {kitap.durum && (
                <div className={`favori-durum ${kitap.durum}`}>
                  {durumEmojileri[kitap.durum]} {durumMetinleri[kitap.durum]}
                </div>
              )}

              <button
                onClick={() => favoridenCikar(kitap.id)}
                className="kaldir-btn"
              >
                🗑️ Kaldır
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriPaneli;