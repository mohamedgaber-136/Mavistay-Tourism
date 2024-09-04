export default function Preloader() {
    return (
        <>

            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="" className="letters-loading">
                            M
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            V
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            T
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="" className="letters-loading">
                            Y
                        </span>
                      
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
