
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your bioinformatics journey? Contact us for more information about our courses and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-effect border-0 shadow-lg text-center">
            <CardHeader>
              <div className="text-4xl mb-4">📧</div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get in touch for course inquiries and enrollment
              </p>
              <Button variant="outline">
                info@bioinformatics.lk
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 shadow-lg text-center">
            <CardHeader>
              <div className="text-4xl mb-4">📱</div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speak with our academic advisors
              </p>
              <Button variant="outline">
                +94 11 234 5678
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 shadow-lg text-center">
            <CardHeader>
              <div className="text-4xl mb-4">📍</div>
              <CardTitle>Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Colombo
              </p>
              <Button variant="outline">
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
