
export default function Art() {
  return (
    <div id='art' className=" bg-blue-500 w-full h-8">
      <div className="title w-full font-bold flex flex-row justify-center text-center">~ART~</div>
      <iframe
        style={{ border: 0, borderRadius: 1, width: 300, height: 400, maxHeight: 600 }}
        width={320}
        height={180}
        src="https://www.youtube.com/embed/videoseries?si=86AICw8Pkxwh_qIM&list=PLz4Ae9BLkskoiNDPrpKmeO95KLpS27JlA"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      />

    </div>
  )
}