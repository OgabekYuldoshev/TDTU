import React from 'react'
import PageHeader from "../../../components/PageHeader"
import ServiceCard from "../../../components/ServiceCard"
import UsifulLinks from "../../../components/UsifulLinksSwiper"

const UniversityRegulations = () => {
    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title='university_regulations' paths={[
                {
                    title: 'university_regulations'
                }
            ]} />
            <div className='responsive mt-10'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    OLIY TA’LIM MUASSASASINING ASOSIY VAZIFALARI

                    TDTUning asosiy vazifalari quyidagilardan iborat:

                    – shaxsning intellektual, madaniy va ma’naviy-axloqiy kamol topishiga bo’lgan ehtiyojlarini oliy ta’lim va oliy ta’limdan keyingi ma’lumot olishi orqali erishishni qondirish;

                    – iqtisodiyotning tegishli sohalari bo’yicha oliy ma’lumotli mutaxassislar va ilmiy-pedagog kadrlarni tayyorlash, qayta tayyorlash va malakasini oshirish;

                    – oliy ta’limdan keyingi ta’limda katta ilmiy xodim-izlanuvchi va mustaqil izlanuvchi sifatida oliy malakali ilmiy-pedagog kadrlarni tayyorlash;

                    – jamiyatning axloqiy, madaniy va ilmiy qadriyatlarini saqlash va boyitish;

                    – aholi o’rtasida bilimlarni tarqatish, uning ma’naviy-ma’rifiy va madaniy darajasini ko’tarish;

                    –  ilmiy-pedagog xodimlar va ta’lim oluvchilarning ilmiy-tadqiqotlari va ijodiy faoliyatlari orqali fanni taraqqiy ettirish, olingan natijalardan ta’lim jarayonida foydalanish;

                    – har tomonlama rivojlangan va sodiq shaxsni, mustaqil davlat fuqarosini o’z Vatani fidoiysi, xalq, jamiyat va oila oldidagi o’z mas’uliyatini his qiluvchi, milliy va umuminsoniy qadriyatlarni hurmat qiluvchi, xalq an’analarini boyituvchi va mustahkamlovchi, Vatan kelajagi uchun vijdonan va halol mehnat qiluvchi etib shakllantirish;

                    – ilmiy-texnik ishlanmalarni ishlab chiqarishga joriy qilish; sanoat ob’ektlarini loyihalashda ishtirok etish; texnik-iqtisodiy asosnoma va me’yoriy-texnik hujjatlar ishlab chiqish; loyiha-smeta hujjatlarini tuzish; ishlab chiqarishning sanoat havfsizligi tizimlari bo’yicha xulosalar berish;

                    – joriy etilayotgan innovatsion loyihalar natijasida o’quv-tadqiqot, ilmiy, eksperimental ishlab chiqarish korxonalari va ihtisoslashtirilgan zamonaviy ilmiy-tadqiqot laboratoriyalarini tashkil qilish;

                    – ilmiy-tadqiqot va tajriba-konstruktorlik ishlarini amalga oshirish va bu ishlarga talabalarni jalb etish;

                    – tegishli ta’lim  yo’nalishlari bo’yicha o’quv qo’llanmalari va darsliklarni yaratish, ularni o’quv jarayonlariga tatbiq etish;

                    – milliy iqtisodiyotning tegishli tarmoqlari bo’yicha ustuvorlikka ega bo’lgan va ishlab chiqarish ehtiyojlaridan kelib chiqqan holda ilmiy-tadqiqot ishlarini olib borish va natijalarini amaliyotga tatbiq qilish;

                    – fundamental va global ahamiyatga ega bo’lgan, xorijiy davlatlarda e’tirof etiluvchi ilmiy maktablarni yaratish va bunday maktablarda erishilgan ilmiy yutuqlarni TDTUda ta’lim olayotgan talabalar orasida keng tarq’ib etish;

                    – talabalar bandligini ta’minlash va moddiy ta’minotini yaxshilash maqsadida kichik ishlab chiqarish korxonalarini tashkil etish uchun talabalar shaharchasi hududida texnopark tashkil etish;

                    – milliy iqtisodiyot tarmoqlari korxonalarida xizmat qilayotgan yuqori va o’rta hamda quyi poq’ona xodimlari hamda O’zbekiston Respublikasining boshqa viloyatlaridagi oliy ta’lim muassasalarining turdosh yo’nalishlarida faoliyat yuritayotgan professor-o’qituvchilarining malakasini oshirish kurslarini tegishli shartnomalar asosida tashkil etish;

                    – MDH va xorijiy davlatlardagi oliy o’quv muassasalaridan, ishlab chiqarish bilan boq’liq kompaniyalardan yetakchi mutaxassislarni taklif etgan holda talabalar uchun ma’ruza kurslarini tashkil etish;

                    OLIY TA’LIM MUASSASASINING TARKIBI

                    TDTUning tarkibiga quyidagilar kiradi:
                    a) 7 ta fakultet va 60 ta kafedralar:
                    MUHANDISLIK TЕXNOLOGIYALARI FAKULTЕTI

                    1          Aeronavigaciya tizimlari

                    2          Havo kemalari va jiqozlarini texnik ekspluatatsiyasi

                    3          Radiotexnik qurilmalar va tizimlar

                    4          Sanoat dizayni

                    5          Biotexnologiya

                    6          Biotibbiyot muxandisligi

                    7          Ekologiya va atrof-muhit muhofazasi

                    8          Korporativ boshqaruv

                    9          Umumiy kimyo

                    ELЕKTRONIKA VA AVTOMATIKA FAKULTЕTI

                    1          Ahborotlarga ishlov berish va boshqarish tizimlari

                    2          Metrologiya, standartlashtirish va sertifikatlashtirish

                    3          Ishlab chiqarish jarayonlarini avtomatlashtirish

                    4          Mexatronika va robototexnika

                    5          Raqamli elektronika va mikroelektronika

                    6          Elektron apparatlarni ishlab chiqarish texnologiyasi

                    7          Lazer texnologiyasi va optoelektronika

                    8          Axborot tehnologiyalari

                    ENЕRGЕTIKA FAKULTЕTI

                    1          Elektr stantsiyalari, tarmoqlari va tizimlari

                    2          Elektr ta’minoti

                    3          Gidravlika va gidroenergetika

                    4          Issiqlik energetikasi  va atom elektr stantsiyalari

                    5          Termodinamika va issiqlik texnikasi

                    6          Elektr mexanikasi va elektr  texnologiyalari

                    7          Elektr mashinalari

                    8          Alternativ energiya manbalari

                    9          Energetikada tizimlarni boshqarish va nazorat qilish

                    10        Elektr texnikasi

                    KONCHILIK ISHI VA MЕTALLURGIYA FAKULTЕTI

                    1          Marksheyderlik ishi va geodeziya

                    2          Konchilik ishi

                    3          Metallurgiya

                    4          Konchilik elektromexanikasi

                    5          Ko’mir va qatlamli konlar geotexnologiyasi

                    6          Hayot faoliyati havfsizligi

                    GЕOLOGIYA -QIDIRUV FAKULTЕTI

                    1          Foydali qazilma konlari geologiyasi, qidiruv va razvedkasi

                    2          Gidrogeologiya va muxandislik geologiyasi

                    3          Geologiya, mineralogiya va petrografiya

                    4          Geologiya-qidiruv ishlari texnikasi va texnologiyasi

                    5          Foydali qazilma konlarini qidirish va razvedka qilishning geofizik usullari

                    6          Neft va gaz konlari geologiyasi

                    MASHINASOZLIK FAKULTЕTI

                    1          Mashinasozlik texnologiyasi

                    2          Yer usti transport tizimlari

                    3          Xizmat ko’rsatish texnikasi

                    4          Energiya mashinasozligi va kasb ta’limi

                    5          Chizma geometriya va kompyuter grafikasi

                    6          Oliy matematika

                    MЕXANIKA FAKULTЕTI

                    1          Materialshunoslik

                    2          Metallarga bosim bilan ishlov berish

                    3          Quymakorlik texnologiyalari

                    4          Sovutish va kriogen texnika

                    5          Texnologik mashinalar va jihozlar

                    6          Nazariy mexanika va mashina va mexanizmlar nazariyasi

                    7          Materiallar qarshiligi va mashina detallari

                    8          Umumiy fizika

                    IJTIMOIY-GUMANITAR FANLAR MARKAZI

                    1          O’zbekiston tarixi

                    2          Falsafa va milliy q’oya

                    3          Pedagogika va psixologiya

                    4          Sanoat iqtisodiyoti

                    5          Jismoniy tarbiya

                    6          Tillar kafedrasi (o’zbek va rus)

                    7          Chet tillari

                    FAKULTЕTLARARO KAFЕDRA

                    1          Harbiy kafedra

                    b) TDTUda faoliyat ko’rsatayotgan o’quv-ilmiy amaliy majmualar:
                    1          Islom Karimov nomidagi Toshkent davlat texnika universiteti  Termiz filiali

                    2          Islom Karimov nomidagi Toshkent davlat texnika universiteti  Olmaliq filiali

                    3          Islom Karimov nomidagi Toshkent davlat texnika universiteti  Qo’qon filiali

                    4          «Brichmulla» o’quv- geologik poligoni

                    v) TDTU qoshidagi ilmiy Markazlar:
                    1          “Fan va taraqqiyot” Davlat unitar korxonasi

                    2          O’zbekiston-Yaponiya yoshlar innovatsion markazi

                    3          Pedagog kadrlarni qayta tayyorlash va ularni malakasini oshirish    tarmoq markazi

                    4          Tarmoqlararo Strategik Innovatsiya va Informatizatsiya markazi

                    5          “Energiya va resurslarni tejash” ilmiy-amaliy va o’quv markazi

                    g) TDTUda faoliyat ko’rsatayotgan ilmiy laboratoriyalar:
                    1          Energiyatejamkor texnologiyalar, nazorat o’lchov va avtomatlashtirilgan tizimlar

                    2          Foydali  qazilma konlarini ochiq usulda qazib olish

                    3          Foydali qazilmalar konlari geologiyasi, izlash va qidirish

                    4          Konchilik  elektr mexanikasi muammolari

                    5          Geomexanika va gedeziya

                    6          Ekologiya va atrof-muhit muhofazasi, hayot faoliyati havfsizligi

                    7          Termodinamik jarayonlar

                    8          Sanoat korxonalarining elektr ta’minoti tizimlarini energiya samaradorligi

                    9          Elektruzatma

                    10        Energiya samarador qurilmalar va tizimlar

                    11        Energiya tejamkorlik  va qayta tiklanuvchan energiya manbalari

                    12        Metallarga mexanik ishlov berish

                    13        Materialshunoslik va yangi materiallar texnologiyasi

                    14        Materialshunoslik va kompozitsion materiallar texnologiyasi

                    15        Mexanika

                    16        Qishloq xo’jalik mahsulotlarini qayta ishlash texnologiyasi

                    17        Sovutish mashinalari va issiqlik nasoslari

                    18        Metrologiya va sifatni boshqarish

                    19        Texnologik ishlab chiqarish va jarayonlarni modellashtirish

                    20        Elektronika va noan’anaviy energiya manbalari

                    21        Lazer, Ion va plazma texnologiyasi

                    22        Ko’p fazali tizimlar issiqlik fizikasi, elektron va ion jarayonlari texnologiyasi

                    23        Tibbiy biologik tizimlar va jihozlar

                    24        Amaliy elektronika va istiqbolli qurilmalar

                    25        Optika. Spektroskopiya va lazer texnologiyalari

                    26        Loyiha konstruktorlik-texnologik ishlanmalar va tajriba ishlab chiqarish

                    TDTU ta’sischiligida tashkil etilgan ilmiy markaz hamda kichik korxonalar:

                    1          “Fan va taraqqiyot” Davlat unitar korxonasi

                    2          “O’zbekiston -Yaponiya Yoshlarning innovatsiya Markazi

                    3          Strategik innovatsiyalar va informatsiyalar Markazi

                    4          “Quduqlarni burq’ilash jarayonidagi asoratlarga qarshi kurash” ilmiy markazi

                    5          “BURGUCHI BIZNES” o’quv-ilmiy ishlab chiqarish korxonasi
                </p>
            </div>
            <UsifulLinks/>
        </div>
    )
}

export default UniversityRegulations