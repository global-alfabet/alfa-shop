import { site } from "../config.js";
import { openCookieSettings } from "../lib/consent.js";
import MetaPixelNotice from "../components/MetaPixelNotice.jsx";

// What Alfa Shop actually does. The cookie part follows src/config.js: Google Analytics only when a measurement ID is
// set, and the Meta Pixel (legal's draft wording, for Julius to approve) only when a pixel ID is set.
export default function Privacy() {
  const ga = !!site.analytics.ga4;
  const ads = !!site.analytics.metaPixel;
  return (
    <div className="page">
      <div className="container narrow prose">
        <h1>Privacy</h1>
        <p className="lead">
          Alfa Shop asks you for nothing. There are no accounts or forms
          {ads
            ? ", and analytics and advertising cookies are set only if you allow them."
            : ga
              ? ", and analytics cookies are set only if you accept."
              : ", and no cookies or tracking."}
          {site.analytics.cloudflare ? " We count visits without cookies." : ""}
        </p>

        <h2>Ordering</h2>
        <p>
          When you tap Order now, WhatsApp opens with a message we've written for you. Nothing is sent until you send
          it. The message, your WhatsApp name and your number then reach {site.parent.name}, and we use them to handle
          your order and answer your questions.
        </p>
        <p>WhatsApp's own privacy policy covers how WhatsApp handles the messages it carries.</p>

        <h2>This website</h2>
        <p>
          The site is a set of pages hosted by Netlify. Like any web host, Netlify keeps short-lived server logs (such
          as IP addresses) to run and protect the service.
          {ads
            ? " If you allow advertising cookies, we also use the Meta Pixel (see Cookies below)."
            : " We don't add advertising tools."}
        </p>

        <h2 id="cookies">{ads ? "Cookies, analytics and advertising" : "Cookies and analytics"}</h2>
        {site.analytics.cloudflare && (
          <p>
            <b>Visit counts, without cookies:</b> we use Cloudflare Web Analytics to count visits, whatever you choose
            on the cookie banner. It sets no cookies, stores nothing on your device and doesn't follow you to other
            websites. It records the page address you open, the site you came from, your country, your type of device
            and browser, and how fast the page loaded. Cloudflare does this for us and may process it outside your
            country.
          </p>
        )}
        {ga || ads ? (
          <>
            {ga && (
              <p>
                We use Google Analytics to count visits and see which pages help people, but only if you
                {ads ? " allow analytics" : " press Accept"} on the cookie banner. Until then Google's code isn't loaded
                and no analytics cookies are set.
              </p>
            )}
            <ul>
              {ga &&
                (ads ? (
                  <li>
                    <b>ga_consent</b> remembers your answer about analytics. It's needed for the banner to work, so it's
                    set either way. It lasts 6 months, then we ask again. It's set for globalalfabet.com, so one answer
                    covers all Global Alfabet sites, including Alfa Maps and Alfa Finda.
                  </li>
                ) : (
                  <li>
                    <b>ga_consent</b> remembers your answer (Accept or Reject). It's needed for the banner to work, so
                    it's set either way. It lasts 6 months, then we ask again. It's set for globalalfabet.com, so one
                    answer covers all Global Alfabet sites, including Alfa Maps and Alfa Finda.
                  </li>
                ))}
              {ads && (
                <li>
                  <b>ad_consent</b> remembers your answer about advertising, in the same way. It lasts 6 months and
                  covers the Global Alfabet websites.
                </li>
              )}
              {ga && (
                <li>
                  <b>_ga</b> and <b>_ga_&lt;ID&gt;</b> are Google Analytics cookies. They tell visits apart so they can
                  be counted. They're set only after you {ads ? "allow analytics" : "accept"}, and last up to 13 months.
                </li>
              )}
            </ul>
            {ga && (
              <>
                <p>
                  <b>What's measured:</b> the pages and items you open, how you arrived (for example from a search
                  engine or a link), your approximate region (worked out from your IP address, which Google Analytics
                  doesn't store), your type of device and browser, and taps on our order, email and WhatsApp links, our
                  main buttons and links to our other sites. We never send Google your name, email, phone number or
                  what's in your order message. Google signals and advertising features are off.
                </p>
                <p>
                  Google processes this data for us as our processor, under its data processing terms, and may process
                  it outside your country. We keep the reports for no longer than 14 months.
                </p>
              </>
            )}
            {ads && (
              <MetaPixelNotice
                receives="the address of each page you open on this website (which items you look at), the page you came from, your IP address, details of your device and browser, and an ID kept in a cookie (_fbp). We don't tell Meta when you tap Order now, and we never send it your name, phone number or your order message. If you're signed in to Facebook or Instagram in the same browser, Meta can link the visit to your account. We've switched off Meta's automatic collection of button clicks and page details."
                why="to see whether our ads on Facebook and Instagram bring people to Alfa Shop, and to show our ads again to people who have visited, on Facebook, Instagram and other apps where Meta shows ads."
              />
            )}
            <p>
              <b>Changing your mind:</b> choose{" "}
              <button type="button" className="inline-link" onClick={openCookieSettings}>
                Cookie settings
              </button>{" "}
              {ads
                ? "(also at the bottom of every page). You can switch analytics and advertising on or off separately. If you turn either off, we stop straight away and delete its cookies from our site (Google Analytics: _ga; Meta: _fbp and _fbc). What Meta already received stays with Meta under its policy. If your browser sends Global Privacy Control, we treat that as no to both, unless you allow them in Cookie settings."
                : "(also at the bottom of every page). If you reject after accepting, we stop measuring straight away and delete the Google Analytics cookies. If your browser sends Global Privacy Control, we treat that as Reject unless you accept in Cookie settings."}
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
