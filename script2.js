const albumDetails =  {  

  title: "Get Rich Or Die Tryin",
  artist: "50 Cent",
  genre: "Hip Hop",
  releaseDate: 2003,
  Length: 53,
  img: "./Get_Rich_Or_Die_Tryin'.jpg",


  getAlbumAge() {
    return 2022 - this.releaseDate;
  },


 renderDetails () {
   return `
   <h1>the age of this album is ${this.getAlbumAge()}</h1>
    <img src=${this.img}>
    <h2>${this.title}</h2>
    <h3>${this.artist}</h3>
   </div>`

 }

};


const albumContainer = document.querySelector('.albumContainer');

albumContainer.innerHTML = albumDetails.renderDetails();



const drakeAlbum =  {  

  title: "Take Care",
  artist: "Drake",
  genre: "Hip Hop",
  releaseDate: 2011,
  length: 80,
  img: "./download.jpg",


  getAlbumAge() {
    return 2022 - this.releaseDate;
  },


 renderDetails () {
   return `
   <h1>the age of this album is ${this.getAlbumAge()}</h1>
    <img src=${this.img}>
    <h2>${this.title}</h2>
    <h3>${this.artist}</h3>
   </div>`

 }

};

const drakeContainer = document.querySelector(".drakeContainer");

drakeContainer.innerHTML = drakeAlbum.renderDetails();

