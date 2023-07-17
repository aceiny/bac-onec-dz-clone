import Header from "../comps/header";
import Form from "../comps/form";
import React, { useEffect, useRef } from "react";
import Footer from "../comps/footer";
import ResultWindow from "../comps/result";
const Main = () => { 
    let email = useRef()
    useEffect(
        ()=>{
            function random(min,max) {
                return (Math.random() * (max - min) + min).toFixed(2)
            }
            function randomint(min,max) {
                return Math.floor(Math.random() * (max - min) + min)
            }
            let showrslt_btn = document.getElementById('showurrslt')
            let rsltwindow = document.querySelector('.resultwindow')
            let regnmb = document.getElementById('result-reg-nmb')
            let fillier = document.getElementById('result-fillier')
            let surname = document.getElementById('result-surname')
            let name = document.getElementById('result-name')
            let ddn = document.getElementById('result-ddn')
            let pdn = document.getElementById('result-pdn')
            let grade = document.getElementById('result-grade')
            let note = document.getElementById('result-note')
            let errinfo = document.querySelectorAll('.info-save')
            let checkbox = document.getElementById('formcheckbox')
            let checkboxerr = document.querySelector('.chorot-err')
            let vrfqst = document.querySelector('.vrfqst')
            let qstanwrerr = document.querySelector('.qstanswrerr')
            const vrfqstnmbr1 = randomint(0,20)
            const vrfqstnmbr2 = randomint(0,20)
            const vrfrslt = vrfqstnmbr1 + vrfqstnmbr2
            vrfqst.textContent = `كم يساوي ${vrfqstnmbr1} + ${vrfqstnmbr2}`

            showrslt_btn.addEventListener('click',()=>{
                if(checkbox.checked){
                    checkboxerr.style.display = "none"
                    let formdata = document.querySelectorAll('.form-input-data')
                    if (formdata[0].value == "" || formdata[1].value == "" || formdata[2].value == "" || formdata[3].value == "" ){
                        for(let i = 0 ; i < formdata.length ; i++) {
                            errinfo[i].style.display = "block"
                        }
                        console.log("rrr")
                    }
                    else {
                        for(let i = 0 ; i < formdata.length ; i++) {
                            errinfo[i].style.display = "none"
                        }
                        if (document.getElementById('vrfqstansewr').value == vrfrslt){
                            qstanwrerr.style.display = "none"
                            const grd = random(0,20)
                            let nt = ""
                            if(grd<9.5) {
                                nt = "عام جاي نشالله حبب"
                            }
                            else if (grd>=9.5 && grd < 10 ) {
                                nt = "ناجح بالنسبة للعام ليفات"
                            }
                            else if (grd>=10 && grd < 14 ) {
                                nt = "وحش حبب"
                            }
                            else if (grd>=14 && grd < 16 ) {
                                nt = "اسطورة"
                            }
                            else if (grd>=16 && grd < 18 ) {
                                nt = "هاكير"
                            }
                            else if (grd>=18 && grd < 19) {
                                nt = "كيقه قدرت"
                            }
                            else if (grd>=19) {
                                nt = "ختمها"
                            }
                            surname.textContent = formdata[0].value
                            fillier.textContent = 'علوم تجريبية'
                            ddn.textContent = "22-06-1981"
                            pdn.textContent = 'داركم'
                            name.textContent = formdata[1].value
                            regnmb.textContent = formdata[2].value
                            grade.textContent = grd
                            note.textContent = nt
                            rsltwindow.style.display = "block" }
                            else{qstanwrerr.style.display = "block"}
                        }}
                    else {
                        checkboxerr.style.display = "block"
                    }
            })
        }
        ,[])
    return(
        <>
        <Header/>
        <Form/>
        <ResultWindow/>
        <Footer/>
        </>
    )
}
export default Main