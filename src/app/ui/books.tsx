import Image from "next/image"
import frontCover_visualSlam from '@/../public/images/(just front cover) VISUAL-SLAM_300x375.jpg'
import frontCover_elemental from '@/../public/images/EP - Cover_2.png'

import DelayOpenButton from './delay-open-btn';

import '@/app/ui/book.scss'

export default function Books() {

  return (
    <div id="books" className="my-container anchor">
      {/* <img class="grain-dient" src="grain.svg" alt=""> */}
      <div className="title">-BOOKS-</div>
      <div className="stuff">
        <DelayOpenButton linkName="amazon">
          <div className="book">
            <div className="book-back-visual_slam book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-cover book-inner">
              <Image
                src={frontCover_visualSlam}
                alt="visual-slam-artpoetrybook_img"
                width={300}
                height={375}
              />
            </div>
            <div className="click-to-open">
              <span className="text">(Click to Open)</span>
            </div>
          </div>
        </DelayOpenButton>
        <DelayOpenButton linkName="elemental">
          <div className="book">
            <div className="book-back-elemental book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-pages book-inner" />
            <div className="book-cover book-inner">
              <Image
                src={frontCover_elemental}
                alt="visual-slam-artpoetrybook_img"
                width={300}
                height={375}
              />
            </div>
            <div className="click-to-open">
              <span className="text">(Click to Open)</span>
            </div>
          </div>
        </DelayOpenButton>

        
          
        {/* <div className="desc">
          <span>
            64 pages of wonderfully awesome-packed goodness! <br />
            <br />
            Visual art &amp; spoken word poetry blended together. 🎭
            <br />
            <br />
            (some funny pages in there too, lol..😆) <br />
            <br />
            YOU WILL START TO CHANGE...
            <br />
            <br />
          </span>
        </div> */}
      </div>
      <div className="grain" />
    </div>
  );
}