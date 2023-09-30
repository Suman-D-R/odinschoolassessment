import "../componentscss/Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <img src="https://www.odinschool.com/hubfs/OdinSchool_V3/icons/Odinschool_v3_logo.svg" />
         <nav>
          <ul>
            <li>Bootcamps</li>
            <li>Success Stories</li>
            <li>Entrprice</li>
          </ul>
         </nav>
         <div className="sign">
          <a href="#home">Sign in</a>
        </div>
      </div>
    </>
  );
}

export default Header;
