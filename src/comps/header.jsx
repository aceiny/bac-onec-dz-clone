import React from "react";
import './header.css'
import alam from '../assets/alam.gif'
const Header = () => { 
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-image"><img src={alam} alt="alam dz" /></div>
                <div className="logo-text">
                    <p className="logo-text-1">الجمهورية الجزائرية الديمقراطية الشعبية</p>
                    <p className="logo-text-2">وزارة التربية الوطنية</p>
                    <p className="logo-text-3">الديوان الوطني للامتحانات والمسابقات</p>
                </div>
            </div>
            <div className="header-infos">
                <p className="header-infos-1">نتائج امتحان شهادة التعليم الثانوي دورة 2023</p>
                <p className="header-infos-2">في اليوم الأول من إعلان النتائج بإمكانك الاطلاع على نتائج مختصرة وابتداء من يوم<span className="header-info-span"> 26-06-2023 </span>بإمكانك سحب كشف النقاط ، الموقع سيغلق في حدود<span className="header-info-span"> 27-07-2023 </span>.</p>
                <p className="header-infos-3">يتمنى السيد وزير التربية الوطنية النجاح لكل المترشحين في امتحان شهادة التعليم المتوسط</p>
            </div>
        </div>
    )
}
export default Header