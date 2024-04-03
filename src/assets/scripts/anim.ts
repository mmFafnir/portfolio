

// const animItems = document.querySelectorAll('.__anim-item') as NodeListOf<HTMLElement>;


export class Anim {
    animItems: NodeListOf<HTMLElement>;

    constructor(items:NodeListOf<HTMLElement>) {
        this.animItems = items;
        this.onScroll()
    }

    offset(el:HTMLElement) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    onScroll() {
        if(!this.animItems || this.animItems.length === 0) return
        //цикл 'for' наделяет объекты в массиве объектов переменными и определяет их текущий класс
        for (let index = 0; index < this.animItems.length; index++) {
            const animItem = this.animItems[index];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = this.offset(animItem).top;
            const animStart = 6;
    
            //создание точки анимации, при значении animStart = 4, точка анимации - при 1/10 высоты объекта
            let animItemPoint = window.innerHeight - animItemHight / animStart;
    
            //проверка, если анимированный объект выше высоты окна браузера
            if (animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            //Добавление или удаление класса '__active' объекту
            if ((window.scrollY > animItemOffset - animItemPoint)
            &&
            window.scrollY < (animItemOffset + animItemHight)) {
            animItem.classList.add('__active');
            } else {
            //доп условие: при отсутсвии класса-заглушки повтора анимации '__active' не будет снят
                if (!animItem.classList.contains('__no-repeat-anim')) {
                    animItem.classList.remove('__active');
                }
            }
        }
    }

    startScroll() {
        if(!this) return;
        this.onScroll()
    }


}