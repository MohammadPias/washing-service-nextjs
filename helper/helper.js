
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