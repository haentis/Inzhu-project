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

function Reviews() {
  return (
    <div
      className="w-full h-full flex justify-center items-center mt-16 bg-gray-100 py-16"
      style={{ userSelect: 'none' }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-11/12 md:w-4/5 bg-white rounded-lg shadow-lg"
      >
        {/* Первый слайд */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <img src={firstRev} alt="Review" className="w-full md:w-1/3 rounded-lg shadow-md" />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700">
                Сәлеметсіз бе! Сыворотка өте күшті, теріні жақсы ылғалдандырады. Тез сіңіп кетеді,
                әрі бетімді майлы қылдырмайды🔥. Мен Астана қаласында тұрамын, Астананың суығынан тері қатты зақымданады.
                Осы сыворотка теріні тез қалпына келтіреді.
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">📍 Қала: Астана</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Второй слайд */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <img src={secondRev} alt="Review" className="w-full md:w-1/3 rounded-lg shadow-md" />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700">
                Сәлеметсіздер ме! Алматы қаласында Золотое яблоко дүкенінен осы өнімді жиі аламын. SPF кремі өте күшті,
                күннен теріні жақсы қорғайды, әрі ылғалдандырады. Жеңіл жағылады, тез сіңіп кетеді. Маған ұнады😍.
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">📍 Қала: Алматы</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Третий слайд */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <img src={lastRev} alt="Review" className="w-full md:w-1/3 rounded-lg shadow-md" />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700">
                Сәлеметсіз бе! Мен Өскемен қаласынанмын. Золотое яблоко дүкенінен гельді жеткізіп алдым. Өте жақсы тазартады,
                теріні кептірмейді, әрі макияжды толық кетіреді. Ұнады 👍.
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">📍 Қала: Өскемен</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Четвертый слайд */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <img src={rev} alt="Review" className="w-full md:w-1/3 rounded-lg shadow-md" />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700">
                Бұл SPF текстурасы мен қолданған санскриндердің ең үздігі болды. Өте жеңіл, салмақсыз,
                менің терім оны бірден сіңіріп алды. Жылтырақ өте жұмсақ, іштен жарық шашқандай әсер береді. Ұнады!
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">📍 Қала: Шымкент</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Пятый слайд */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <img src={rev2} alt="Review" className="w-full md:w-1/3 rounded-lg shadow-md" />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700">
                Кремнің өте жағымды текстурасы бар. Ол жеңіл, сонымен қатар қоректендіретін.
                Ұзақ қолданған соң, терімнің жағдайы жақсарды.
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">📍 Қала: Ақтау</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Reviews;
