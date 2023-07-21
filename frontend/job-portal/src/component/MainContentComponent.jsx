import './css/Color.css'
import job from '../job-search.jpg'
function MainContentComponent() {
    return (
        <>
            <div className="container-fluid">
                <div className='row align-items-center'>
                    <div className="col col-md-5">
                        <p className="display-6 custom-color-text px-4">Discover your dream job with our comprehensive job search portal.</p>
                    </div>
                    <div className='col col-md-7'>
                        <img src={job} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContentComponent;