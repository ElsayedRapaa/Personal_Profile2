let the_Navebar = document.querySelector('.navbar'),
    the_Menu = document.querySelector('.menu'),
    the_Btn_Bar = document.querySelector('.menu-btn'),
    the_Up = document.querySelector('.up');

the_Btn_Bar.onclick = function() {

    if (the_Menu.classList.contains('menu')) {
        the_Menu.classList.toggle('active');
        the_Btn_Bar.style.color = '#FFF'
        let the_Icon = the_Btn_Bar.firstElementChild;
        the_Icon.classList.toggle('active');
    }

    let the_Item_Meu = Array.from(document.querySelectorAll('.menu li a'));

    the_Item_Meu.forEach((ele) => {

        ele.addEventListener('click', function() {

            the_Menu.classList.remove('active');

            let the_Icon = the_Btn_Bar.firstElementChild;

            the_Icon.classList.remove('active');

        })

    })
}

window.onload = function() {
    the_Up.style.right = '-100px';
};


window.onscroll = function() {

    if (window.scrollY > '20') {

        the_Navebar.classList.add('stricy');
    } else {

        the_Navebar.classList.remove('stricy');
    }

    if (window.scrollY > '200') {

        the_Up.style.right = '10px';

    } else {

        the_Up.style.right = '-100px';

    };
}


the_Up.onclick = function() {

    window.scrollTo(0, 0);

}

// let the_Slider = document.querySelector('.team-content'),
//     the_Inner_Slider = document.querySelector('.the-content'),
//     the_Box = document.querySelector('.the-content .box'),
//     the_Card = document.querySelector('.box .card'),
//     the_Img = document.querySelector('.card img'),
//     pressed = false,
//     startX,
//     x;

// the_Slider.addEventListener('mouseover', () => {

//     the_Box.style.hover = the_Card.style.cursor = 'default'
//     the_Box.style.hover = the_Card.style.backgroundColor = 'crimson'
//     the_Box.style.hover = the_Card.style.transform = 'scale(1.1, 1.1)';
//     the_Box.style.hover = the_Img.style.borderColor = '#FFF';

// });

// the_Slider.addEventListener('mouseleave', () => {

//     the_Box.style.hover = the_Card.style.backgroundColor = '#333';
//     the_Box.style.hover = the_Card.style.transform = 'scale(1, 1)';
//     the_Box.style.hover = the_Img.style.borderColor = 'crimson';

// });

// the_Slider.addEventListener('mousedown', (e) => {

//     pressed = true;
//     startX = e.offsetX - the_Inner_Slider.offsetLeft;
//     the_Slider.style.cursor = 'grabbing';

// });

// the_Slider.addEventListener('mouseenter', () => {

//     the_Slider.style.cursor = 'grab';
// });

// the_Slider.addEventListener('mouseup', () => {

//     the_Slider.style.cursor = 'grab';
// });

// window.addEventListener('mouseup', () => {

//     pressed = false;
// });

// the_Slider.addEventListener('mousemove', (e) => {

//     if (!pressed) return;

//     e.preventDefault();

//     x = e.offsetX;

//     the_Inner_Slider.style.left = `${x - startX}px`;

//     check_SLider();

// })

// function check_SLider() {

//     let the_Outer = the_Slider.getBoundingClientRect(),
//         the_Inner = the_Inner_Slider.getBoundingClientRect();

//     if (parseInt(the_Inner_Slider.style.left) > 0) {

//         the_Inner_Slider.style.left = '0px';
//     } else if (the_Inner.right < the_Outer.right) {

//         the_Inner_Slider.style.left = `~${the_Inner.width - the_Outer.width}px`;

//     };
// };

// check_SLider();

let the_Img = Array.from(document.querySelectorAll('.the-content .box')),
    the_Count = the_Img.length,
    the_Start = 1,
    the_Number = document.querySelector('.slide-number'),
    the_Slider = document.querySelector('.team-content');

// console.log(the_Count);



let the_Ul = document.createElement('ul');

the_Ul.setAttribute('id', 'list');

for (let i = 1; i <= the_Count; i++) {

    let the_Li = document.createElement('li');

    the_Li.setAttribute('data-list', i);

    the_Li.appendChild(document.createTextNode(i));

    the_Li.textContent = '';

    the_Ul.appendChild(the_Li);

};

the_Number.appendChild(the_Ul);

let the_Li_Array = Array.from(document.querySelectorAll('#list li'));

