
// HTML SAYFASINDAN ELEMENTLERİN SEÇİLMESİ

let buton = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
let ul = document.getElementsByTagName("li")


// LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI

for (let i = 0; i < ul; i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ul[i].append(closeButton);
    ul[i].onclick = check;
}

buton.addEventListener('click', uyariEkle)  // butona tıklandığında uyariEkle fonksiyonu çalışacak

function check() {
    this.classList.toggle("checked");   // toggle ile öge seçiliyse kaldır, değilse seç şeklinde işlem yapacak
}                                      // .checked style özellikleriyle seçilen öge üzerini çiz ve yanına tik işareti koy

function removeButton() {
    this.parentElement.remove();    //  parentElement.remove kullanarak çarpının olduğu maddeyi sildik.
}

// SAĞ ÜSTTE KULLANICIYA UYARI GÖSTERİLMESİ

function uyariEkle() {
    if(task.value.trim() == "") {       // input değeri boş girildiğinde veya hiç girilmediğinde 
        $(".error").toast("show");      // bootstrap toast bildiriminin error class kullanımı
        task.value = "";                // işlem sonrası default değer göstermesi
    } 
        else {                          // girilen değerde sıkıntı yoksa bootstrap toast bildiriminin success kullanımı
            $(".success").toast("show");
    
        let li = document.createElement('li')  // yeni bir li elementi oluşturuldu
        list.appendChild(li);                  // yeni oluşan li elemanı mevcut listenin sonuna eklendi
        li.innerHTML = task.value;             // inputa girilen değerlerin li ye ataması yapıldı
        task.value = "";                       // işlem sonrası default değer göstermesi
        li.onclick = check;                    // yeni oluşan li tıklandığında seçildi, seçiliyse seçim kaldırıldı


        // sonradan eklenen maddelerin silinmesi için aynı işlemlerin tekrarı
        
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.onclick = removeButton;
        li.append(closeButton);
        list.append(li);
        inputElement.value = ("");
    }   
}
