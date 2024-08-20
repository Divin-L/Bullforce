import React from "react";

const SignUp = () => {
  return (
    <div className="signUp">
      <div>
        <h1>Diplomats Sign Up</h1>
        <form>
          <div className="inputSection">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="inputSection">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="multiInputBox">
            <div>
              <input type="text" placeholder="City"/>
            </div>
            <div>
              <input type="email" placeholder="Email"/>
            </div>
          </div>
          <div className="multiInputBox">
            <div>
              <input type="text" placeholder="Country"/>
            </div>
            <div>
              <input type="tel" placeholder="Phone No"/>
            </div>
          </div>
          <div className="inputSection">
            <input type="text" placeholder="Profession" />
          </div>
          <div className="inputSection">
            <input type="text" placeholder="Social Media Handle" />
          </div>
          <div className="submit-btn">
            <button >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
