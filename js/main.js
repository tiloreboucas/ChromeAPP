function processData(data) {
	var limite = data.length - 1;
	var article = document.querySelectorAll(".home article");

	for(var i = 0; i < limite; i++){
    // Capa
    if(i == 0) getImage(data[i].Content[0].Image, article[i].querySelector(".capa"), 440, 215);
    else getImage(data[i].Content[0].Image, article[i].querySelector(".capa"), 212, 112);

    // Texto
    /*article[i].querySelector('.title').innerHTML = data[i].Content[0].Subtitle;
    article[i].querySelector('.news').innerHTML = data[i].Content[0].Summary;
    article[i].querySelector('.subtitle').innerHTML = data[i].Content[0].Title;
    */
    article[i].onclick = goToInner;
	}
}

function handler() {	
  if(this.readyState == this.DONE) {
    if(this.status == 200) {
      processData(JSON.parse(client.responseText));
      return;
    }
    processData(null);
  }
}

var client = new XMLHttpRequest();

client.onreadystatechange = handler;
client.open("GET", "http://www.areah.com.br/_w8.aspx");
client.send();

document.querySelector(".interna .voltar").onclick = goToHome;

function getImage(imgSrc, target, w, h){
  var finalImage = new RAL.RemoteImage({
    src: imgSrc,
    priority: RAL.Queue.getNextHighestPriority(),
    width: w,
    height: h
  });

  //var containerEl = capaContent;
  //containerEl.appendChild(finalImage.element);
  console.log(finalImage);
  target.src = finalImage.element.src;
  RAL.Queue.add(finalImage);
  go();
}

function go() {
  RAL.Queue.setMaxConnections(4);
  RAL.Queue.start();
}

function goToHome(){
  document.querySelector(".interna").classList.remove("aberta");  
}

function goToInner(categoria, titulo, capa, noticia){
  document.querySelector(".interna").classList.add("aberta"); 

  document.querySelector(".interna .area").innerHTML = area;
  document.querySelector(".interna .titulo").innerHTML = titulo;
  document.querySelector(".interna .capa").src = capa;
  document.querySelector(".interna .texto").innerHTML = texto;
}