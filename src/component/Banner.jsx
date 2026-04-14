import addImg from "../assets/Plus.png"
const Banner = () => {
    return(
        <>
            <div className="container mx-auto w-[80%] mt-20 mb-20">
                <div className="space-y-6 text-center">
                    <h2 className="font-bold text-5xl text-[#1F2937]">Friends to keep close in your life</h2>
                    <p className="font-normal text-[16px] text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                    <button className="btn bg-[#244D3F] text-white border-[#244D3F]">
                       <img src={addImg} alt="" /> Add a Friend
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    <div className="card  bg-base-100 shadow-sm  p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">10</h2>
                            <p className="text-[#64748B] text-[18px]">Total Freiends</p>
                            
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-sm  p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">3</h2>
                            <p className="text-[#64748B] text-[18px]">On Track</p>
                            
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-sm  p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">6</h2>
                            <p className="text-[#64748B] text-[18px]">Need Attention</p>
                            
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-sm  p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">12</h2>
                            <p className="text-[#64748B] text-[18px]">Interactions This Month</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner