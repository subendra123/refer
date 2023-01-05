
import './App.css';
import 'remixicon/fonts/remixicon.css'
import Header from "./components/Header";


function App() {
  return (
   
      <>

     <Header />

    <main>
    <section>
    <div className="upper_text">
    <p>UI/UX <i class="ri-arrow-right-s-line"></i> refer & Earn <i class="ri-arrow-right-s-line"></i> Friends Referred</p>
    </div>

     <div className="refer_code_style flex">
       <div className="refer_code">
         <p>Your Referral Code</p>
         <a href="">EDCH54</a>
       </div>
       <div className="walet_balance">
         <p>Walet Balance</p>
         <p><a href=""><i class="ri-money-dollar-circle-fill"></i></a><span>500</span></p>
       </div>
     
     </div>

    </section>

    <section className='card_section'>
     <div className="section_title">
     <h2>Friends Who enrolled <span>(3)</span> </h2>
     </div>
      <div className="card_style grid  grid_3">
        <div className="card">
          <div className="card_header flex">
          <h4>Dhiraj Saxsena</h4>
          <p>14 sep, 2022</p>
          </div>
          <div className="cart_title">
            <p>Course Enrolled(6)</p>
          </div>
          <div className="card_inner_btn grid grid_3">
            <button>UI/UX</button>
            <button>sql</button>
            <button>html</button>
            <button>Python</button>
            <button>MERN</button>
            <button>java</button>
          </div>
          <div className="card_footer">
          <p>Referral Amount <span>185</span></p>
          </div>
      </div>

      <div className="card">
      <div className="card_header flex">
      <h4>Dhiraj Saxsena</h4>
      <p>14 sep, 2022</p>
      </div>
      <div className="cart_title">
        <p>Course Enrolled(6)</p>
      </div>
      <div className="card_inner_btn grid grid_3">
        <button>UI/UX</button>
        <button>sql</button>
        <button>html</button>
        <button>Python</button>
        <button>MERN</button>
        <button>java</button>
      </div>
      <div className="card_footer">
      <p>Referral Amount <span>185</span></p>
      </div>

    </div>

    <div className="card">
    <div className="card_header flex">
    <h4>Dhiraj Saxsena</h4>
    <p>14 sep, 2022</p>
    </div>
    <div className="cart_title">
      <p>Course Enrolled(6)</p>
    </div>
    <div className="card_inner_btn grid grid_3">
      <button>UI/UX</button>
      <button>sql</button>
      <button>html</button>
      <button>Python</button>
      <button>MERN</button>
      <button>java</button>
    </div>
    <div className="card_footer">
    <p>Referral Amount <span>185</span></p>
    </div>

  </div>
  <div className="card">
  <div className="card_header flex">
  <h4>Dhiraj Saxsena</h4>
  <p>14 sep, 2022</p>
  </div>
  <div className="cart_title">
    <p>Course Enrolled(6)</p>
  </div>
  <div className="card_inner_btn grid grid_3">
    <button>UI/UX</button>
    <button>sql</button>
    <button>html</button>
    <button>Python</button>
    <button>MERN</button>
    <button>java</button>
  </div>
  <div className="card_footer">
  <p>Referral Amount <span>185</span></p>
  </div>

</div>
<div className="card">
<div className="card_header flex">
<h4>Dhiraj Saxsena</h4>
<p>14 sep, 2022</p>
</div>
<div className="cart_title">
  <p>Course Enrolled(6)</p>
</div>
<div className="card_inner_btn grid grid_3">
  <button>UI/UX</button>
  <button>sql</button>
  <button>html</button>
  <button>Python</button>
  <button>MERN</button>
  <button>java</button>
</div>
<div className="card_footer">
<p>Referral Amount <span>185</span></p>
</div>

</div>
 </div>
 <div className="section_footer">
 <p>Term & Conditions</p>
 </div>
 
    </section>

    
    </main>

  
     </>
  );
}

export default App;
