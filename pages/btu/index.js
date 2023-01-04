import { useRouter } from "next/router";


let Home = () => {
    
    const router = useRouter();

    const paper =()=>{
        router.push('btu/paper')
    }


  return (
    <>
      <nav>
        Btu
        <span>Previous</span>
        paper
      </nav>

      <main>
        <div className="one">
         
            <select name="" id="">
                <option value="">Select Course</option>
              <option value="">B.Tech</option>pt
              <option value="">M.Tech</option>pt
              <option value="">C.Tech</option>pt
              <option value="">A.Tech</option>pt
            </select>

            <select name="" id="">
            <option value="">Select Branch</option>

              <option value="">Cse</option>
              <option value="">Cse</option>
              <option value="">Cse</option>
              <option value="">Cse</option>
            </select>
            <select name="" id="">
              <option value="">Select Semester</option>
              <option value="">Semester2</option>
              <option value="">Semester3</option>
              <option value="">Semester5</option>
              <option value="">Semester4</option>
              <option value="">Semester6</option>
              <option value="">Semester7</option>
              <option value="">Semester8</option>
            </select>
              <button type="reset">Reset</button>
              <button onClick={paper} type='submit'> click me</button>
              
         
        </div>
        {/* <div className="two">advertise ment</div> */}
      </main>

   
      <footer>
        <div className="first">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Btu.com</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
