import React from "react";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import DomainCard from "./DomainCard";
import { domains } from "@/data/domains";

const DomainsSection = () => {
  const router = useRouter();
  const domainsRef = React.useRef(null);
  const isDomainsInView = useInView(domainsRef, { once: true, amount: 0.1 });

  return (
    <section ref={domainsRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Explore Technology Domains
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your specialization path with curated resources and projects
            for each technology domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <DomainCard
              key={index}
              domain={domain}
              index={index}
              isInView={isDomainsInView}
              onClick={() => router.push(domain.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;