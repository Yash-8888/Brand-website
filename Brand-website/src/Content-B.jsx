function Content_B(){
    return(
        <div className="mx-auto flex items-center justify-around w-[80%]">
            <div className="div">
                <p className="text-[70px] font-bold leading-tight">
                YOUR FEET<br />DESERVE<br />THE BEST
            </p>
            <br />
            <p className="text-[13px] font-bold text-gray-500 leading-relaxed">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO 
                <br />
                HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
                THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
                SHOES.
            </p>
            <div className="flex gap-4 mt-8">
                <button 
                onClick={() => {
                    window.location.href = 'https://www.nike.com/in/w/red-shoes-3abn9zy7ok';
                }}
                className="text-[20px] font-bold text-white bg-red-500">Shop Now</button>
                <button className="text-[20px] text-gray-500 border font-bold">Catogory</button>
            </div>
            
            </div>
            <div className="size-130">
                <img src="/images/shoe_image.png" alt="" />
            </div>
            
        </div>
    )
}
export default Content_B