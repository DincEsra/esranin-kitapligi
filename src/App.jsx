
import './App.css';
import { useState } from "react";
import AramaCubugu from "./AramaCubugu.jsx"; 
import KategoriFiltre from "./KategoriFiltre.jsx";
import DurumFiltre from "./DurumFiltre.jsx";
import KitapListe from "./KitapListe.jsx";
import FavoriPaneli from "./FavoriPaneli.jsx";

 

const kitaplar = [
  {
    id: 1,
    baslik: "Aşk ve Gurur",
    yazar: "Jane Eyre",
    kategori: "Dünya Klasikleri",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 2,
    baslik: "Uzayda Piknik",
    yazar: "Arkadi Strugatski",
    kategori: "Bilim Kurgu",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 3,
    baslik: "İnce Memed 1",
    yazar: "Yaşar Kemal",
    kategori: "Türk Klasikleri",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 4,
    baslik: "Vahşetin Çağrısı",
    yazar: "Jack London",
    kategori: "Modern Klasikler",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 5,
    baslik: "Ahlak-İyinin ve Kötünün İcadı",
    yazar: "Hanno Sauer",
    kategori: "Davranış Bilimleri",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 6,
    baslik: "Cadılar Meclisi",
    yazar: "Lizzie Fry",
    kategori: "Fantastik",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 7,
    baslik: "İntermezzo",
    yazar: "Sally Rooney",
    kategori: "Edebi Kurgu",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 8,
    baslik: "Antik Roma'da Günlük Hayat",
    yazar: "David Matz",
    kategori: "Tarih ve Eleştiri",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 9,
    baslik: "Suç ve Ceza",
    yazar: "Fyodor Dostoevsky",
    kategori: "Dünya Klasikleri",
    favoriDeMi: false,
    durum: "",
  },
  {
    id: 10,
    baslik: "Arkadaşlarla Sohbetler",
    yazar: "Sally Rooney",
    kategori: "Edebi Kurgu",
    favoriDeMi: false,
    durum: "",
  },
];

function App() {
  const [tumKitaplar, setTumKitaplar] = useState(kitaplar);
  const [aramaMetni, setAramaMetni] = useState("");
  const [seciliKategori, setSeciliKategori] = useState("Tümü");
  const [seciliDurum, setSeciliDurum] = useState("hepsi");

  const favoriyeEkle = (id) => {
    setTumKitaplar((prevKitaplar) =>
      prevKitaplar.map((kitap) =>
        kitap.id === id ? { ...kitap, favoriDeMi: !kitap.favoriDeMi } : kitap
      )
    );
  };

  const durumDegistir = (id, yeniDurum) => {
    setTumKitaplar((prevKitaplar) =>
      prevKitaplar.map((kitap) =>
        kitap.id === id ? { ...kitap, durum: yeniDurum } : kitap
      )
    );
  };

  const filtrelenmisKitaplar = tumKitaplar.filter((kitap) => {
    const aramaUyumu =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUyumu =
      seciliKategori === "Tümü" || kitap.kategori === seciliKategori;
    const durumUyumu = seciliDurum === "hepsi" || kitap.durum === seciliDurum;
    return aramaUyumu && kategoriUyumu && durumUyumu;
  });

  const favoriKitaplar = tumKitaplar.filter((kitap) => kitap.favoriDeMi);

  const istatistikler = {
    toplam: tumKitaplar.length,
    okudum: tumKitaplar.filter((k) => k.durum === "okudum").length,
    okuyorum: tumKitaplar.filter((k) => k.durum === "okuyorum").length,
    okuyacağım: tumKitaplar.filter((k) => k.durum === "okuyacağım").length,
    bıraktım: tumKitaplar.filter((k) => k.durum === "bıraktım").length,
  };

  return (
  
    <div>
      <div>
        {}
        <header>
          {}
          <h1>
            📚 Esra'nın Kitaplığı
          </h1>
          {}
          <p>
            Kitaplığıma Hoş Geldiniz!
          </p>

          {}
          <div>
            {}
            <span>
              Toplam: {istatistikler.toplam}
            </span>
            <span>
              ✅ Okudum: {istatistikler.okudum}
            </span>
            <span>
              📖 Okuyorum: {istatistikler.okuyorum}
            </span>
            <span>
              📚 Okuyacağım: {istatistikler.okuyacağım}
            </span>
            <span>
              ❌ Bıraktım: {istatistikler.bıraktım}
            </span>
          </div>
        </header>

        {}
        <div className="ana-icerik">
          
          <div className="kitap-sutunu">
            {}
            <div className="kutu"> 
              <AramaCubugu value={aramaMetni} onChange={setAramaMetni} />
              <KategoriFiltre
                seciliKategori={seciliKategori}
                setKategori={setSeciliKategori}
              />
              <DurumFiltre
                seciliDurum={seciliDurum}
                setDurum={setSeciliDurum}
              />

              {}
              <div>
                <p>
                  {filtrelenmisKitaplar.length} kitap bulundu
                </p>
              </div>

              <KitapListe
                kitaplar={filtrelenmisKitaplar}
                favoriyeEkle={favoriyeEkle}
                durumDegistir={durumDegistir}
              />
            </div>
          </div>

          {}
          <div className="favori-sutunu kutu">
            <FavoriPaneli
              favoriler={favoriKitaplar}
              favoridenCikar={favoriyeEkle}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;