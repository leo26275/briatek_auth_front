const BRTKLogo = () => {
    const onGoToLandingPage = () => {
        console.log('link');
    };

    return (
        <div
            className="text-center text-3xl font-extrabold text-primary dark:text-white transition-colors duration-300 cursor-pointer"
            onClick={onGoToLandingPage}
        >
            Br<span className="text-custom-green">ia</span>tek
        </div>
    );
};

export default BRTKLogo;
