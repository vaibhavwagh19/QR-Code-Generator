const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
gerneratebtn = wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");

gerneratebtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    console.log(qrValue);
    
    if(!qrValue) {
        document.getElementById('qrInput-err').innerHTML="Please Enter Something.";
        wrapper.classList.remove("active");
        return;
    }
    else{
        document.getElementById('qrInput-err').innerHTML="";
    }

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    wrapper.classList.add("active");
});


downloadbtn = wrapper.querySelector("#downloadqr");

downloadbtn.addEventListener("click", async()=>{
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.png";
    downloadLink.click();
});