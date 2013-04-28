function processData(data) {
	var limite = data.length - 1;
	var article = document.querySelectorAll("#destaques article");

	for(var i = 0; i < limite; i++){
    // Capa
    if(i == 0) getImage(data[i].Content[0].Image, article[i].querySelector(".capaContent"), 440, 215);
    else getImage(data[i].Content[0].Image, article[i].querySelector(".capaContent"), 212, 112);

    // Texto
    article[i].querySelector('.title').innerHTML = data[i].Content[0].Subtitle;
    article[i].querySelector('.news').innerHTML = data[i].Content[0].Summary;
    article[i].querySelector('.subtitle').innerHTML = data[i].Content[0].Title;

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

document.querySelector(".innerSection .btVoltar").onclick = goToHome;

function getImage(imgSrc, capaContent, w, h){
  var finalImage = new RAL.RemoteImage({
    src: imgSrc,
    priority: RAL.Queue.getNextHighestPriority(),
    width: w,
    height: h
  });

  var containerEl = capaContent;
  containerEl.appendChild(finalImage.element);
  RAL.Queue.add(finalImage);
  go();
}

function go() {
  RAL.Queue.setMaxConnections(4);
  RAL.Queue.start();
}

function goToHome(){
  document.querySelector(".innerSection").classList.remove("show");  
}

function goToInner(categoria, titulo, capa, noticia){
  document.querySelector(".innerSection").classList.add("show"); 

  document.querySelector(".innerSection .Titulo").innerHTML = titulo;
  document.querySelector(".innerSection .containerCover").innerHTML = categoria;
  document.querySelector(".innerSection .containerContent").innerHTML = noticia;
}