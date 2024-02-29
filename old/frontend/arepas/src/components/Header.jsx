import Logo from "/src/assets/cumbia.png";



function Header() {
    return (

        <header className="flex h-20 bg-[#F0C808] px-5 items-center justify-between border-b-2 border-[#F0C808] shadow-md shadow-black">

            <img src={ Logo } alt="Arepa Mendez Logo" className="h-full" />

            <div className="font-[slackey] text-[#a40e4c6d] text-2xl text-right">
                Arepa Mendez
            </div>

        </header>


    );

}



export default Header;