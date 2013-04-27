function processData(data) {
	console.log(data);
	var limite = data.lentgh;
	
	for(var i = 0; i < limite; i++){
		data[i].Name
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