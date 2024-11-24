const Contact = () => {
    return (
      <section id="contact" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">We had love to hear from you! Reach out to us anytime.</p>
          <form className="space-y-4 max-w-lg mx-auto">
            {/* Name input field */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            
            {/* Email input field */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            
            {/* Message textarea field */}
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="5"
              required
            ></textarea>
            
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  