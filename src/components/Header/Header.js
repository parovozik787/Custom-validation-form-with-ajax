import $ from "jquery";
export const Header = () => {
  $(".burger").click(function () {
    $(".header__nav").slideToggle();
    $(this).toggleClass("burger--active");
  });
};
