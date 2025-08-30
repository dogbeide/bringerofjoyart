// import './music.module.css';

export default function Music() {
  return (
    <div id="music" className="my-container anchor">
      <div className="title">~MUSIC~</div>
      {/* <div className="desc">Ayyyyy!...🎶🤪</div> */}
      <div className="music-video-container">
        <div className="music-video">
          {/* <iframe
            style={{ border: 0, borderRadius: 12, maxHeight: 360, height: 360 }}
            src="https://open.spotify.com/embed/album/1bqDAEZ8nlfAWelWQi6h5Z?utm_source=generator"
            width="100%"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          /> */}
          <iframe
            style={{ border: 0, borderRadius: 12, width: 320, height: 600, maxHeight: 600 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2609122360/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            width="100%"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          >
            {/* &lt;a href="https://boyowa.bandcamp.com/album/beautiful-moment"&gt;~Beautiful
            Moment~ by Boyowa&lt;/a&gt; */}
          </iframe>

        </div>
        <div className="music-video">
          <iframe
            style={{ borderRadius: 12, maxHeight: 152 }}
            src="https://open.spotify.com/embed/track/243wtU0nN8355P4WJau7JL?utm_source=generator"
            width="100%"
            height={152}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
      <div className="more">
        <a
          className="click-for-more"
          href="https://www.linktr.ee/bringerofjoymusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Click for ENTIRE DISCOGRAPHY)
        </a>
        
      </div>
    </div>
  );
}
