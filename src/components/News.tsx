
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      title: "New Partnership with University of Colombo",
      date: "March 15, 2024",
      description: "We're excited to announce our collaboration with the Faculty of Medicine, University of Colombo, to advance bioinformatics education in Sri Lanka.",
      image: "🏛️"
    },
    {
      title: "AI Workshop Series Launched",
      date: "March 10, 2024",
      description: "Join our comprehensive workshop series on artificial intelligence applications in drug discovery and molecular biology.",
      image: "🤖"
    },
    {
      title: "Student Research Publication",
      date: "March 5, 2024",
      description: "Congratulations to our students whose research on protein folding prediction has been published in a leading bioinformatics journal.",
      image: "📊"
    }
  ];

  const collaborations = [
    { name: "University of Colombo", logo: "🏛️" },
    { name: "SLINTEC", logo: "🔬" },
    { name: "National Science Foundation", logo: "🧪" },
    { name: "BioPharma Research Labs", logo: "💊" }
  ];

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            News & Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments and our growing network of partnerships
          </p>
        </div>

        {/* News Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{item.image}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaborations Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborations.map((partner, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">{partner.logo}</div>
                <p className="font-medium text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
