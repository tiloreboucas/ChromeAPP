function processData(data) {
	console.log(data);
	var limite = data.lentgh - 1;
	var article = document.querySelectorAll("#destaques article");

	for(var i = 0; i < limite; i++){
		  article[i].querySelector(".capa").src = data[i].Content[0].Image;
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