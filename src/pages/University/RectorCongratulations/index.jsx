import React from 'react'
import PageHeader from "../../../components/PageHeader"
import UsifulLinks from "../../../components/UsifulLinksSwiper"

const RectorCongratulations = () => {
    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title='rector_congratulations' paths={[
                {
                    title: 'rector_congratulations'
                }
            ]} />
            <div className='responsive'>
                <img
                    className={"w-full object-cover object-center h-96"}
                    src="https://images.unsplash.com/photo-1655858064793-a4113dd00eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""/>

                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    Har bir inson uchun o’zınıng bo’lajak kasbi va unga tayyorlaydigan oliy o’quv yurtini tanlashi hayotida muhim davr hisoblanadi. Mutahassisning kasbiy rivojlanishi, lavozimi bo’yicha ko’tarilishi va o’z-o’zini namoyon qilishi oliy ta’lim muassasasida olgan bilim sifatiga bog’liq.     Islom Karimov nomidagi Toshkent davlat texnika universiteti (TDTU) O’zbekistonning mashhur va nufuzli oliy o’quv yurtlaridan biri hisoblanadi. TDTU O’zbekiston texnika oliy o’quv yurtlari orasida yetakchi o’rinni egallaydi. Bizning universitetimiz tashkil etilganidan buyon deyarli 100 yil o’tdı. Ammo oliy o’quv yurtimiz tiklanish va ilg’or innovatsion rivojlanishning shiddatli davrini bosib o’tdi. Universitetda yuqori darajali ta’lim sifati ta’minlanib, zamonaviy ta’lim texnologiyalari muvaffaqiyatli shakllantirılib, o’quv jarayoniga tatbiq etilmoqda. TDTU tuzilmasida 3 ta filial, 8 ta fakultet, 60 ta kafedra, O’zbek-Yapon yoshlar innovatsiya markazi, “Fan va taraqqiyot” davlat unitar korxonasi mavjud.

                    TDTU talabasi bo’lish  fahrli va mas’uliyatlidır. Bizning oliy o’quv yurtımizda har bir talaba uchun katta imkoniyatlar yaratilgan. Ularga  universitetda  ishlab chiqilgan o‘quv dasturlari asosida bilim beriladi, tajribali olimlar va professor-o’qituvchilar ilmiy tadqiqotlarni olib borishlarida ilmiy rahbarlik qiladilar, iqtidorli talabalar ilmiy loyihalarda ishtirok etadilar va yaratgan ixtirolarini amaliyotga tatbiq etadilar.
                    Innovatsiya va axborot texnologiyalari davrida universitetda mutaxassislarning yangi avlodini tayyorlash yo’lga qo’yildı. Bitiruvchilar O’zbekiston  Respublikasi, Markaziy Osiyo mintaqasi  va dunyo hamjamiyati mamlakatlarining ijtimoiy-madaniy hayotiga moslashishga imkon beradigan umuminsoniy hamda kasbiy mahorat va ilg’or dunyoqarashni shakllantirmoqda.

                    TDTU bitıruvchilari o’zining yuqori kasbiy tayyorgarligi, mehnat bozorida raqobatbardoshligida, reytingıni oshiradigan ishlab chiqarish masalalariga nostandart  yondashish qobiliyati bilan ajralib turadi. Bizning bitiruvchilarimız yirık ishlab chiqarish korxonalarida, davlat va tijorat tuzilmalarida, xalqaro kompaniyalar, ta’lim muassasalari va ilmiy-tadqiqot institutlarida faoliyat ko’rsatmoqdalar.

                    TDTUda talabalarning nafaqat kasbiy tayyorgarligi, balki shaxsning barkamol rivojlanishi uchun barcha sharoitlar yaratilgan, ularning huquqiy ong va jamiyatda huquqiy madaniyatini oshirish hamda madaniyat, sport va jamiyat hayotida o’zlarining iqtidorlari, shuningdek qobiliyatlarini namoyon qilishga yo’naltirilgan ma’naviy-ma’rifiy faoliyatga katta e’tıbor qaratilmoqda. Yorqin voqealar, ilmiy ixtirolar va yangi qiziqarli tanishuvlar – bularning barchasi bizning universitetimizda mavjud.
                </p>
            </div>
            <UsifulLinks/>
        </div>
    )
}

export default RectorCongratulations