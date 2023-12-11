const backgrounds = [
    {
      min: 4,
      max: 10,
      src: "/images/morning.jpg",
      greeting: "God morgen 😴"
    },
    {
      min: 11,
      max: 13,
      src: "/images/noon.jpg",
      greeting: "Lunsjtid 😊"
    },
    {
        min: 14,
        max: 15,
        src: "/images/day.jpg",
        greeting: "God dag 😊"
    },
    {
      min: 16,
      max: 17,
      src: "/images/afternoon.jpg",
      greeting: "God ettermiddag"
    },
    {
      min: 18,
      max: 21,
      src: "/images/evening.jpg",
      greeting: "Good kveld"
    },
    {
      min: 22,
      max: 24,
      src: "/images/night.jpg",
      greeting: "God natt"
    }
  ];
  
  const backgroundEl = document.getElementById("background");
  const greetingEl = document.getElementById("greeting");
  
  const getCurrentHour = () => {
    const currentDate = new Date();
    return currentDate.getHours();
  };
  
  const setBackground = () => {
    const currentHour = getCurrentHour();
  
    const currentBackground = backgrounds.find((background) =>
      background.min <= currentHour && background.max > currentHour
    );
  
    backgroundEl.style.backgroundImage = `url(${currentBackground.src})`;
    greetingEl.innerHTML = currentBackground.greeting;
  };
  
  window.addEventListener("load", () => {
    setBackground();
  
    const everyHour = 1000 * 60 * 60;
    setInterval(setBackground, everyHour);
  });


// Tidligere prøvd kode som ikke fungerte
// $current_hour = intval( date('H') );
// switch( $current_hour ) {
// case ( $current_hour >= 6 && $current_hour < 10 ):
// $class = "morning";
// break;

// case ( $current_hour >= 10 && $current_hour < 17 ):
// $class = "noon";
// break;

// case ( $current_hour >= 17 && $current_hour < 19 ):
// $class = "evening";
// break;

// case ( $current_hour >= 3 && $current_hour < 22 ):
// $class = "night";
// break;

// default:
// $class = "night";
// break;
// }



// {
//   min: 0,
//   max: 3,
//   src: "/images/night.jpg",
//   greeting: "God natt"
// }