const AlbumName = ({Img,NameTitle, NameAlbum, NameArtist, ButtonUrl}) => (
    <div className="AlbumName">
      <img src={Img}/>
        <h2>{NameTitle}</h2>
        <h3>{NameAlbum}</h3>
        <h3>{NameArtist}</h3>
        <a href={ButtonUrl}><button>Pilih</button></a>
    </div>
  );
  
  
  export default AlbumName;