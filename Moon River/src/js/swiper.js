import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

export default function swiper() {
    let swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        spaceBetween: 25,
        loop: true,
        pagination: {
          el: '.slider-footer__pagination',
        },
        navigation: {
          nextEl: '.slider-footer__next',
          prevEl: '.slider-footer__prev',
        }
    });
}