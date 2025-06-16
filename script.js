function mostrarAlerta() {
  alert("Thanks for visint, more coming soon!");
}

UPLOADCARE_PUBLIC_KEY = "d88828ad233b5ab3b5ea";


function doPost(e){
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email, data.message]);
  return ContentService.createTextOutput("OK");
}

"color": { "value": "#007BFF" } // Puedes probar "#ff69b4", "#00ffcc", "#ffffff", etc.
