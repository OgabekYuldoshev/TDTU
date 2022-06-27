import React from 'react'
import HeaderImg from "../../../../components/HeaderImg"
import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../../components/UsifulLinksSwiper"

export default function InformationCenter() {

    const {t} = useTranslation()

    return (
        <>
            <HeaderImg text={"information_center"} paths={[
                {
                    title: 'information_center'
                }
            ]}/>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('information_center')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
               {/*<RectorCard/>*/}
                RectorCard
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    TDTU Bosh kutubxonasi (BK) 1929-yilda tashkil topgan. Bugungi kunda kutubxona O’zbekiston
                    Respublikasidagi yirik kutubxonalardan biri hisoblanadi. Kutubxona 2007-yildan boshlab, yangi maqom
                    – ARM nomi bilan atalmoqda. ARM kitobxonlarda an’anaviy usulda xizmat ko’rsatish barobarida, yangi
                    usuldagi axborot texnologiyalaridan ham samarali foydalanishni yo’lga qo’yib kelmoqda. Universitetda
                    Axborot-kutubxona xizmati, Bosh ARM va fakultetlardagi tarmoq ARM vositasida amalga oshirib
                    kelinmoqda. ARM asosiy nashr zahirasi million nusxadan ko’p birlikni tashkil qiladi. ARM o’z ichida
                    davlat tilidagi, rus tilidagi va jahon tillaridagi darslik, ilmiy va badiiy adabiyotlarning
                    turlarini qamrab olgan. Ayniqsa, MDH davlatlari va Respublika davriy matbuoti nashrlarining
                    nusxalariga talab kata. Shuningdek, ARM zahirasining kattagina qismini ToshPI va TDTU himoya
                    qilingan avtoreferatlar va dissertatsiyalar hamda universitet olimlarining ilmiy ishlari
                    qo’lyozmalari va to’plamlari tashkil etadi. ARM zahirasidan bibligrafiyaga oid ma’lumotlarning noyob
                    nusxalari ham o’rin olgan. ARM zahirasining kattagina qismini egallagan elektron kitoblar, elektron
                    qiroatxona serveridagi ma’ruzalar matnlari elektron tashuvchilar guruhini tashkil qiladi. ARM barcha
                    xizmat ko’rsatish shahobchalaridan TDTU bakalavrlari, magistrlari, professor-o’qituvchilari,
                    shuningdek, turdosh oliy o’quv yurtlarning mutaxassislari hamda ilmiy tashkilotlarning vakillari
                    samarali foydalanadilar. Bugungi kunda ARM o’zining keng qamrovli, boy resursi hisobiga nafaqat
                    Toshkent shahri hududidagi, balki barcha Respublikadagi turli toifa foydalanuvchilariga ham namunali
                    xizmat ko’rsatib kelmoqda. ARM faoliyatida yangi axborot texnologiyalaridan foydalanishga alohida
                    e’tibor berilmoqda. ARM mahalliy tarmog’i orqali INTERNETga chiqish yo’lga qo’yilgan. Universitet
                    hududida KORPORATIV tarmoqqa kiruvchi tizimlarda istemolchilarni o’z ish o’rinlariga qolib, bevosita
                    Elektron katalog xizmatlaridan foydalanishlari yo’lga qo’yilgan. Bu tizim ARM “IRBIS” dasturi va
                    “ARMAT – U” milliy dasturi bilan ARM – KATOLOGIZATOR, JAMLASH, KITOBXON va tarmoq ADMINISTRATORI
                    ko’rinishga ega. Barcha tarmoq ARM markazlashgan yagona EK orqali INTERNETga ulangan bo’lib u tezkor
                    usulda adabiyotlarni qidirishga imkon yaratuvchi Kompyuter bilan jihozlangan. Hozirgi kunda axborot
                    resurslari orasida EK xizmatiga talab ortib bormoqda. Demak, ARM xodimlari zimmasida EK
                    o’zlashtirish bilan birga, Ma’lumotlar Bazasini – MB yaratish ham kiradi. Jumladan, ular quyidagi
                    vazifalarni bajarishda mas’uldirlar:

                    O’zbekiston Respublikasi Hukumatining QARORLARI va FARMONLARI
                    Dissertasiyalar va avtoreferatlarning – MB
                    O’zbekiston va chet el oliy ta’limining – MB
                    Magistrlik dissertasiyalarining – MB
                    O’zbekiston iqtisodining – MB
                    TDTU o’qituvchilari bajargan ilmiy ishlarining –MB
                    TDTU mavjud davriy nashrlarning –MB
                    Shuningdek, INTERNET yordamida mavzuli faktografik ma’lumotnomalar ham tayyorlanadi. ARM o’z
                    faoliyatida axborot yetkazishni turli shakllaridan foydalanadi. Jumladan, har oyda muntazam ravishda
                    tashkil qilinadigan “Yangi adabiyotlarning ochiq ko’rigi kunlari hamda mavzuli ko’rgazmalarga
                    qo’yilgan ekspozitsiyalar yordamida adabiyotlarni targ’ib qilishni yangicha tavsiya usullari v. b.

                    Oliy ta’lim muassasasi Bosh ARM tuzilishi

                    Zahirani jamlash va hisobga olish bo’limi
                    Bo’lim ARM zahirasini shakllantirish, foydalanuvchilarning axborotlar yuzasidan talablarini
                    o’rganish bilan shug’ullanadi. Keng qamrovli kitoblar dunyosidan eng zarurlarini ajratib, ularni
                    muomalaga kiritish uchun harakat qiladi. ARM umumiy zahirasi bosma nashrlar, noan’anaviy axborot
                    resursini tashuvchilari hisobiga muntazam ravishda to’ldirib boriladi. Bo’limning ishi “IRBIS”
                    dasturiga asosan, ARM-KOMPLEKTATOR xizmatiga ko’ra olib boriladi. ARM davriy nashrlarni o’rni
                    alohida ahamiyat kasb etadi. Bunda Ma’lumotlar Bazasi ARM kelayotgan gazeta va jurnallarning
                    manbalari bilan yaratiladi.

                    Axborot Resurslariga ilmiy ishlov berish bo’limi
                    Mazkur bo’limni ish faoliyati asosan, markazlashtirilgan usulda yuritiladi. U ARMga kelayotgan
                    axborot resurslariga ilmiy va texnikaviy ishlov berish, ularni yagona kataloglar tizimiga kiritish
                    bilan shug’ullanadi.

                    Ilmiy adabiyotlar abonementi bo’limi
                    Bu ilmiy abonement bo’limida darsliklar, o’quv-uslubiy qo’llanmalar, lug’atlar, ma’lumotnomalar,
                    ilmiy adabiyotlardan iborat ko’p tarmoqli zahira jamlangan. Badiiy adabiyotlar zahirasi vatan va
                    chet el badiiy nashrlari, madaniyat va san’atga oid kitoblarni salmoqli nusxalarini o’z ichiga
                    olgan.

                    O’quv adabiyotlari bo’limi
                    Bo’limda, asosan, o’quv jarayonlarida tavsiya etilayotgan darsliklar, o’quv-uslubiy qo’llanmalar,
                    amaliyot ishlari va ma’ruzalar matnlari jamlangan.

                    Axborot-bibliografiya bo’limi
                    Bo’limni asosiy vazifalariga:
                    -Universitet bakalavrlari, magistrlari, professor-o’qituvchilarni axborotlarga bo’lgan talablarni
                    o’rganish kiradi. Foydalanuvchilarni talablarini qondirish maqsadida, zahira imkoniyatlari hisobga
                    olinadi. Shuningdek, axborot-qidiruv tizimida qayd etilgan ma’lumotlarga ko’ra yechim beriladi.
                    -Eng asosiysi, bakalavrlar, magistrlar va kafedralarning axborot-bibliografiya bo’yicha
                    ko’nikmalarini to’g’ri shakllantirish talab qilinadi.
                    -Bo’limni xizmat doirasiga quyidagi vazifalarni bajarib borish kiradi:

                    Internet xizmatidan foydalanib, ma’lumotlarni (faktografik, mavzuli, manzilli) majmuini yaratish;
                    mavzuli axborotlarni tayyorlash;
                    referat, kurs ishi, diplom ishi, magistrlik dissertasiyalari bo’yicha yordam ko’rsatish;
                    EK axborot qidirishda, elektron ma’lumotlar bazasini yaratishda va Internetga kirishda
                    foydalanuvchilarni maqsad sari to’g’ri yo’naltirish;
                    ARM foydalanuvchilari e’tiboriga dunyo kutubxonachilik server manzillarining ro’yxatini taqdim
                    etish.
                    Biblografiyaga oid ma’lumotlarni turlari xilma-xildir. U o’z ichiga o’quv jarayonida kerakli
                    hisoblangan axborotlarning tavsiya ro’yxatlarini, bibliografik ko’rsatkichlarni, yozma ma’lumotlarni
                    va sharhlar turkumini oladi. Bo’lim faoliyatida an’anaviy va zamonaviy axborot texnologiyalari
                    asosida sifatli axborot xizmatini ko’rsatib, xizmat ko’rsatkichlarini ko’tarish muhim ish
                    hisoblanadi. Shu asosda, bo’lim axborot xizmati turlarini ko’payishiga erishmoqda.

                    ARM qiroatxonalari
                    ARM iste’molchilarni o’quv va ilmiy faoliyatlarini to’laqonli yuritib, imkoniyatlarini samarali
                    foydalanishlari uchun barcha sharoitlar yaratilgan. Hozirda talabalar uchun maxsus qiroatxonalar
                    tashkil etilgan. ARM tarkibida ixtisoslashtirilgan qiroatxonalar tashkil qilingan.

                    Davriy nashrlar qiroatxonasi
                    Qiroatxona zahirasining asosini Respublika va MDH davlatlarining gazeta va jurnallari tashkil
                    qiladi. Bu davriy nashrlarning nusxalari asosida, eng dolzarb mavzular bo’yicha maxsus jildlar
                    yaratiladi.

                    EK qiroatxonasi
                    Bo’limda barcha foydalanuvchilarga turli axborot tashuvchilar vositasida Internat xizmatidan ochiq,
                    bepul foydalanish yo’lga qo’yilgan.
                    Qiroatxona serverida TDTU o’qituvchilari tomonidan yaratilgan darslik, uslubiy qo’llanmalar to’liq
                    matnlari jamlangan.

                    Ma’naviyat- ma’rifat bo’limi
                    Bo’lim faoliyatining asosini Vatanimizga sodiq yosh, barkamol avlodni tarbiyasi tashkil qiladi. Bu
                    o’rinda mas’uliyat dolzarb mavzularda ko’rgazmalarni ommaviy qilib tayyorlash va o’tkazishga
                    qaratiladi.

                    Fakultetlardagi tarmoq ARM
                    Bu yo’nalishda ARM asosiy maqsadi- sohaviy axborotlar tizimini iste’molchilarning talablari
                    darajasida amalga oshirishdan iborat.
                </p>
            </div>
            <UsifulLinks />
        </>
    )
}