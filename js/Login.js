var prodata = document.getElementById("proData");
var standarddata = document.getElementById('standarddata')
if (localStorage.getItem("Pack1"  ) || localStorage.getItem("Pack2"  ) ) {
  if (localStorage.getItem("Pack1"  )) {
    let booked = `<h1 class='booked'>${localStorage.getItem("Pack1")}</h1>`;
  document.getElementById("ProfessionalBTN").style.display='none'  // add all btns for remove this btn 
  let tamplait = `<div>${booked}</div> `
  prodata.innerHTML = tamplait ;
  }
  if (localStorage.getItem("Pack2"  )) {
    let booked2 = `<h1 class='booked'>${localStorage.getItem("Pack2")}</h1>`;
  document.getElementById("StandardBTN").style.display='none'// add all btns for remove this btn 
  let tamplait2 = `<div>${booked2}</div> `
  standarddata.innerHTML = tamplait2 ;
  }
  
}
  

class inputs {
  constructor(
    inputName,
    inputNamber,
    inputEmail,
    button,
    email,
    namber,
    name,
    confirmBtn , 
    packName
  ) {
    this.inputName = inputName;
    this.inputNamber = inputNamber;
    this.inputEmail = inputEmail;
    this.btn = button;
    this.name = name;
    this.namber = namber;
    this.email = email;
    this.confirmBtn = confirmBtn;
    this.packName = packName
  }
  BasicForm() {
    return `<form id="BasicForm">
    ${this.inputName}
    ${this.inputNamber}
    ${this.inputEmail}
    ${this.btn}
    </form>`;
  }
  StandardForm() {
    return `<form id="StandardForm">
      ${this.inputName}
      ${this.inputNamber}
      ${this.inputEmail}
      ${this.btn}
      </form>`;
  }
  ProForm() {
    return `<form  id="ProForm">
        ${this.inputName}
        ${this.inputNamber}
        ${this.inputEmail}
        ${this.btn}
        </form>`;
  }
  checkBoxLang() {
    return `<ul class='list-group' id='listCheck'>
    <li class='list-group-item'><input type="checkbox" id="FrontEnd" > <label for='FrontEnd'>FrontEnd</label> </li>
    <li class='list-group-item'><input type="checkbox" id='BackEnd' ><label for='BackEnd'>BackEnd</label></li>
    <li class='list-group-item'><input type="checkbox" id='C_Cpp' ><label for='C_Cpp'>C/C++</label></li>
    <li class='list-group-item'><input type="checkbox" id='Ceyber'> <label for='Ceyber'>Ceyber Security</label> </li>
    <li class='list-group-item'><input type="checkbox" id='Python' > <label for='Python'>Python</label></li>
    
    </ul>
    <div class='width:100%;display:flex;justifay-content:center;'>${this.confirmBtn}</div>
    `;
  }

  Wtachdata() {
    return `<ul class='list-group data'>
    <li  class="list-group-item data"> Name  : ${this.name}</li>
    <li class="list-group-item data" > Email  : ${this.email}</li>
    <li class="list-group-item data"> Namber : ${this.namber}</li>
    </ul>
    `;
  }
}
const forms = new inputs(
  `<input type="text" id='infoName'  class="form" placeholder="Name" > `,
  `<input type="tel" class="form" id="infoNamber" placeholder="Phone Namber" > `,
  `<input type="Email" id='infoEmail' class="form"  placeholder="Email"> `,
  `<input type="submit" id='NextBtn' class="BtnLearn"   value="Next">`
);
forms.confirmBtn = `<input type="submit" id='Next2Btn' class="BtnLearn"   value="Next">`;
console.log("its run");
// start

var pro = document.getElementById("ProfessionalBTN");

var prodata = document.getElementById("proData");

pro.onclick = ()=>{
  ProPack()
}  






//end





var basic = document.getElementById("BasicBTN");
var basicdata = document.getElementById("basicdata");

basic.addEventListener("click", () => {
  basicdata.innerHTML = forms.BasicForm();
  basic.style.display = "none";
  document.getElementById("BasicForm").addEventListener("submit", ev=>{
  ev.preventDefault();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Free Pack ,  Welccome to discord Server",
    showConfirmButton: true,
    timer: 1500,
  });
  window.location.replace('https://discord.gg/mcF5wSMz')  
  }

  )
});


















var standard = document.getElementById("StandardBTN");
var standarddata = document.getElementById("standarddata");


