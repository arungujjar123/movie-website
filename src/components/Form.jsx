import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventdefault();
    alert("your form has been submitted " + name + "" + email + "" + password);
  };

  return (
    <div>
      <form onSubmit={handlesubmit} action="">
        <div>
          Name:-{" "}
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
          />
          <h4>{name}</h4>
        </div>
        <div>
          Email:-{" "}
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />
          <h4>{email}</h4>
        </div>
        <div>
          Password:-{" "}
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
          <h4>{password}</h4>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
