import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-gray-400  p-16">
        <div className='flex flex-col  justify-center items-center text-center'>
            <div>
                <h2 className="text-white text-5xl font-bold">KeenKeeper</h2>
                <p className="mt-4 text-sm mb-4 ">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>
            <div>
                 <div className='flex flex-col justify-center items-center'>
                <h3 className="text-white font-semibold mb-3">Social Links</h3>
                <div className="flex gap-3 mt-2">
                    
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <img src={insta} alt="" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                    <img src={facebook} alt="" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                    <img src={twitter} alt="" />
                    </div>

                </div>
                </div>
            </div>
            
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-10 border-t border-gray-500 pt-6 flex flex-col       md:flex-row justify-between text-sm">
        
            <p >© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0 ">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
            </div>

      </div>
      
      

      

      
      
    </footer>
  );
};

export default Footer;