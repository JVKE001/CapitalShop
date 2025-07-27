import Layout from "../Components/Layout/Layout";
import AboutImage1 from "../assets/images/about-01.webp";
import AboutImage2 from "../assets/images/about-02.webp";

function About() {
  return (
    <Layout title="About Us - Best Deals & Offers">
      <div className="container py-5">
        <h2 className="text-center mb-5">About Our Company</h2>

        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={AboutImage1}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: "justify" }}>
              At our core, we’re dedicated to delivering the best products at
              unbeatable prices. Whether it’s daily essentials or hard-to-find
              gems, we ensure a smooth and trustworthy shopping experience. Our
              platform is built with care, quality, and customer satisfaction in
              mind.
            </p>
            <p style={{ textAlign: "justify" }}>
              From product curation to doorstep delivery, everything is designed
              to serve your needs. We believe in innovation, value, and creating
              a difference in every order you place.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              laboriosam incidunt dicta ut ea. Eaque quis rem, iusto
              perferendis, error voluptate repudiandae in incidunt ipsa,
              voluptas alias et beatae voluptatum nisi cum explicabo sint
              deserunt asperiores natus magni fugiat illum. Tempore veritatis,
              necessitatibus sapiente quis beatae, suscipit tenetur molestiae
              laboriosam ipsam unde error rem alias. Placeat eligendi aliquam,
              iure quaerat magnam natus labore molestiae obcaecati rem maiores
              architecto cum sed doloremque consectetur blanditiis excepturi eos
              recusandae voluptatibus harum tempore quidem saepe sit? Culpa
              assumenda ea natus sequi atque in qui consequatur, sed soluta
              quaerat laborum, nobis repellendus sapiente eum error laboriosam
              tenetur temporibus dolorem quod doloribus voluptatum animi? A,
              illum quis. Consequatur atque debitis cum id excepturi velit
              voluptate fugit perspiciatis earum totam similique quis laudantium
              exercitationem vitae illo mollitia, vero soluta deserunt nisi
              maiores aut dicta provident? Nisi quisquam nostrum cum dicta
              distinctio voluptas facere accusamus ducimus vero deleniti,
              molestiae at iste dignissimos, et architecto magni reprehenderit
              blanditiis est consectetur. Facere rem assumenda, tenetur eligendi
              sunt et deserunt? Labore doloribus reiciendis iure quae sed fugit,
              laudantium tempora aut doloremque quia maxime culpa nostrum
              dolores beatae suscipit aspernatur quo in ab? Quidem nobis maxime
              error, laborum voluptate in? Quia, dolores.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src={AboutImage2}
              alt="Our Vision"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: "justify" }}>
              Our vision is to become the most loved and trusted platform for
              online shopping. We aim to combine technology with empathy,
              serving people with not just products but with care and
              responsibility.
            </p>
            <p style={{ textAlign: "justify" }}>
              With a growing base of happy customers, we continue to improve and
              expand— offering more, delivering faster, and ensuring
              satisfaction at every touchpoint.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              laboriosam incidunt dicta ut ea. Eaque quis rem, iusto
              perferendis, error voluptate repudiandae in incidunt ipsa,
              voluptas alias et beatae voluptatum nisi cum explicabo sint
              deserunt asperiores natus magni fugiat illum. Tempore veritatis,
              necessitatibus sapiente quis beatae, suscipit tenetur molestiae
              laboriosam ipsam unde error rem alias. Placeat eligendi aliquam,
              iure quaerat magnam natus labore molestiae obcaecati rem maiores
              architecto cum sed doloremque consectetur blanditiis excepturi eos
              recusandae voluptatibus harum tempore quidem saepe sit? Culpa
              assumenda ea natus sequi atque in qui consequatur, sed soluta
              quaerat laborum, nobis repellendus sapiente eum error laboriosam
              tenetur temporibus dolorem quod doloribus voluptatum animi? A,
              illum quis. Consequatur atque debitis cum id excepturi velit
              voluptate fugit perspiciatis earum totam similique quis laudantium
              exercitationem vitae illo mollitia, vero soluta deserunt nisi
              maiores aut dicta provident? Nisi quisquam nostrum cum dicta
              distinctio voluptas facere accusamus ducimus vero deleniti,
              molestiae at iste dignissimos, et architecto magni reprehenderit
              blanditiis est consectetur. Facere rem assumenda, tenetur eligendi
              sunt et deserunt? Labore doloribus reiciendis iure quae sed fugit,
              laudantium tempora aut doloremque quia maxime culpa nostrum
              dolores beatae suscipit aspernatur quo in ab? Quidem nobis maxime
              error, laborum voluptate in? Quia, dolores.
            </p>
          </div>
        </div>

        {/* Section 3 - Additional Info */}
        <div className="row">
          <div className="col">
            <p style={{ textAlign: "justify" }}>
              We're more than just an online store. We’re a team of passionate
              individuals committed to changing how you shop. Every product
              listed is carefully selected, ensuring both quality and
              affordability.
              <br />
              <br />
              Our support team is always ready to assist you, and we take your
              feedback seriously to enhance our service continuously. Thank you
              for trusting us—we look forward to growing together with you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
