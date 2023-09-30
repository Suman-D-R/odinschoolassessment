import '../componentscss/Home.css';

function Home(){
    return(<>
    <div className='home-container'>
        <div className='title'>
        <h1>Web Developer Course</h1><br></br>
        <p>A live bootcamp for front-end web and mobile development using ReactJS</p>
        <br></br>
        <div className='mn' >
        <div className="mini-container"><img src="https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_1.webp?width=105&height=105&name=USP_1.webp" /><b>Live instructor-led </b>bootcamp</div>
        <div className="mini-container"><img src="https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_2.webp?width=105&height=105&name=USP_2.webp" />Job readiness in<b> 6 months</b></div>
        <div className="mini-container"><img src="https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/Project%20-%20USP%20Home%20Page.webp?width=105&height=105&name=Project%20-%20USP%20Home%20Page.webp" /><b>Project-based </b>learning</div>
        <div className="mini-container"><img src="https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_3.webp?width=105&height=105&name=USP_3.webp" /><b>Unlimited</b> job opportunities</div>
        </div>
        </div>
        
        <div className='form-container'>
            <div className='form-box'>
            <form action="">
                <input className='input-1' type='text'></input>
                <input className='input-1' type='text'></input>
                <input className='input-1' type='text'></input>
                <select>country
                    <option>India</option>
                </select>
                <input className='input-1' type='text'></input>
                <input className='input-1' type='text'></input>
                <input className='input-1' type='text'></input><br></br>
                <button>Apply Now</button>
            </form>
            </div>
        </div>
    </div>
    </>)
}

export default Home;