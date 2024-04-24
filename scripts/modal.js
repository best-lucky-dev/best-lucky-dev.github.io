$(document).ready(function () {
  // MODAL
  var modalText = {
    t_mobile: {
      title: "T-Mobile",
      tag: "t-mobile",
      detail: "T-Mobile US, Inc. (NASDAQ: TMUS) is America’s supercharged Un-carrier, delivering an advanced 4G LTE and transformative nationwide 5G network that will offer reliable connectivity for all. T-Mobile’s customers benefit from its unmatched combination of value and quality, unwavering obsession with offering them the best possible service experience and undisputable drive for disruption that creates competition and innovation in wireless and beyond. Based in Bellevue, Wash., T-Mobile provides services through its subsidiaries and operates its flagship brands, T-Mobile and Metro by T-Mobile. For more information",
      link: "https://play.google.com/store/apps/details?id=com.tmobile.pr.mytmobile&hl=en&gl=US",
    },
    team: {
      title: "Bodi by BeachBody",
      tag: "bodi by beachBody",
      detail:
        "Home Based Business, with the leading fitness programs available, and the best products to help you meet your goals quickly. Only 8000 reps, so the wave has just begun.",
        link: "https://play.google.com/store/apps/details?id=com.beachbody.bod&hl=en&gl=US",
    },
    maple: {
      title: "SwiftScan PDF Documents",
      tag: "swiftScan PDF documents",
      detail:
        "Maple Media is a mobile media, advertising, and technology company that acquires and operates category-leading, consumer apps on the App Store and Google Play. Maple Media's top apps include:  Player FM - Podcast App, Pic Stitch, WeekCal, SwiftScan, Dialog, Snowboard Party, Skateboard Party, Minesweeper: Puzzle Bomb, Mazes & More, Puzzlerama, Sleepa, Sleep Sounds and Weather Hi-Def Radar.",
      link: "https://play.google.com/store/apps/details?id=net.doo.snap&hl=en&gl=US",
    },
    wells: {
      title: "Wells Fargo Mobile",
      tag: "wells fargo mobile",
      detail:
        "Wells Fargo & Co. is a diversified, community-based financial services company. It is engaged in the provision of banking, insurance, investments, mortgage, and consumer and commercial finance. It firm operates through the following segments: Community Banking, Wholesale Banking, Wealth & Investment Management, and Other.",
      link: "https://play.google.com/store/apps/details?id=com.wf.wellsfargomobile&hl=en_US",
    },
    calorie: {
      title: "Calorie Counter App",
      tag: "calorie counter app",
      detail:
        "Fooducate is designed to help you lose weight and keep it off. Fooducate also helps you find and understand which foods are healthiest, with detailed and up-to-date nutrition and ingredient information. With Fooducate, you can track your calories, macros, and workouts, plus get motivated, share diet tips and recipes with a community of health and wellness enthusiasts. Download the app & start your journey today!",
      link: "https://play.google.com/store/apps/details?id=com.fooducate.nutritionapp&hl=en&gl=US",
    },
    bodi: {
      title: "BODi Events",
      tag: "BODi events",
      detail:
        "The BODi Events App is your one-stop shop! Simply download the app for instant access to all of your favorite BODi events like Coach Summit, Leadership Retreat, Success Club Trips and more! Make sure to allow notifications so we can alert you when new events are available.",
      link: "https://play.google.com/store/apps/details?id=com.bodi.events&hl=en_US",
    },
    solitaire: {
      title: "Solitaire",
      tag: "solitaire",
      detail:
        "This brand new fully featured Solitaire is the best card game you will ever play! From the amazing Live Backgrounds and Daily Challenges to the classic intuitive gameplay, we promise the most robust and satisfying Solitaire experience you will find anywhere. Relax with a game at home, during your busy commute to work, or on the plane. Unlimited winning deals ensure you will never run out of interesting games to exercise your brain. The best part is that it is free to play.",
      link: "https://play.google.com/store/apps/details?id=com.bananaandco.solitaire&hl=en_US",
    },
    t_mobile_life: {
      title: "T Life (T-Mobile Tuesdays)",
      tag: "T Life (T-Mobile Tuesdays)",
      detail:
        "T-Mobile Tuesdays: Get free stuff and exclusive perks, just for being a customer. Now with even more thankings every Tuesday. Score deals every Tuesday from popular brands for food, fashion, entertainment, and essentials. Enjoy weekly savings on fuel and earn cash back on dining. Save on hotels, car rentals, and amusement parks. Enter for a chance to win epic prizes.",
        link: "https://play.google.com/store/apps/details?id=com.tmobile.tuesdays&hl=en&gl=US",
    },
  };

  // var modalText = {
  //   africoin: {
  //     title: 'Africoin',
  //     tag: 'Africoin',
  //     detail: 'Africoin is an e-commerce platform providing electronic voucher solution using a crypto token for between manufacturers and retailers and customers. ',
  //     link: '#'
  //   },
  //   blocktoken: {
  //     title: 'Blocktoken',
  //     tag: 'Blocktoken',
  //     detail: 'Blocktoken is a smart contract and token platform, fully white-labeled that user can easily create/manage/deploy ERC20 token onto mainnet/testnet with user interface quickly',
  //   },
  //   peatio: {
  //     title: 'Peatio',
  //     tag: 'Peatio',
  //     detail: 'Peatio is an open-source cryptocurrency exchange trading platform built with Ruby on Rails + Coffeescript',
  //     link: 'https://www.chulwonexchange.com/'
  //   },
  //   elmhurst: {
  //     title: 'Elmhurst',
  //     tag: 'Elmhurst',
  //     detail: 'Elmhurst is a bank platform that provides financial services exclusively to nonprofits and their affiliates. ',
  //     link: 'https://elmhur.st/'
  //   },
  //   papermache: {
  //     title: 'Papermache',
  //     tag: 'Papermache',
  //     detail: 'Papermache is a network of community platform that user can easily get feedback from the commnity',
  //     link: 'https://papermache.fyi/'
  //   },
  //   shivyog: {
  //     title: 'Shivyog',
  //     tag: 'Shivyog',
  //     detail: 'Upgraded to v2 for better UI/UX with a map-based ui, the stack is Ruby on Rails + VueJS',
  //     link: 'https://shivyog.com/'
  //   },
  //   stillpointspaces: {
  //     title: 'Stillpointspaces',
  //     tag: 'Stillpointspaces',
  //     detail: 'A Invoice Management Platform, the stack was Ruby on Rails for the backend, I\'ve built new invoice platform with NodeJS/Express + React and built Restful API with RoR Grape to connect with nodejs',
  //     link: 'https://www.stillpointspaces.com/'
  //   },
  //   vertex: {
  //     title: 'Vertex',
  //     tag: 'Vertex',
  //     detail: 'An Asset Management Platform, which user is able to easily search pdf files with their content on their mobile. Dashboard + Mobile App, the stack was Ruby on Rails for the backend, the frontend was Angular + JQuery',
  //   }
  // };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      console.log("index", index);
      $(this).css({
        background:
          "url('imgs/slides/" +
          id +
          "-" +
          (index + 1) +
          ".jpg') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
