let imageItems = [...document.querySelectorAll('.img-wrap')]
let titles = [...document.querySelectorAll('h2')]
// console.log(imageItems)
// console.log(titles)

let options = {
    rootMargin: '0px',
    threshold: .2
}
let setItemActive = (entries => {
    console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
})

let observer = new IntersectionObserver(setItemActive, options)

imageItems.forEach((item, idx) => {
    item.children[0].style.backgroundImage = `url(./resources/${idx+1}.jpeg)`
    if(idx % 2 === 0){ // 첫번째 섹션의 사진은 오른쪽부터 시작 , 다음 섹션의 사진은 왼쪽에 배치
        item.style.left = `55%`
    }else{
        item.style.left = `5%`
    }
    observer.observe(item) // item 이 options 에 정의된 조건을 만족하면 setItemActive 함수를 실행함
})

titles.forEach((title, idx) => {
    if(idx % 2 === 0){ // 첫번째 섹션의 글자는 중간에서 살짝 오른쪽부터 시작 , 다음 섹션의 글자는 중간에서 살짝 왼쪽에 배치
        title.style.left = `45%`
    }else{
        title.style.left = `35%`
    }
    observer.observe(title)
})