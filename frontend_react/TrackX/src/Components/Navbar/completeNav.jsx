import { MobileNav, Navbar } from "..";

const completeNav = () => {
    return ( 
        <>
        <div className="block lg:hidden">
            <MobileNav/>     
        </div>
        <div className="hidden lg:block">
            <Navbar/>
        </div>  
        </>
     );
}
 
export default completeNav;