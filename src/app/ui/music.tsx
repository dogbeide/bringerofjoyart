// import './music.module.css';

export default function Music() {
  return (
    <div id="music" className="my-container anchor">
      <div className="title">~MUSIC~</div>
      <div className="desc">Ayyyyy!...🎶🤪</div>
      <div className="music-video-container">
        <div className="music-video">
          <iframe
            style={{ border: 0, borderRadius: 12, maxHeight: 360, height: 360 }}
            src="https://open.spotify.com/embed/album/1bqDAEZ8nlfAWelWQi6h5Z?utm_source=generator"
            width="100%"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="music-video">
          <iframe
            src="https://www.youtube.com/embed/A2aEOF6sRnE?si=Y01p_eI-FDQkttET"
            title="Boyowa Youtube ~Beautiful Moment~ [FULL ALBUM]"
            style={{ border: 0, borderRadius: 6 }}
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
          href="https://www.linktr.ee/bringerofjoymusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Click for More Music)
        </a>
        <a
          className="link-discography"
          href="https://www.linktr.ee/bringerofjoymusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTIRE DISCOGRAPHY
        </a>
      </div>
    </div>
  );
}
