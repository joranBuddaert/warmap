function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 2024;
    let intervalId;

    function updateCounter(){
        if (currentValue === 1940){
            return;
        }
    
        currentValue -= Math.floor(Math.random() * 10) + 1;

        if (currentValue < 1940){
            currentValue = 1940;
        }

        counterElement.textContent = currentValue;
    }

    function completeCounter(){
        clearInterval(intervalId);
        counterElement.textContent = 1940;
        gsap.to(".counter", 0.25, {
            opacity: 0,
        });

        gsap.to(".overlay", 1.5, {
            height: 0,
            ease: "power4.inOut",
        });

        gsap.to(".counter",2,{
            height: 0,
            ease: "power4.inOut",
        });

        gsap.to(".counter",2,{
            display: "none",
        });
    }

    intervalId = setInterval(updateCounter, Math.floor(Math.random() * 200) + 50);

    return {
        completeCounter: completeCounter
    };
}

const loader = startLoader();

window.completeLoader = loader.completeCounter;