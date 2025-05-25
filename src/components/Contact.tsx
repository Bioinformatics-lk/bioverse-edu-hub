
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-24 biotech-bg relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-purple">Connect</span>{' '}
            <span className="neon-text">With Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your bioinformatics journey? Join our community of researchers, 
            scientists, and innovators shaping the future of computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="glass-card neon-border card-hover text-center">
            <CardHeader>
              <div className="text-5xl mb-4 neon-text">📧</div>
              <CardTitle className="neon-green">Email Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connect directly with our academic advisors for course guidance and enrollment support
              </p>
              <Button className="neon-button w-full">
                info@bioinformatics.lk
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card neon-border card-hover text-center">
            <CardHeader>
              <div className="text-5xl mb-4 neon-purple">📱</div>
              <CardTitle className="neon-text">Research Hotline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Speak with our research coordinators about collaboration opportunities
              </p>
              <Button className="neon-button w-full">
                +94 11 234 5678
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card neon-border card-hover text-center">
            <CardHeader>
              <div className="text-5xl mb-4 neon-green">📍</div>
              <CardTitle className="neon-purple">Innovation Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Visit our state-of-the-art bioinformatics laboratory in Colombo
              </p>
              <Button className="neon-button w-full">
                View Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
