import KitapKartı from './KitapKartı';

function KitapListe({ kitaplar, favoriyeEkle, durumDegistir }) {
  return (
    <div className="space-y-3">
      {kitaplar.map(kitap => (
        <KitapKartı
          key={kitap.id}
          {...kitap}
          favoriyeEkle={favoriyeEkle}
          durumDegistir={durumDegistir}
        />
      ))}
    </div>
  );
}

export default KitapListe;