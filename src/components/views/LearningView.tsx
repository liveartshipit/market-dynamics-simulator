import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpenIcon, VideoIcon, FileTextIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function LearningView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Learning Hub</h1>
        <p className="text-muted-foreground">Explore educational resources on market dynamics and economics</p>
      </div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="articles" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <FileTextIcon className="h-4 w-4 mr-2" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <VideoIcon className="h-4 w-4 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="quick-reads" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            Quick Reads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-card text-card-foreground border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">Price Elasticity of Demand</h2>
              <div className="aspect-video w-full bg-muted rounded-lg mb-4">
                <iframe
                  src="https://www.investopedia.com/terms/p/priceelasticity.asp"
                  className="w-full h-full rounded-lg"
                  title="Investopedia - Price Elasticity"
                  loading="lazy"
                />
              </div>
              <p className="text-muted-foreground">
                Learn how price changes affect consumer demand and understand the concept of elasticity in markets.
              </p>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-card text-card-foreground border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">MIT OpenCourseWare: Microeconomics</h2>
              <div className="aspect-video w-full bg-muted rounded-lg mb-4">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLUl4u3cNGP62oJSoqb4Rf-vZMGUBe59G-"
                  className="w-full h-full rounded-lg"
                  title="MIT OCW - Microeconomics"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <p className="text-muted-foreground">
                Comprehensive video lectures on microeconomic principles from MIT's renowned economics program.
              </p>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="quick-reads" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="p-6 bg-card text-card-foreground border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-bold mb-3 text-foreground">Market Equilibrium Basics</h3>
              <p className="text-muted-foreground mb-4">
                Understanding how supply and demand curves intersect to determine market prices and quantities.
              </p>
              <p className="text-sm text-foreground">
                Market equilibrium occurs when the quantity supplied equals the quantity demanded at a specific price point. 
                This balance is dynamic and shifts based on various economic factors.
              </p>
            </Card>

            <Card className="p-6 bg-card text-card-foreground border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-bold mb-3 text-foreground">Supply and Demand Shifts</h3>
              <p className="text-muted-foreground mb-4">
                Learn what causes supply and demand curves to shift and how it affects market outcomes.
              </p>
              <p className="text-sm text-foreground">
                External factors like consumer preferences, production costs, and market competition can shift 
                supply and demand curves, leading to new equilibrium points.
              </p>
            </Card>

            <Card className="p-6 bg-card text-card-foreground border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-bold mb-3 text-foreground">Elasticity in Practice</h3>
              <p className="text-muted-foreground mb-4">
                Real-world examples of elastic and inelastic goods and their pricing strategies.
              </p>
              <p className="text-sm text-foreground">
                Luxury goods tend to be elastic (sensitive to price changes), while necessities like food and 
                medicine are typically inelastic (less sensitive to price changes).
              </p>
            </Card>

            <Card className="p-6 bg-card text-card-foreground border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-bold mb-3 text-foreground">Pricing for Startups</h3>
              <p className="text-muted-foreground mb-4">
                Strategic pricing considerations for digital entrepreneurs and SaaS businesses.
              </p>
              <p className="text-sm text-foreground">
                Understanding your market's price elasticity helps optimize pricing strategies, maximize revenue, 
                and maintain competitive positioning in dynamic markets.
              </p>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
