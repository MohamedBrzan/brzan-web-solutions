
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border group hover:border-primary",
      className
    )}>
      <div className="mb-4 text-primary group-hover:text-accent transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
