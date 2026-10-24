import { site } from "../config.js";

export default function Privacy() {
  return (
    <div className="page">
      <div className="container narrow prose">
        <h1>Privacy</h1>
        <p className="lead">Alfa Shop asks you for nothing. There are no accounts, forms, cookies or tracking.</p>

        <h2>Ordering</h2>
        <p>
          When you tap Order on WhatsApp, WhatsApp opens with a message we've written for you. Nothing is sent until you
          send it. The message, your WhatsApp name and your number then reach {site.parent.name}, and we use them to
          handle your order and answer your questions.
        </p>
        <p>WhatsApp's own privacy policy covers how WhatsApp handles the messages it carries.</p>

        <h2>This website</h2>
        <p>
          The site is a set of pages hosted by Netlify. Like any web host, Netlify keeps short-lived server logs (such
          as IP addresses) to run and protect the service. We don't add analytics or advertising tools.
        </p>

        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> or message us on WhatsApp on {site.phone}.
        </p>
      </div>
    </div>
  );
}
