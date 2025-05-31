import error from './icons8_error_1.svg'
function Error() {
    return ( 
        <section className="container m-auto flex justify-center items-center h-screen  flex-col">
            <img src={error} alt="" />

            <div>
                <h2 className='text-[34px] text-center'>Sorry, to view the site content, the screen must be 992px or larger.</h2>
            </div>
        </section>

     );
}

export default Error;