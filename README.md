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

## 🛠 Kurulum ve Çalıştırma (Installation)

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Repoyu Klonlayın:**
    ```bash
    git clone [https://github.com/kullaniciadin/proje-ismin.git](https://github.com/kullaniciadin/proje-ismin.git)
    cd proje-ismin
    ```

2.  **Gerekli Paketleri Yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    ```

## 📊 Grafana Dashboard Kurulumu (ÖNEMLİ)

Proje içerisindeki grafiklerin çalışması için `dashboard.json` dosyasını Grafana'ya yüklemeniz gerekmektedir.

1.  Grafana arayüzüne giriş yapın.
2.  Sol menüden **Dashboards** sekmesine gidin.
3.  **New > Import** seçeneğine tıklayın.
4.  Proje dosyaları içinde bulunan **`dashboard.json`** dosyasını buraya yükleyin veya içeriğini yapıştırın.
5.  **Load** butonuna basarak kurulumu tamamlayın.

## 📷 Ekran Görüntüleri
<img width="1440" height="900" alt="Screenshot 2025-12-12 at 7 33 47 PM" src="https://github.com/user-attachments/assets/f5a6bd9d-0cb8-409a-bdc8-a1c0dc337d57" />

