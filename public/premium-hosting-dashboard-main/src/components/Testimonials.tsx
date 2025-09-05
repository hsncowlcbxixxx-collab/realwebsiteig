
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Server Owner",
      rating: 5,
      comment: "I've tried a couple of other hosting companies & loved the GTA way that you made the VPS. Outstanding performance and support!",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson", 
      role: "Game Developer",
      rating: 5,
      comment: "Best Servers!",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "Community Manager", 
      rating: 5,
      comment: "Bro is this real? Speeds like this mean the world to me. VPS is a success!",
      avatar: "MR"
    },
    {
      name: "Lisa Wong",
      role: "Server Admin",
      rating: 5,
      comment: "Best Speed",
      avatar: "LW"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-medium text-orange-400">Trusted Reviews</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-orange-500">Users Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust YourHost for their hosting needs. 
            Experience the fastest Minecraft hosting and highest quality VPS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Read More Testimonials
          </button>
          <p className="text-gray-400 text-sm mt-4">See All Reviews on Trustpilot →</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
