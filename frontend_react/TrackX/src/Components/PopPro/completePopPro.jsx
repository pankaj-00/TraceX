  
import  { MobilePopPro,PopPro } from ".."

const completePopPro = () => {

    return ( 
        <>
            <div className="inline md:hidden">
                <MobilePopPro/>
            </div>
            <div className="hidden lg:block ">
                <PopPro/>
            </div>
        </>
     );
}
 
export default completePopPro;