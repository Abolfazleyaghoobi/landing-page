import img5 from '../../assets/img/img5.png'
function Footer() {
  return (
    <>
      <section className='bg-linear-[var(--color-gradient-header)] 
dark:bg-linear-[var(--color-gradient-header-darkMode)] my-12 xxl:h-126 xl:h-110 lg:h-95 rounded-[12px]'>

        <div className='flex'>
          <div className='w-1/2 p-12 '>
            <h1 className='text-[30px]'>Subscribe Our Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est nesciunt facilis quos, ducimus assumenda architecto expedita nemo autem rem velit et eos debitis voluptatibus, perspiciatis possimus incidunt esse eum.
            </p>
            <div className="mt-20 rounded-full overflow-hidden bg-white w-[360px] flex relative">
          
              <input
                className="bg-white p-3 w-[69%] focus:none outline-none"
                type="email"
                name=""
                id=""
              />
              <div className="bg-black text-white rounded-full absolute  right-[0px] xl:top-[0px] lg:top-[0px]">
                <button className="  p-3">Get a Quote</button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className='relative xxl:h-126 w-1/2  xl:h-110  lg:h-90'>
            <img className='absolute  top-0 '  src={img5} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
