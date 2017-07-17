
$(document).ready(function(){

  /** scroll **/
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    var navHeader = document.getElementById("nav--header");
      if (currentScroll >= 150) {
        navHeader.classList.add("bg-dark");
      } else {
        navHeader.classList.remove("bg-dark");
      }
  }, false);

});

$('.carousel').carousel({
  interval: 3000,
  pause: null
});


function ChangePhrase(prefijo, array, padre) {

  var prefix = prefijo;
  var skills = array.map(function (s) {
    return s + '...';
  });
  var delay = 7;
  var step = 1;
  var tail = 7;
  var timeout = 77;


  var skillPhare = $(padre);
  var pSkills = document.createElement('p');
  skillPhare.append(pSkills);

  var colors = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)",
    "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)",
    "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)",];

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function randomChar() {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
  }

  function randomColorString(n) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var char = document.createElement('span');
      char.textContent = randomChar();
      char.style.color = randomColor();
      fragment.appendChild(char);
    }
    return fragment;
  }

  var state = {
    text: '',
    prefixP: -tail,
    skillI: 0,
    skillP: 0,
    direction: 'forward',
    delay,
    step
  };

  function render() {
    var skill = skills[state.skillI];

    if (state.step) {
      state.step--;
    } else {
      state.step = step;
      if (state.prefixP < prefix.length) {
        if (state.prefixP >= 0) {
          state.text += prefix[state.prefixP];
        }
        state.prefixP++;
      } else {
        if (state.direction === 'forward') {
          if (state.skillP < skill.length) {
            state.text += skill[state.skillP];
            state.skillP++;
          } else {
            if (state.delay) {
              state.delay--;
            } else {
              state.direction = 'backward';
              state.delay = delay;
            }
          }
        } else {
          if (state.skillP > 0) {
            state.text = state.text.slice(0, -1);
            state.skillP--;
          } else {
            state.skillI = (state.skillI + 1) % skills.length;
            state.direction = 'forward';
          }
        }
      }
    }

    pSkills.textContent = state.text;
    pSkills.append(randomColorString(
      state.prefixP < prefix.length ?
        Math.min(tail, tail + state.prefixP) :
        Math.min(tail, skill.length - state.skillP)));
    setTimeout(render, timeout);
  }

  setTimeout(render, 500);
}
var loveIt = ['Tecnología 💻 ','Música ♫ ', 'Cine 🎥 '];
var skillTec = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'GitHub', 'Bootstrap', 'Materialize', 'Gulp', 'passion & love'];
ChangePhrase('Yo ♥ ',loveIt, '#skill-phrase');
