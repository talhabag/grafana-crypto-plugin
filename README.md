# MIS 233 -  FİNAL PROJECT (Crypto Data Visualization Project)

Bu proje, Boğaziçi Üniversitesi MIS 233 dersi kapsamında geliştirilmiştir. Projenin temel amacı, canlı kripto para verilerini çekerek Grafana üzerinde görselleştirmektir.

##  Proje Sahibi
* **Ad Soyad:** Talha Bağ
* **Bölüm:** Yönetim Bilişim Sistemleri (MIS)

##  Proje Hakkında
Bu uygulama, Binance/CoinGecko API'sini kullanarak anlık fiyat verilerini çeker ve bu verileri Grafana dashboard'u üzerinde anlamlı grafiklere dönüştürür.

### Kullanılan Teknolojiler
* **Frontend:** React, Vite
* **Backend / Veri İşleme:** Node.js
* **Görselleştirme:** Grafana
* **Veri Tabanı:** Drizzle ORM (PostgreSQL)

##  Ekran Görüntüleri
<img width="1440" height="900" alt="Screenshot 2025-12-12 at 7 33 47 PM" src="https://github.com/user-attachments/assets/f5a6bd9d-0cb8-409a-bdc8-a1c0dc337d57" />

## Projeyi Oluştururken Karşılaşılan zorluklar
Canlı Veri Çekme (Data Fetching) ve API Yönetimi'ndeki Zorluklar:
 Bitcoin verilerini çekmek için kullanılan halka açık API servislerinde (örn. CoinGecko veya Binance API) yaşanan CORS (Cross-Origin Resource Sharing) hataları ve API'nin yanıt verme süresindeki gecikmeler, verinin panele akmasını engelledi.

 Çözüm:
 Modern JavaScript'in async/await yapısı ve fetch API kullanılarak asenkron veri çekme fonksiyonları yazıldı ve veri sürekliliğini sağlamak için belirli aralıklarla (interval) tetiklenen bir güncelleme mekanizması kuruldu.

 Dashboard Yapılandırması ve JSON Yönetimi'ndeki Zorluklar:
  Grafana arayüzü üzerinden yapılan bazı görsel ayarlamaların (panel başlıkları, yenileme hızları vb.) kod tarafındaki değişikliklerle senkronize olmaması veya kaybolması sorunu yaşandı. Ayrıca projeyi başka bir ortama taşırken ayarların korunması gerekiyordu.

  Çözüm:
  Arayüz üzerinden manuel ayar yapmak yerine, projenin kaynak kodundaki dashboard.json dosyası doğrudan düzenlendi ve panel ID'leri, veri kaynağı (datasource) tanımları ve varsayılan görünüm ayarları bu JSON dosyasına hard-code edilerek projenin taşınabilirliği ve her ortamda aynı şekilde çalışması garanti altına alındı.

  Görselleştirme ve UX Zorluğu:
  Veri ilk yüklendiğinde grafiğin boş görünmesi veya verilerin anlık değişimlerinin kullanıcı tarafından net algılanamaması.

  Çözüm:
  Veri yüklenene kadar kullanıcıya bir "Loading..." durumu (spinner) gösterildi ve bitcoin fiyatındaki artış ve azalışı vurgulamak için renk kodlamaları (yeşil/kırmızı) kullanıldı ve grafik üzerindeki tooltip (üzerine gelince çıkan bilgi kutucuğu) detaylandırıldı.


## Projede yapılan BONUSLAR
1-Tıklanabiliyo olması
2-Veriyi dışardan alma
3-Grafanaya json (url data source) data source eklendi
4-Grafanada datasource dan gelen veriyi panel pluginin içinde kullandım
5-Yesoreyeram-infinity kullanıldı
6-Dashbord.json oluşturulup kodlar paylaşılabilir hale geldi
7-Loading... yazısı
8-farklı renkler kullanılarak bir artış-azalış tablosunun vurgulanması
9-github paylaşıldı

-Hocam aklıma gelen bonuslar şu an bunlar özellikle sizin tavsiyenizle Yesoreyeram-infinity kullanımı ve data source'dan gelen veriyi panel pluginin içinde kullanıp öyle aktarılması ve dasboard.json oluşturup paylaşılabilir hale gelmesi bu projede yaptığım en can alıcı noktalar ve beni de en çok zorlayan noktalar.
  

