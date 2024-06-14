import './music.module.css';

export default function Music() {
  return (
    <div id="music" className="my-container anchor">
      <div className="title">~MUSIC~</div>
      <div className="desc">Ayyyyy!...🎶🤪</div>
      <div className="music-video-container">
        <div className="music-video">
          <iframe src="https://www.youtube.com/embed/Y6NO2hSLje0"></iframe>
        </div>
        <div className="music-video">
          <iframe src="https://www.youtube.com/embed/vQwDv7nq0z8"></iframe>
        </div>
      </div>
      <div className="more">
        (More Music) -&gt;{" "}
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
