(function ($) {
"user strict";

//Create Background Image
(function background() {
  let img = $('.bg_img');
  img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
  });
})();

// nice-select
$(".nice-select").niceSelect(),

// select-2 init
$('.select2-basic').select2();
$('.select2-multi-select').select2();
$(".select2-auto-tokenize").select2({
tags: true,
tokenSeparators: [',']
});

// sidebar
$(".sidebar-menu-item > a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("active")) {
    element.removeClass("active");
    element.children("ul").slideUp(500);
  }
  else {
    element.siblings("li").removeClass('active');
    element.addClass("active");
    element.siblings("li").find("ul").slideUp(500);
    element.children('ul').slideDown(500);
  }
});

//sidebar Menu
$(document).on('click', '.sidebar-menu-bar', function () {
  $('.header').toggleClass('active');
  $('.sidebar').toggleClass('active');
  $('.navbar-wrapper').toggleClass('active');
  $('.body-wrapper').toggleClass('active');
  $('.copyright-wrapper').toggleClass('active');
});

//dark version
$(document).on('click', '.header-version-bar', function () {
  $('.page-wrapper').toggleClass('dark-version');
});

$(document).on('click', '.header-version-bar', function() {
  setVersion(localStorage.getItem('page-wrapper'));
});


if (localStorage.getItem('page-wrapper') == 'light-version') {
  localStorage.setItem('page-wrapper', 'dark-version');
} else {
  localStorage.setItem('page-wrapper', 'light-version');
}

setVersion(localStorage.getItem('page-wrapper'));

function setVersion(version) {
  if (version == 'dark-version') {
    localStorage.setItem('page-wrapper', 'light-version');
    $('.page-wrapper').addClass(version);
    $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('dark_img'));
    $('.version-btn').html('<i class="las la-sun"></i>');

  } else {
    localStorage.setItem('page-wrapper', 'dark-version');
    $('.page-wrapper').removeClass('dark-version');
    if(localStorage.getItem('sidebar-theme') == 'dark-sidebar') {
      $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('dark_img'));
    }else {
      $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('white_img'));
    }
    $('.version-btn').html('<i class="las la-moon"></i>');
  }
}

$(".header-link").click(function(event){
  if($(this).next().hasClass("active") != true) {
    $('.header-link').next().removeClass("active");
  }
});

//Search Bar
$('.header-search-bar').on('click', function (e) {
  e.preventDefault();
  if($('.header-search-wrapper').hasClass('active')) {
    $('.header-search-wrapper').removeClass('active');
    $('.body-overlay').removeClass('active');
  }else {
    $('.header-search-wrapper').addClass('active');
    $('.body-overlay').addClass('active');
  }
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.header-search-wrapper').removeClass('active');
  $('.body-overlay').removeClass('active');
});

//Notification Bar
$('.header-notification-bar').on('click', function (e) {
  e.preventDefault();
  if($('.notification-wrapper').hasClass('active')) {
    $('.notification-wrapper').removeClass('active');
    $('.body-overlay').removeClass('active');
  }else {
    $('.notification-wrapper').addClass('active');
    $('.body-overlay').addClass('active');
  }
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.notification-wrapper').removeClass('active');
  $('.body-overlay').removeClass('active');
});

//User Bar
$('.header-user-bar').on('click', function (e) {
  e.preventDefault();
  if($('.header-user-wrapper').hasClass('active')) {
    $('.header-user-wrapper').removeClass('active');
    $('.body-overlay').removeClass('active');
  }else {
    $('.header-user-wrapper').addClass('active');
    $('.body-overlay').addClass('active');
  }
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.header-user-wrapper').removeClass('active');
  $('.body-overlay').removeClass('active');
});

//Settings
$('.header-settings-bar').on('click', function (e) {
  e.preventDefault();
  if($('.settings-sidebar-area').hasClass('active')) {
    $('.settings-sidebar-area').removeClass('active');
    $('.body-overlay').removeClass('active');
  }else {
    $('.settings-sidebar-area').addClass('active');
    $('.body-overlay').addClass('active');
  }
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.settings-sidebar-area').removeClass('active');
  $('.body-overlay').removeClass('active');
});

//Support
$('.header-support-bar').on('click', function (e) {
  e.preventDefault();
  if($('.header-support-wrapper').hasClass('active')) {
    $('.header-support-wrapper').removeClass('active');
    $('.body-overlay').removeClass('active');
  }else {
    $('.header-support-wrapper').addClass('active');
    $('.body-overlay').addClass('active');
  }
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.header-support-wrapper').removeClass('active');
  $('.body-overlay').removeClass('active');
});

//layout-tab-switcher
$('#layout-tab-switcher').on('click', function () {
  $(this).toggleClass('active');
  $('.page-wrapper').toggleClass('dark-version');
  setVersion(localStorage.getItem('page-wrapper'));
});

