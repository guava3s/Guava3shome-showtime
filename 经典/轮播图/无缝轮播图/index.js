(function () {
    const imgInfoList = [
        {src: '../../../assets/image/yueshen(1).jpg'},
        {src: '../../../assets/image/yueshen(2).jpg'},
        {src: '../../../assets/image/yueshen(3).jpg'},
        {src: '../../../assets/image/yueshen(4).jpg'}
    ]
    const container = document.querySelector('.container')
    const ul = document.querySelector('ul')
    const img = document.querySelector('img')
    ul.children[0].className = 'lightenLi'

    let currentIndex = 0

    function startCarousel() {
        if (++currentIndex > imgInfoList.length - 1) {
            currentIndex = 0
        }
        setView()
    }

    function setView() {
        img.src = imgInfoList[currentIndex].src
        for (let i = 0; i < ul.children.length; i++) {
            if (i === currentIndex) {
                ul.children[i].className = 'lightenLi'
            } else {
                ul.children[i].className = ''
            }
        }
    }

    let timerId = setInterval(startCarousel, 2000)


    container.addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })
    container.addEventListener('mouseleave', function () {
        timerId = setInterval(startCarousel, 2000)
    })
    container.addEventListener('click', function (e) {
        let findIndex = Array.from(ul.children).findIndex(item => item === e.target);
        if (findIndex > -1) {
            currentIndex = findIndex
            setView()
        }
    })


})()