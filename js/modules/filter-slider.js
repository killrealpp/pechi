export function filterSlider(){

    const swiper01 = new Swiper('.swiper-filter1', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        loop: true,

        breakpoints:{
            481:{
                slidesPerView: 3.5
            },
            835:{
                slidesPerView: 4.5
            }
        }
    })

}



export function filter() {
    const list = document.querySelector('.popular-list')
    const items = document.querySelectorAll('.blocks__item')
    const listItems = document.querySelectorAll('.popular-list__item')

    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('popular-list__item')){
            listItems.forEach(listItem =>{
            listItem.classList.remove('active-slider')
            })
            target.classList.add('active-slider')
        }

       


        switch (targetId) {
            case 'pech':
                getItems(targetId)
                break

            case 'pech-kam':
                getItems(targetId)
                break

            case 'topki':
                getItems(targetId)
                break

            case 'pech-ban':
                getItems(targetId)
                break

            case 'el-kam':
                getItems(targetId)
                break
        }

    })


    function getItems(className) {
        items.forEach(item => {
            if (item.classList.contains(className)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

}


