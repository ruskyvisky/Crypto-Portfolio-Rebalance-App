/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#003366'; // Koyu Kurumsal Mavi - Ana vurgu rengi
const tintColorDark = '#A7D9FF';  // Açık Mavi - Karanlık modda ana vurgu için

export const Colors = {
  light: {
    // Temel Metin ve Arka Plan Renkleri
    text: '#212121',        // Koyu Gri - Başlıklar ve ana metinler için
    background: '#F5F5F5',  // Açık Gri - Genel ekran arka planı

    // Vurgu ve Etkileşim Renkleri
    primary: tintColorLight, // Ana rengimiz: Güvenilirlik ve profesyonellik
    accent: '#4CAF50',       // Yeşil - Pozitif eylemler, başarılı durumlar, grafiklerde artış
    warning: '#D32F2F',      // Kırmızı - Hata, uyarı, negatif durumlar, grafiklerde düşüş
    info: '#2196F3',         // Parlak Mavi - Bilgilendirici mesajlar, bazı grafik öğeleri
    
    // UI Bileşen Renkleri
    card: '#FFFFFF',         // Kartlar, paneller ve bileşen arka planları
    border: '#E0E0E0',       // Sınırlar, ayırıcılar ve giriş alanı çerçeveleri
    placeholder: '#BDBDBD',  // Giriş alanlarındaki yer tutucu metin
    subText: '#757575',      // İkincil metinler, açıklamalar

    // Sekme ve İkon Renkleri (Mevcut yapına uyumlu)
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    // Temel Metin ve Arka Plan Renkleri
    text: '#ECEDEE',        // Beyaza yakın - Koyu arka plan üzerinde okunabilirlik için
    background: '#1A1A1A',  // Çok Koyu Gri - Genel ekran arka planı

    // Vurgu ve Etkileşim Renkleri
    primary: tintColorDark,  // Karanlık modda ana rengimiz: Açık Mavi
    accent: '#81C784',       // Açık Yeşil - Pozitif eylemler, başarılı durumlar, grafiklerde artış
    warning: '#EF9A9A',      // Açık Kırmızı - Hata, uyarı, negatif durumlar, grafiklerde düşüş
    info: '#90CAF9',         // Açık Mavi - Bilgilendirici mesajlar, bazı grafik öğeleri
    
    // UI Bileşen Renkleri
    card: '#2C2C2C',         // Kartlar, paneller ve bileşen arka planları
    border: '#424242',       // Sınırlar, ayırıcılar ve giriş alanı çerçeveleri
    placeholder: '#9E9E9E',  // Giriş alanlarındaki yer tutucu metin
    subText: '#B0B0B0',      // İkincil metinler, açıklamalar

    // Sekme ve İkon Renkleri (Mevcut yapına uyumlu)
    icon: '#CFCFCF',
    tabIconDefault: '#B0B0B0',
    tabIconSelected: tintColorDark,
  },
};
