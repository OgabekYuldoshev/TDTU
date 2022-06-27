import { useEffect, useRef } from 'react'
import PageHeader from '../../../components/PageHeader'
import VirtualReceptionSvg from "../../../assets/svg/virtual_reception.svg"
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import InputMask from '../../../components/InputMask'
import { useTranslation } from 'react-i18next'
import Uploader from '../../../components/Uploader'
import {
    loadCaptchaEnginge,
    LoadCanvasTemplateNoReload,
    validateCaptcha
} from "react-simple-captcha"
import { useFormik } from 'formik'
import { toast } from "react-toastify"
import * as Yup from "yup"

const VirtualReception = () => {
    const { t } = useTranslation()
    const captchaRef = useRef(null)

    const validationSchema = Yup.object({
        fullname: Yup.string().required(),
        phone: Yup.string().required(),
        title: Yup.string().required(),
        theme: Yup.string().required(),
        file: Yup.mixed().required()
    }).shape()

    const formik = useFormik({
        initialValues: {
            fullname: '',
            phone: '',
            title: '',
            theme: '',
            file: ""
        },
        validationSchema,
        onSubmit: values => {
            const captcha = captchaRef?.current?.value
            if (validateCaptcha(captcha)) {
                console.log(values)
            } else {
                toast.error(t('invalid_captcha_try_again'))
            }
        }
    })


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title="virtual_reception" paths={[{ title: "virtual_reception" }]} />
            <div className='responsive grid md:grid-cols-3 grid-cols-1 py-10 gap-10'>
                <div className='md:col-span-2 col-span-1'>
                    <form onSubmit={formik.handleSubmit} className='grid md:grid-cols-1 grid-cols-1 gap-5'>
                        <div>
                            <Input invalid={formik.errors.fullname} name="fullname" onChange={formik.handleChange} label={t('field_full_name')} placeholder={t('field_full_name')} />
                        </div>
                        <div>
                            <InputMask invalid={formik.errors.phone} name="phone" onChange={formik.handleChange} label={t('field_phone_number')} mask="+\9\98 (99) 999 99 99" placeholder="+998 (XX) XXX XX XX" />
                        </div>
                        <div className='md:col-span-2 col-span-1'>
                            <Input invalid={formik.errors.title} name="title" onChange={formik.handleChange} label={t('field_title')} placeholder={t('field_title')} />
                        </div>
                        <div className='md:col-span-2 col-span-1'>
                            <TextArea invalid={formik.errors.theme} name="theme" onChange={formik.handleChange} label={t('field_theme')} placeholder={t('field_theme')} />
                        </div>
                        <div className='md:col-span-2 col-span-1'>
                            <Uploader invalid={formik.errors.file} name="file" onChange={(e) => formik.setFieldValue('file', e?.target?.files[0])} label={t('field_select_file')} placeholder={t('field_select_file')} />
                        </div>
                        <div className='grid gap-5 md:grid-cols-2 grid-cols-1 md:col-span-2 col-span-1 justify-self-between'>
                            <div>
                                <label className='font-medium'>{t('verification_code')}</label>
                                <div className='border border-primary_green rounded overflow-hidden w-fit'>
                                    <LoadCanvasTemplateNoReload />
                                </div>
                            </div>
                            <div className='flex items-end'>
                                <div className='border border-primary_green rounded flex items-center justify-between w-full gap-2'>
                                    <input placeholder={t('enter_verification_code')} className='w-full px-2 bg-transparent focus:outline-none' type="text" ref={captchaRef} />
                                    <button type="submit" className='py-1 px-2 bg-primary_green rounded text-white'>
                                        {t('confirmation_button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='md:block hidden'>
                    <img src={VirtualReceptionSvg} alt="VirtualReceptionSvg" />
                </div>
            </div>
        </div>
    )
}

export default VirtualReception