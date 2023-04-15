import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <span className="catTitle">Contact</span>
      <div className="contactDetailsWrap">
        <div className="contactDetailsFields">
          <div>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your E-mail" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="47"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button>Send</button>
        </div>
        <div className="contactInfo">
          <span>Address</span>
          <p>140,City Center,New York, U.S.A</p>
          <span>Phone</span>
          <p>+0718-111-0011</p>
          <span>Email</span>
          <p>Joyce@company.com</p>
        </div>
      </div>
    </div>
  );
}
