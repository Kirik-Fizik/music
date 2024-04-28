let index = 0;
let headerItems = document.querySelectorAll('.header__item');
for (let [index, i] of headerItems.entries()) {
    index = index;
    i.addEventListener('click', (e) => {
        e.target.style.borderBottom = '2px solid red';
        document.querySelector('.name').textContent = autors[index].name;
        document.querySelector('.amount').textContent = autors[index].amount;
        document.querySelector('.profile__image').src = autors[index].photo;
        for (let [ind, k] of document.querySelectorAll('.title').entries()) {
            k.textContent = autors[index].clips[ind].title;
        }
        for (let [ind, k] of document.querySelectorAll('audio').entries()) {
            k.src = autors[index].clips[ind].src;
        }
        for (let j of headerItems) {
            if (j != e.target) {
                j.style.borderBottom = 'none';
            }
        }
    })
}

autors = [
    {
        name: '6ix9ine',
        amount: '340 080 слушателей за месяц',
        photo: '6ix9ine.png',
        clips: [
            {
                title: 'BILLY',
                src: 'billy.mp3',
            },
            {
                title: 'TATI',
                src: 'tati.mp3',
            },
            {
                title: 'RONDO',
                src: 'rondo.mp3',
            }
        ]
    },
    {
        name: 'Russ Millions',
        amount: '80 001 слушателей за месяц',
        photo: 'russmillions.png',
        clips: [
            {
                title: '6:30',
                src: '630.mp3',
            },
            {
                title: 'One Man',
                src: 'oneman.mp3',
            },
            {
                title: 'International',
                src: 'international.mp3',
            }
        ]
    },
    {
        name: 'Tion Wayne',
        amount: '73 487 слушателей за месяц',
        photo: 'tion.png',
        clips: [
            {
                title: 'WOW',
                src: 'wow.mp3',
            },
            {
                title: 'BODY',
                src: 'body.mp3',
            },
            {
                title: 'WID IT',
                src: 'widit.mp3',
            }
        ]
    },
    {
        name: 'Wiz Khalifa',
        amount: '1 414 950 слушателей за месяц',
        photo: 'wiz.png',
        clips: [
            {
                title: 'Ordinary Life',
                src: 'ordinarylife.mp3',
            },
            {
                title: "Smokin' on",
                src: 'smokinon.mp3',
            },
            {
                title: 'Contact',
                src: 'contact.mp3',
            }
        ]
    }
]