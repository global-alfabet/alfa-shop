import { site } from "../config.js";
import { openCookieSettings } from "../lib/consent.js";

export default function Privacy() {
  return (
    <div className="page">
      <div className="container narrow prose">
        <h1>Privacy</h1>
        <p className="lead">
          Alfa Shop asks you for nothing. There are no accounts or forms
          {site.analytics.ga4 ? ", and analytics cookies are set only if you accept." : ", and no cookies or tracking."}
        </p>

        <h2>Ordering</h2>
        <p>
          When you tap Order now, WhatsApp opens with a message we've written for you. Nothing is sent until you
          send it. The message, your WhatsApp name and your number then reach {site.parent.name}, and we use them to
          handle your order and answer your questions.
        </p>
        <p>WhatsApp's own privacy policy covers how WhatsApp handles the messages it carries.</p>

        <h2>This website</h2>
        <p>
          The site is a set of pages hosted by Netlify. Like any web host, Netlify keeps short-lived server logs (such
          as IP addresses) to run and protect the service. We don't add advertising tools.
        </p>

        <h2 id="cookies">Cookies and analytics</h2>
        {site.analytics.ga4 ? (
          <>
            <p>
              We use Google Analytics to count visits and see which pages help people, but only if you press Accept on
              the cookie banner. Until then Google's code isn't loaded and no analytics cookies are set.
            </p>
            <ul>
              <li>
                <b>ga_consent</b> remembers your answer (Accept or Reject). It's needed for the banner to work, so it's
                set either way. It lasts 6 months, then we ask again. It's set for globalalfabet.com, so one answer
                covers all Global Alfabet sites, including Alfa Maps and Alfa Finda.
              </li>
              <li>
                <b>_ga</b> and <b>_ga_&lt;ID&gt;</b> are Google Analytics cookies. They tell visits apart so they can be
                counted. They're set only after you accept, and last up to 13 months.
              </li>
            </ul>
            <p>
              <b>What's measured:</b> the pages and items you open, how you arrived (for example from a search engine or
              a link), your approximate region (worked out from your IP address, which Google Analytics doesn't store),
              your type of device and browser, and taps on our order, email and WhatsApp links. We never send Google
              your name, email, phone number or what's in your order message. Google signals and advertising features
              are off.
            </p>
            <p>
              Google processes this data for us as our processor, under its data processing terms, and may process it
              outside your country. We keep the reports for no longer than 14 months.
            </p>
            <p>
              <b>Changing your mind:</b> choose{" "}
              <button type="button" className="inline-link" onClick={openCookieSettings}>
                Cookie settings
              </button>{" "}
              (also at the bottom of every page). If you reject after accepting, we stop measuring straight away and
              delete the Google Analytics cookies. If your browser sends Global Privacy Control, we treat that as Reject
              unless you accept in Cookie settings.
            </p>
          </>
        ) : (
          <p>This website doesn't set cookies, and doesn't use analytics, advertising or tracking tools.</p>
        )}

        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> or message us on WhatsApp on {site.phone}.
        </p>
      </div>
    </div>
  );
}
