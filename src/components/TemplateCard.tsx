import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      className="glass-effect rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Link href={`/template/${id}`} className="block group">
        <div className="relative h-48 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/40 to-transparent opacity-80"></div>
          
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
                  className="glass-effect text-xs text-white px-2 py-0.5 rounded-full"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(var(--accent-rgb), 0.15)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 3 && (
                <motion.span
                  className="glass-effect text-xs text-white px-2 py-0.5 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  +{technologies.length - 3}
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>

        <div className="p-5">
          <motion.h3
            className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2"
            initial={{ backgroundPosition: "200% 0" }}
            whileHover={{ backgroundPosition: "0% 0" }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h3>
          
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
              className="text-accent flex items-center text-sm"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              Voir détails
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TemplateCard;