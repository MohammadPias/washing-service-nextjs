
export const getBgBanner = (url) => {
    return {
        backgroundImage: `url(${url.src})`,
        width: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        objectFit: 'cover',

    }
}

export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const bgLightStyle = {
    backgroundColor: "rgb(255, 255, 255)",
    backgroundImage: "radial-gradient(at 100% 0%, rgb(252, 231, 243) 0, transparent 60%), radial-gradient(at 0% 100%, rgb(203, 213, 225) 0, transparent 60%)",
}
export const bgDarkStyle = {
    backgroundColor: "rgb(15, 24, 42)",
    backgroundImage: "radial-gradient(at 100% 0%, rgb(20, 46, 89) 0, transparent 60%), radial-gradient(at 0% 100%, rgb(20, 46, 89) 0, transparent 60%)",
}