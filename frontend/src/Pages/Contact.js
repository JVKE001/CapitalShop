import Layout from "../Components/Layout/Layout";

function Contact() {
  return (
    <Layout title="Contact Us - Get in Touch">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4 text-center">Get in Touch</h2>
            <p className="text-center mb-5">
              We'd love to hear from you! Whether you have a question about our
              products, need assistance, or just want to say hello — feel free
              to reach out.
            </p>
            <p className="text-center mb-5">
              It's not working right now, but I can fix it and make it work
              seamlessly for your company.
            </p>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
