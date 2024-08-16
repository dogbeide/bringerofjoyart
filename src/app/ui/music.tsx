// import './music.module.css';

export default function Music() {
  return (
    <div id="music" className="my-container anchor">
      <div className="title">~MUSIC~</div>
      <div className="desc">Ayyyyy!...🎶🤪</div>
      <div className="music-video-container">
        <div className="music-video">
          <iframe
            style={{ border: 0, borderRadius: 12, maxHeight: 240 }}
            src="https://open.spotify.com/embed/track/243wtU0nN8355P4WJau7JL?utm_source=generator"
            width="100%"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="music-video">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLWAUE11eiIU6_gNZ0bzBrkXDL3jIn_HWz"
            title="Boyowa Youtube MUSIC Playlist"
            style={{border: 0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* <div className="music-video">
          <iframe src="https://www.youtube.com/embed/30IP08dEE_A"></iframe>
        </div>
        <div className="music-video">
          <iframe src="https://www.youtube.com/embed/Y6NO2hSLje0"></iframe>
        </div> */}
      </div>
      <div className="more">
        <a
          className="click-for-more"
          href="https://www.linktr.ee/iamboyowa_music"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Click for More Music)
        </a>
        <a
          className="link-discography"
          href="https://www.linktr.ee/iamboyowa_music"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTIRE DISCOGRAPHY
        </a>
      </div>
    </div>
  );
}
