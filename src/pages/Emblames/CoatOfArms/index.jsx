import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import {useTranslation} from "react-i18next"

export default function CoatOfArms() {

    const {t} = useTranslation()

    return (
        <div>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('coast_of_arms')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5 items-center'>
                <img width={450} src="http://tfi.uz/photos/1/photos/200px-Emblem_of_Uzbekistan.svg.png" alt=""/>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6 mt-5"}>
                    Bayroqdagi oq rang – muqaddas tinchlik ramzi bo'lib, u kun charog'onligi va koinot yoritkichlari bilan uyg'unlashib ketadi. Oq rang – poklik, beg'uborlik, soflikni, orzu va hayollar tozaligi, ichki go'zallikka intilishning timsoli.

                    Yashil rang – tabiatning yangilanish ramzi. U ko'pgina xalqlarda navqironlik, umid va shodumonlik timsoli.

                    Qizil chiziqlar – vujudimizda jo'shib oqayotgan hayotiy qudrat irmoqlarini anglatadi.

                    Navqiron yarim oy tasviri bizning tarixiy an'analarimiz bilan bog'liq. Ayni paytda u qo'lga mustaqilligimiz ramzi ham.

                    Yulduzlar barcha uchun ruhoniy, ilohiy timsol sanalgan. O'zbekiston Respublikasi Davlat bayrog'idagi 12 yulduz tasviri ham tarixiy an'analarimiz, yangi yilnomamizga bevosita aloqador. Bizning o'n ikki yulduzga bo'lgan e'tiborimiz O'zbekiston sarhadidagi olimlar ilmiy tafakkurida nujum ilmi taraqqiy etganligi bilan ham izohlanadi.

                    Davlat bayrog'imizdagi 12 yulduz tasvirini o'zbek xalq madaniyatining qadimiyligi, uning komillikka, o'z tuprog'ida saodatga intilishi ramzi sifatida belgilangan lozim.
                    {t("gerb_text")}
                </p>
            </div>
            <UsifulLinks />
        </div>
    )
}