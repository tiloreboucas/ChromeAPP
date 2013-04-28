function processData(data) {
	var limite = data.length - 1;
	var article = document.querySelectorAll(".home article");

	for(var i = 0; i < limite; i++){
    // Capa
    if(i == 0) getImage(data[0].Content[i].Image, article[i].querySelector(".capa"), 440, 215);
    else getImage(data[0].Content[i].Image, article[i].querySelector(".capa"), 212, 112);

    // Texto
    article[i].querySelector('.area').innerHTML = data[0].Content[i].Title;
    article[i].querySelector('.titulo').innerHTML = data[0].Content[i].Subtitle;
    
    article[i].dataContent = {
      area: data[0].Content[i].Title,
      titulo: data[0].Content[i].Subtitle,
      capa: data[0].Content[i].Image,
      texto: data[0].Content[i].Body
    } 

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

  var containerEl = target;
  containerEl.appendChild(finalImage.element);
  
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

function goToInner(){
  console.log(this.dataContent);
  document.querySelector(".interna").classList.add("aberta");

  
}