//topbar-tab-switcher
$('#topbar-tab-switcher').on('click', function () {
  $(this).toggleClass('active');
  $('.page-wrapper').toggleClass('dark-topbar');
});

//sidebar-tab-switcher
$('#sidebar-tab-switcher').on('click', function () {
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $('.page-wrapper').addClass('dark-sidebar');
    localStorage.setItem('sidebar-theme','dark-sidebar');
    $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('dark_img'));
  }else {
    $('.page-wrapper').removeClass('dark-sidebar');
    localStorage.setItem('sidebar-theme','');
    if(localStorage.getItem('page-wrapper') == 'dark-version') {
      $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('white_img'));
    }else {
      $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('dark_img'));
    }
  }
});

// check side navbar theme color
function sideNavThemeColor(setItem) {
  if(setItem == 'dark-sidebar') {
    $('.sidebar-main-logo img').attr('src', $('.sidebar-main-logo img').data('dark_img'));
    $('.page-wrapper').addClass(setItem);
    $('#sidebar-tab-switcher').addClass('active');
  }else {
    localStorage.setItem('sidebar-theme','dark-sidebar');
  }
}

sideNavThemeColor(localStorage.getItem('sidebar-theme'));

//min-sidebar-tab-switcher
$('#min-sidebar-tab-switcher').on('click', function () {
  $(this).toggleClass('active');
  $('.page-wrapper').toggleClass('dark-min-sidebar');
});

// active menu JS
  function splitSlash(data) {
    return data.split('/').pop();
  }
  function splitQuestion(data) {
    return data.split('?').shift().trim();
  }
  var pageNavLis = $('.sidebar-menu a');
  var dividePath = splitSlash(window.location.href);
  var divideGetData = splitQuestion(dividePath);
  var currentPageUrl = divideGetData;

  // find current sidevar element
  $.each(pageNavLis,function(index,item){
      var anchoreTag = $(item);
      var anchoreTagHref = $(item).attr('href');
      var index = anchoreTagHref.indexOf('/');
      var getUri = "";
      if(index != -1) {
        // split with /
        getUri = splitSlash(anchoreTagHref);
        getUri = splitQuestion(getUri);
      }else {
        getUri = splitQuestion(anchoreTagHref);
      }
      if(getUri == currentPageUrl) {
        var thisElementParent = anchoreTag.parents('.sidebar-menu-item');
        (anchoreTag.hasClass('nav-link') == true) ? anchoreTag.addClass('active') : thisElementParent.addClass('active');
        (anchoreTag.parents('.sidebar-dropdown')) ? anchoreTag.parents('.sidebar-dropdown').addClass('active') : '';
        (thisElementParent.find('.sidebar-submenu')) ? thisElementParent.find('.sidebar-submenu').slideDown("slow") : '';
        return false;
      }
  });

// page load active menu 
setTimeout(() => {
  if ($('.sidebar-menu-item').hasClass('active')) {
      $('.sidebar').animate({
          scrollTop: $('.sidebar-menu-item.active').offset().top - 600
      }, 600);

  }
  if ($('.sidebar-dropdown').hasClass('active')) {
      $('.sidebar').animate({
          scrollTop: $('.sidebar-dropdown.active').offset().top - 600
      }, 600);
  }
}, 200);

$(document).ready(function(){
  $.each($(".switch-toggles"),function(index,item) {
    var firstSwitch = $(item).find(".switch").first();
    var lastSwitch = $(item).find(".switch").last();
    if(firstSwitch.attr('data-value') == null) {
      $(item).find(".switch").first().attr("data-value",true);
      $(item).find(".switch").last().attr("data-value",false);
    }
    if($(item).hasClass("active")) {
      $(item).find('input').val(firstSwitch.attr("data-value"));
    }else {
      $(item).find('input').val(lastSwitch.attr("data-value"));
    }
  });
});

$('.switch-toggles .switch').on('click', function () {
  $(this).parents(".switch-toggles").toggleClass('active');
  $(this).parents(".switch-toggles").find("input").val($(this).attr("data-value"));
});

// rte editor
function initRichEditor(element){
  if(document.querySelector(element) != null) {
    new RichTextEditor(element);
  }
}
initRichEditor("#div_editor1");

// kyc-form
$('.kyc-form').on('click', '.add-row-btn', function() {
  $('.add-row-btn').closest('.kyc-form').find('.add-row-wrapper').last().clone().show().appendTo('.results');
});

$(document).on('click','.kyc-cross-btn', function (e) {
e.preventDefault();
$(this).parent().parent().hide(300);
});

//dark version
$(document).on('click', '.info-btn', function () {
  $('.support-profile-wrapper').addClass('active');
});
$(document).on('click', '.chat-cross-btn', function () {
  $('.support-profile-wrapper').removeClass('active');
});

})(jQuery);