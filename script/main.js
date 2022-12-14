

const intersection = new IntersectionObserver((elements)=> {
        elements.forEach((element)=> {
            console.log(element);
            if (element.isIntersecting) {
                element.target.classList.add('show');
            } else {
                element.target.classList.remove('show');
            }

        });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => intersection.observe(element));

