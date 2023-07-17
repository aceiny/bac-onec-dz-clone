import React, { useRef } from "react";
import './form.css'
const Form = () => {
    return(
        <div className="result-form">
            <div className="form-cnt">
                <div className="header-top flex">
                    <p>قبل ملئ الإستمارة يجب الإطلاع على الشروط التالية : </p>
                    <button>الشروط</button>
                </div>
                <div className="try20-notif"><p>لظروف أمنية لديك فقط 20 محاولة بعدها لا يمكنك المتابعة إلا بعد مضي 10ثوان</p></div>
                <div className="form-content">
                    <div className="chorot flex">
                        <p className="chorot-err">الرجاء الموافقة على الشروط</p>
                        <p>أنقر على الزر للمصادقة على الشروط</p>
                        <label class="switch">
                        <input type="checkbox" id="formcheckbox"/>
                        <span class="slider"></span>
                        </label>
                    </div>
                    <div className="form-input">
                        <div className="form-label flex">
                            <p className="info-save">الرجاء حجز المعلوات الخاصة بـ:</p><p className="label-title">اللقب بالعربية*</p><p className="label-extra">(حسب الاستدعاء) (انتبه للهمزة والفراغات)</p>
                        </div>
                        <div>
                            <input type="text" className="form-input-data"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="form-label flex">
                            <p className="info-save">الرجاء حجز المعلوات الخاصة بـ:</p><p className="label-title">الاسم بالعربية*</p><p className="label-extra">(حسب الاستدعاء) (انتبه للهمزة والفراغات)</p>
                        </div>
                        <div>
                            <input type="text" className="form-input-data"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="form-label flex">
                            <p className="info-save">الرجاء حجز المعلوات الخاصة بـ:</p><p className="label-title">رقم التسجيل *</p><p className="label-extra">(حسب الاستدعاء) (انتبه للهمزة والفراغات)</p>
                        </div>
                        <div className="fi">
                            <input type="text" className="form-input-data"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="form-label flex">
                            <p className="info-save">الرجاء حجز المعلوات الخاصة بـ:</p><p className="label-title">الرقم السري*</p><p className="label-extra">(حسب الاستدعاء) (انتبه للهمزة والفراغات)</p>
                        </div>
                        <div>
                            <input type="text" className="form-input-data"/>
                        </div>
                    </div>
                </div>
                <div className="scrtquestion flex">
                    <div className="rightsqrtquest">
                        <p className="qstanswrerr">الرجاء ادخال اجابة صحيحة</p>
                        <p>سؤال :</p>
                        <p className="makebold vrfqst">كم يساوي 10+3؟	</p>
                    </div>
                    <div className="sqrt-qst-input">
                        <p className="makebold">الجواب :</p>
                        <input type="text" id="vrfqstansewr" />
                    </div>
                </div>
                <div className="showrslt" id="showurrslt">
                    <p>استضهار النتيجة</p>
                    <p>سحب الكشوف ابتداء من يوم</p>
                    <p>18-07-2023</p>

                </div>
            </div>
        </div>
    )
}
export default Form