for (let i = 0; i < the_Li_Array.length; i++) {

    the_Li_Array[i].onclick = function() {

        the_Start = parseInt(this.getAttribute('data-list'));

        checker();

    };

};

// console.log(the_Li_Array);

checker()

function checker() {

    let the_Time = setInterval(() => {

        let the_Random = Math.floor(Math.random() * the_Img.length);

        removeClass();
        the_Img[the_Random].classList.add('active');
        the_Li_Array[the_Random].classList.add('active');

        the_Li_Array.forEach((ele) => {

            ele.addEventListener('click', (e) => {

                if (e.target) {

                    clearInterval(the_Time);

                };



            })

        })



    }, 2000);

    // the_Slider.addEventListener('mouseover', () => {

    //     clearInterval(the_Time);

    // })


    // the_Slider.addEventListener('mouseleave', () => {

    //     let the_Time = setInterval(() => {

    //         let the_Random = Math.floor(Math.random() * the_Img.length);

    //         removeClass();
    //         the_Img[the_Random].classList.add('active');
    //         the_Li_Array[the_Random].classList.add('active');

    //     }, 2000);

    // })


    removeClass();

    the_Img[the_Start - 1].classList.add('active');

    the_Ul.children[the_Start - 1].classList.add('active');


}

function removeClass() {

    the_Img.forEach((img) => {

        img.classList.remove('active');

    });

    the_Li_Array.forEach((ele) => {

        ele.classList.remove('active');

    });

};

// let the_Slider = document.querySelector('.team-content'),
//     the_Team = document.querySelector('.the-Content'),
//     the_Box = document.querySelector('.box'),
//     the_Card = document.querySelector('.box .card'),
//     the_Img_Team = document.querySelector('.card img');

// the_Slider.addEventListener('mouseover', () => {

//     // the_Box.style.hover = the_Card.style.cursor = 'default';
//     the_Box.style.hover = the_Card.style.backgroundColor = 'crimson';
//     the_Box.style.hover = the_Card.style.transition = 'all 300ms ease';
//     the_Box.style.hover = the_Card.style.transform = 'scale(1.1, 1.1)';
//     the_Box.style.hover = the_Img_Team.style.borderColor = '#FFF';

// });

// the_Slider.addEventListener('mouseleave', () => {

//     the_Box.style.hover = the_Card.style.backgroundColor = '#333';
//     the_Box.style.hover = the_Card.style.transform = 'scale(1, 1)';
//     the_Box.style.hover = the_Img_Team.style.borderColor = 'crimson';

// });

let the_Text_One = document.querySelector('.home-content .text3 span');

const typeWrite = function(txtElement, word, wait = '3000') {
    this.txtElement = txtElement;
    this.word = word;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
};

typeWrite.prototype.type = function() {

    const current = this.wordIndex % this.word.length;

    const fullTxt = this.word[current];

    if (this.isDeleting) {

        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {

        this.txt = fullTxt.substring(0, this.txt.length + 1);

    };

    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {

        typeSpeed /= 2;

    };

    if (!this.isDeleting && this.txt === fullTxt) {

        typeSpeed = this.wait;

        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {

        this.isDeleting = false;

        this.wordIndex++;

        typeSpeed = 500;


    };

    setTimeout(() => this.type(), typeSpeed);


}

document.addEventListener('DOMContentLoaded', Init);

function Init() {

    const txtElement = document.querySelector('.txt-type');
    const word = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-wait');

    new typeWrite(txtElement, word, wait);

};



const typeWrite2 = function(txtElement, word, wait = '3000') {
    this.txtElement = txtElement;
    this.word = word;
    this.wait = wait;
    this.wordIndex = 0;
    this.txt = '';
    this.type();
    this.isDeleting = false;
}

typeWrite2.prototype.type = function() {

    const current = this.wordIndex % this.word.length;

    const fullTxt = this.word[current];

    if (this.isDeleting) {

        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {

        this.txt = fullTxt.substring(0, this.txt.length + 1);

    }

    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {

        typeSpeed /= 2;

    };

    if (!this.isDeleting && this.txt === fullTxt) {

        typeSpeed = this.wait;

        this.isDeleting = true

    } else if (this.isDeleting && this.txt === '') {

        this.isDeleting = false;

        this.wordIndex++;

        typeSpeed = 500;

    };

    // console.log(this.txt);

    setTimeout(() => this.type(), typeSpeed);
}


document.addEventListener('DOMContentLoaded', Init2);

function Init2() {
    const txtElement = document.querySelector('.txt-type2');
    const word = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-wait');

    new typeWrite2(txtElement, word, wait);
}