standard.addEventListener("click", () => {
  standarddata.innerHTML = forms.StandardForm();
  standard.style.display = "none";
  forms.packName = "Standard Pack"
  let nextBtn = document.getElementById("NextBtn");
  let standardForm = document.getElementById("StandardForm");
  standardForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (
      document.getElementById("infoName").value === "" ||
      document.getElementById("infoNamber").value === "" ||
      document.getElementById("infoEmail").value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to fill this inputs",
      });
    } else {
      forms.name = document.getElementById("infoName").value;
      forms.email = document.getElementById("infoEmail").value;
      forms.namber = document.getElementById("infoNamber").value;
      standarddata.innerHTML = forms.checkBoxLang();
      // step 3 checkboxs
      nextBtn.style.display = "none";
      document.getElementById("Next2Btn").addEventListener("click", () => {
        var chekboxList = Array.from(
          document.getElementById("listCheck").querySelectorAll("input")
        );
        let domains = [];
        chekboxList.map((ele) => {
          if (ele.checked) {
            domains.push(ele.getAttribute("id")); // what is standardtotype for get name input of lables in js
          }
        });
        chekboxList.some((el) => {
          if (el.checked === false) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "🤔🤔🤔",
            });
          } else {
            let listli = "";
            let listEle;
            for (let index = 0; index < domains.length; index++) {

              var set = new Set().add(domains[index]);
              console.log(set);
              if (set.has(domains[index])) {
                listli = `<li style='${
                  listli === "" ? "display:none" : "display:block"
                }'class="list-group-item">${listli}</li> <li style='${
                  domains[index] === "" ? "display:none" : "display:block"
                }' class="list-group-item">${domains[index]}</li>`;
              }
              listEle = `<ul class='list-group domains'> ${listli} </ul>`;
              var tamplaitForm = `<div><div> ${forms.Wtachdata()} </div> <div> ${listEle} </div>  </div>`;
            }
            let confirmBtn = `<input id="confirm" type="submit" class="BtnLearn confirm" value='Confirme'>`;
            let fullTamplait = `<div>${tamplaitForm}${confirmBtn}</div>`;
            standarddata.innerHTML = fullTamplait;
            document.getElementById("confirm").onclick = () => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "standard Pack ,  we will contact you later",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("Pack2", "been booked");
              
              let booked = `<h1 class='booked'>${localStorage.getItem('Pack2')}</h1>`
              emailSend(domains)
              standarddata.innerHTML = booked ;
            };
          }
        });
      });
    }
  });
});































  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
function emailSend(listDomains){
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "highqp00@gmail.com",
  Password : "DB5883F71C0B5C7087C88B26A927EC5E8191",
  To : forms.email ,
  From : "highqp00@gmail.com",
  Subject : "New Student ",
  Body : ` Hello HQP Team <br><br><br><br>
  
  You Have Student : <br><br>
      Pack Name : " ${ forms.packName}"<br>
      Email :${ forms.email } <br>
      Namber : ${ forms.namber}<br>
      Name  : ${ forms.name }<br>
      need to learn : ${ listDomains }<br>
      

  <code>by HQP</code>
  `
})
}




















function ProPack() {
  

prodata.innerHTML = forms.ProForm();
  pro.style.display = "none";
  forms.packName = "Pro Pack"
  let nextBtn = document.getElementById("NextBtn");
  let proForm = document.getElementById("ProForm");
  proForm.style.display='block'
  proForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (
      document.getElementById("infoName").value === "" ||
      document.getElementById("infoNamber").value === "" ||
      document.getElementById("infoEmail").value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to fill this inputs",
      });
    } else {
      forms.name = document.getElementById("infoName").value;
      forms.email = document.getElementById("infoEmail").value;
      forms.namber = document.getElementById("infoNamber").value;
      prodata.innerHTML = forms.checkBoxLang();
      // step 3 checkboxs
      nextBtn.style.display = "none";
      document.getElementById("Next2Btn").addEventListener("click", () => {
        var chekboxList = Array.from(
          document.getElementById("listCheck").querySelectorAll("input")
        );
        let domains = [];
        chekboxList.map((ele) => {
          if (ele.checked) {
            domains.push(ele.getAttribute("id")); // what is prototype for get name input of lables in js
          }
        });
        chekboxList.some((el) => {
          if (el.checked === false) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "🤔🤔🤔",
            });
          } else {
            let listli = "";
            let listEle;
            for (let index = 0; index < domains.length; index++) {

              var set = new Set().add(domains[index]);
              console.log(set);
              if (set.has(domains[index])) {
                listli = `<li style='${
                  listli === "" ? "display:none" : "display:block"
                }'class="list-group-item">${listli}</li> <li style='${
                  domains[index] === "" ? "display:none" : "display:block"
                }' class="list-group-item">${domains[index]}</li>`;
              }
              listEle = `<ul class='list-group domains'> ${listli} </ul>`;
              var tamplaitForm = `<div><div> ${forms.Wtachdata()} </div> <div> ${listEle} </div>  </div>`;
            }
            let confirmBtn = `<input id="confirm" type="submit" class="BtnLearn confirm" value='Confirme'>`;
            let fullTamplait = `<div>${tamplaitForm}${confirmBtn}</div>`;
            prodata.innerHTML = fullTamplait;
            document.getElementById("confirm").onclick = () => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "PRO Pack ,  we will contact you later",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("Pack1", "been booked");
              
              let booked = `<h1 class='booked'>${localStorage.getItem('Pack1')}</h1>`
              emailSend(domains)
              prodata.innerHTML = booked  ;
            };
          }
        });
      });
    }
  });



}


