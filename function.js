window.function = function (linkedin, twitter, facebook, website, instagram, youtube, email, whatsapp, pinterest, tiktok, telegram, yelp, phone, message) {

  linkedin = linkedin.value ?? "";
  twitter = twitter.value ?? "";
  facebook = facebook.value ?? "";
  website = website.value ?? "";
  instagram = instagram.value ?? "";
  youtube = youtube.value ?? "";
  email = email.value ?? "";
  whatsapp = whatsapp.value ?? "";
  pinterest = pinterest.value ?? "";
  tiktok = tiktok.value ?? "";
  telegram = telegram.value ?? "";
  yelp = yelp.value ?? "";
  phone = phone.value ?? "";
  message = message.value ?? "";

  if (phone == "" && message == "" && yelp == "" && telegram == "" && linkedin == "" && twitter == "" && facebook == "" && website == "" && instagram == "" && youtube == "" && email == "" && whatsapp == "" && pinterest == "" && tiktok == "") {
    return "";
  }

  else {
  let tl_HTML = "";
  let li_HTML = "";
  let tw_HTML = "";
  let fb_HTML = "";
  let wb_HTML = "";
  let in_HTML = "";
  let yt_HTML = "";
  let em_HTML = "";
  let ws_HTML = "";
  let pi_HTML = "";
  let tt_HTML = "";
  let ye_HTML = "";
  let ph_HTML = "";
  let ms_HTML = "";
    
    //Image links
  let tl_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/UBQEtHCGAaUCK6SmkKKI.png";
  let li_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/mlprFlccKCq1kS7TFRL7.png";
  let tw_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/ESYSvASnVbcx7CwyUG8R.png";
  let fb_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/q7GGN4CqioZJ8dkjMgIW.png";
  let wb_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/J2e9rstgb4X4F6TJznKN.png";
  let in_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/JFgSrM2tlU4YV88qprlT.png";
  let yt_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/rC8buy6pfKg9vhy30p6s/pub/LqGEkR5pr3Tf3F6impPk.png";
  let em_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/pbOlDrCcoqJUQSStog3U.png";
  let ws_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/ACcKtnFmkOOV7lsTHcV9/pub/tKpquLCJ9SpOEPWLuNV6.png";
  let pi_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/aERzn549fzlrRK6IuaKk.png";
  let tt_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/kADuVCdD7LsazzPaOiQv.png";
  let ye_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/FEz2yDNF2weU0PhBn3wh.png";
  let ph_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/mEfOSTRFMtF01CxDkREg.png";
  let ms_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/r21OIORoDpKuA16rTxqR.png";
  
  if (phone != "") {
    ph_HTML = `<div class = "social-column"> \n \n <a href="tel:${phone}" target="blank"><img src="${ph_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (message != "") {
    ms_HTML = `<div class = "social-column"> \n \n <a href="sms://${message}" target="blank"><img src="${ms_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (yelp != "") {
    ye_HTML = `<div class = "social-column"> \n \n <a href="${yelp}" target="blank"><img src="${ye_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (telegram != "") {
    tl_HTML = `<div class = "social-column"> \n \n <a href="${telegram}" target="blank"><img src="${tl_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (linkedin != "") {
    li_HTML = `<div class = "social-column"> \n \n <a href="${linkedin}" target="blank"><img src="${li_img}" width= "40" height = "40" ></a></div>`;
  }

  if (twitter != "") {
    tw_HTML = `<div class = "social-column"> \n \n <a href="${twitter}" target="blank"><img src="${tw_img}" width= "40" height = "40" ></a></div>`;
  }

  if (facebook != "") {
    fb_HTML = `<div class = "social-column"> \n \n <a href="${facebook}" target="blank"><img src="${fb_img}" width= "40" height = "40" ></a></div>`;
  }

   if (website != "") {
    wb_HTML = `<div class = "social-column"> \n \n <a href="${website}" target="blank"><img src="${wb_img}" width= "40" height = "40" ></a></div>`;
  } 

  if (instagram != "") {
    in_HTML = `<div class = "social-column"> \n \n <a href="${instagram}" target="blank"><img src="${in_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (youtube != "") {
    yt_HTML = `<div class = "social-column"> \n \n <a href="${youtube}" target="blank"><img src="${yt_img}" width= "40" height = "40" ></a></div>`;
  }

  if (email != "") {
    em_HTML = `<div class = "social-column"> \n \n <a href="mailto:${email}" target="blank"><img src="${em_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (whatsapp != "") {
    ws_HTML = `<div class = "social-column"> \n \n <a href="${whatsapp}" target="blank"><img src="${ws_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (pinterest != "") {
    pi_HTML = `<div class = "social-column"> \n \n <a href="${pinterest}" target="blank"><img src="${pi_img}" width= "40" height = "40" ></a></div>`;
  }
    
  if (tiktok != "") {
    tt_HTML = `<div class = "social-column"> \n \n <a href="${tiktok}" target="blank"><img src="${tt_img}" width= "40" height = "40" ></a></div>`;
  }
  
  let social_joined = [li_HTML, tw_HTML, fb_HTML, wb_HTML, in_HTML, yt_HTML, em_HTML, ws_HTML,pi_HTML,tt_HTML,tl_HTML,ye_HTML,ph_HTML,ms_HTML].filter(Boolean).join("\n \n ");

  let final = `<div class="social-row">
  \n \n ${social_joined}
  \n \n <pre><span><style>
  \n \n .social-column {
  \n   position: relative;
  \n display: inline-block;
  \n float: right;
  \n padding: 10px;
\n }

\n \n .social-column img {
  \n width: 40px !important;
  \n height: 40px !important;
\n }

\n \n .social-row {
\n display: flex;
\n align-items: center;
\n justify-content: center;
\n }`;

  return final;
}
}
