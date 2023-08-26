
function GoogleMapEmbed() {
    return (
      <iframe
        className="aspect-square object-cover rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.3674795695385!2d-111.78917535289398!3d43.81314490545258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540b05a4b7f7ed%3A0x90109c39fc23b7a4!2s649%20S%202nd%20St%20W%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1693044010526!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
    );
}
  
export default GoogleMapEmbed;