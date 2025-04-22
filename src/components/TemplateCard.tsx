import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type TemplateCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPrice?: number;
  demoUrl?: string;
  rating?: number;
  sales?: number;
  features?: string[];
  screenshots?: string[];
  technologies: string[];
};

const TemplateCard = ({ id, title, description, imageUrl, price, discountPrice, technologies }: TemplateCardProps) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background glow effect on hover */}
      <motion.div 
        className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-xl opacity-0 -z-10 transition-opacity duration-300"
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
      />
      
      <motion.div 
        className="glass-effect rounded-2xl overflow-hidden border border-foreground-dark/10 shadow-xl transition-all duration-300"
        whileHover={{ 
          y: -8,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Link href={`/template/${id}`} className="block group">
          <div className="relative h-52 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full"
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/60 to-transparent"></div>
            
            <motion.div 
              className="absolute bottom-0 left-0 p-4 right-0"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2 flex-wrap">
                {technologies.slice(0, 3).map((tech) => (
                  <motion.span
                    key={tech}
                    className="glass-effect text-xs text-white px-2 py-0.5 rounded-full bg-accent/20 border border-accent/20 backdrop-blur-md"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(77, 192, 255, 0.3)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {technologies.length > 3 && (
                  <span className="text-xs text-white/70 px-2 py-0.5">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>

            {discountPrice && (
              <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg transform rotate-2">
                -{Math.round(((price - discountPrice) / price) * 100)}%
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="text-foreground-dark/80 text-sm mb-4 line-clamp-2">{description}</p>
            
            <div className="flex justify-between items-center">
              <div>
                {discountPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-white font-semibold">{discountPrice.toFixed(2)} €</span>
                    <span className="ml-2 text-foreground-dark/70 line-through text-xs">{price.toFixed(2)} €</span>
                  </div>
                ) : (
                  <span className="text-white font-semibold">{price.toFixed(2)} €</span>
                )}
              </div>
              
              <motion.span
                className="text-accent flex items-center text-sm font-medium"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Voir détails
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default TemplateCard;