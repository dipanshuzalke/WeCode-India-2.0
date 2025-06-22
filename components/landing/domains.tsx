import { GlowCard } from "@/components/ui/spotlight-card";
import { Code, Database, Globe, Smartphone, Server, Brain } from "lucide-react";

const TechnologyDomains = () => {
  return (
    <section id="technology-domains" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Technology Domains
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your specialization path with curated resources and projects for each technology domain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <GlowCard className="flex flex-col items-center justify-center" glowColor="blue" customSize>
            <Code className="h-16 w-16 text-blue-500 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Master React, Vue, Angular and modern frontend frameworks
            </p>
          </GlowCard>

          <GlowCard className="flex flex-col items-center justify-center" glowColor="green" customSize>
            <Server className="h-16 w-16 text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Build scalable APIs with Node.js, Python, and cloud services
            </p>
          </GlowCard>

          <GlowCard className="flex flex-col items-center justify-center" glowColor="purple" customSize>
            <Database className="h-16 w-16 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Database & Storage</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Design and optimize databases with SQL, NoSQL, and caching
            </p>
          </GlowCard>

          <GlowCard className="flex flex-col items-center justify-center" glowColor="red" customSize>
            <Smartphone className="h-16 w-16 text-pink-600 dark:text-pink-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Create native and cross-platform mobile applications
            </p>
          </GlowCard>

          <GlowCard className="flex flex-col items-center justify-center" glowColor="blue" customSize>
            <Globe className="h-16 w-16 text-cyan-600 dark:text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DevOps & Cloud</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Deploy and scale applications with AWS, Docker, and Kubernetes
            </p>
          </GlowCard>

          <GlowCard className="flex flex-col items-center justify-center" glowColor="orange" customSize>
            <Brain className="h-16 w-16 text-orange-600 dark:text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              Integrate AI models and build intelligent applications
            </p>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default TechnologyDomains;