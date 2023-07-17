import React from "react";
import "./result.css"
const ResultWindow = () => {
    return (
        <div className="resultwindow">
            <div className="result-head">
                <p>النتيجة</p>
            </div>

            <div>
                <p id="result-status"></p>
                </div>
            <div className="result-all-infos">
                <div className="result-right-corner">
                    <div className="result-one-info">
                        <p>رقم التسجيل : </p>
                    </div>
                    <div className="result-one-info">
                        <p>الشعبة : </p>
                    </div>
                    <div className="result-one-info">
                        <p>اللقب : </p>
                    </div>
                    <div className="result-one-info">
                        <p>الاسم : </p>
                    </div>
                    <div className="result-one-info">
                        <p>تاريخ الميلاد :</p>
                    </div>
                    <div className="result-one-info">
                        <p>مكان الميلاد :</p>
                    </div>
                    <div className="result-one-info">
                        <p>المعدل :</p>
                    </div>
                    <div className="result-one-info">
                        <p>الملاحضة :</p>
                    </div>
                </div>
                <div className="result-left-corner">
                    <div className="result-one-info">
                        <p id="result-reg-nmb" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-fillier" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-surname" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-name" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-ddn" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-pdn" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-grade" className="result-info-detail"></p>
                    </div>
                    <div className="result-one-info">
                        <p id="result-note" className="result-info-detail"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultWindow
