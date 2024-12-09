// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import firstRev from '../assets/firstRev.jpg';
import secondRev from '../assets/secondRev.jpg';
import lastRev from '../assets/lastRev.jpg';
import rev from '../../public/rev.jpg';
import rev2 from '../../public/otziv.jpg';
import reviewsImage2 from '../assets/reviewsImages2.png';

function Reviews() {
  return (
    <div
      className="w-full h-[1000px] flex justify-center items-center mt-16"
      style={{ userSelect: 'none' }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-4/5 h-[500px] bg-white"
      >
        {/* Первый слайд */}
        <SwiperSlide>
          <div className="flex flex-row gap-40">
            <img src={firstRev} alt="Review 1" className="w-[400px]" />
            <div className="w-[500px] h-[500px]">
              <img src={reviewsImage2} alt="Review Icon 1" />
              <p className="text-3xl pt-11">
              Сыворотка өте күшті, теріні жақсы ылғалдандырады. <br />
              Тез сіңіп кетеді, әрі бетімді майлы ғылдырып турмайды🔥
              </p>
              <img src={reviewsImage2} alt="Reviewer" className="pt-10" />
            </div>
          </div>
        </SwiperSlide>

        {/* Второй слайд */}
        <SwiperSlide>
            <div className="flex flex-row gap-40">
                <img src={secondRev} alt="Review 1" className="w-[400px]" />
                <div className="w-[500px] h-[500px]">
                <img src={reviewsImage2} alt="Review Icon 1"/>
                <p className="text-3xl pt-11">
                    Осы продукцианы жиі аламын, spf кремі өте күшті, кунен теріні жақсы қорғайды, әрі ылғалдандырады. <br />
                    Осы spf жеңіл жағылады, әрі тез сіңіп кетеді, <br />
                    жаққанан кейін эффекті 2 реттен байкадым, маған ұнады😍 
                </p>
                <img src={reviewsImage2} alt="Reviewer" className="pt-10" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-row gap-40">
                <img src={lastRev} alt="Review 1" className="w-[400px]" />
                <div className="w-[500px] h-[500px]">
                <img src={reviewsImage2} alt="Review Icon 1" />
                <p className="text-3xl pt-11">
                d’alba гельын бырыншы рет алып кордым. Байкаганым оте жаксы тазартады, <br />
                терыны катты кептырмейды екен. Макияжды барын тап таза жуып тастайды.  <br />
                Терыге питание береды.👍
                </p>
                <img src={reviewsImage2} alt="Reviewer" className="pt-10" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-row gap-40">
                <img src={rev} alt="Review 1" className="w-[400px]" />
                <div className="w-[500px] h-[500px]">
                <img src={reviewsImage2} alt="Review Icon 1" />
                <p className="text-[17px] pt-11">
                Бұл SPF текстурасы мен қолданған санскриндерімнің ең үздігі болды. 
                Өте жеңіл, салмақсыз, менің терім оны бірден сіңіріп алды, яғни терімде ешқандай сезім қалмайды,
                ештеңе жоқ секілді (терім аралас, майлыға бейім). Терім ешқандай майланбады, бірақ күннің соңында <br />
                немесе бетперде киіп жүргенде майлы жерлерді пудрамен түзету керек болуы мүмкін, әрине, бұл жеке ерекшелік. <br />
                Алғашында терімде жылтырақ пайда болады деп қорыққан едім, бірақ бейне пікірлерді көріп, менің алаңдауларым<br />
                 артық болды. Жылтырақ өте жұмсақ, барлық тері жарқырап тұрғандай емес, керісінше іштен жарық шашқандай, осы әсерді өте ұнаттым. <br />
                </p>
                <img src={reviewsImage2} alt="Reviewer" className="pt-10" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-row gap-40">
                <img src={rev2} alt="Review 1" className="w-[400px]" />
                <div className="w-[500px] h-[500px]">
                <img src={reviewsImage2} alt="Review Icon 1" />
                <p className="text-[17px] pt-11">
                    Кремнің өте жағымды текстурасы бар. Ол жеңіл, сонымен қатар қоректендіретін.
                </p>
                <img src={reviewsImage2} alt="Reviewer" className="pt-10" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Reviews;
