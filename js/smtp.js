/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

document.getElementById('form').onsubmit = (ev)=>{
  ev.preventDefault();
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "highqp00@gmail.com",
  Password : "DB5883F71C0B5C7087C88B26A927EC5E8191",
  To : document.getElementById('userEmail').value ,
  From : "highqp00@gmail.com",
  Subject : "New Student ",
  Body : ` Hello HQP Team <br><br><br><br>
  
  You have new student : <br><br>
      Email :${document.getElementById('userEmail').value } <br>
      Namber : ${document.getElementById("userNamber").value}<br>
      Name  : ${document.getElementById('userName').value}<br>
      Message : " ${document.getElementById("userMessage").value}"<br>

  <code>by HQP</code>
  `
}).finally(  ()=>{ 
if(document.getElementById("userNamber").value === "" || document.getElementById('userEmail').value === "" || document.getElementById('userName').value === "" ) {
    return( 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to fill this inputs',
    })
    )
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you for your message, we will contact you later',
      showConfirmButton: false,
      timer: 1500
    })
    document.getElementById("form").reset()
  }
})



}