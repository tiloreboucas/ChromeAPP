/*
var Page = function(){
	this.GetData = function(){
		if(this.readyState == this.DONE) {
			if(this.status == 200) {
				Page.Build(JSON.parse(client.responseText));
				return;
			}
		}
	}

	this.Build = function(data){
		console.log(data);
	}
};
*/
function processData(data) {
  console.log(data);
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