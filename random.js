var artists = ["Bobby Shurmda", "Lil Uzi Vert", "Future", "Machel Montano", "Kes the Band", "Vybz Kartel"];

function ranArtists(){
    console.log(artists[Math.round(Math.random()* artists.length -1)])
}

for(var i=0; i<1; i++){
    ranArtists();
}