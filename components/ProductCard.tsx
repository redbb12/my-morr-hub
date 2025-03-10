import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const ProductCard = ({ title, description, icon, href }: ProductCardProps) => {
  return (
    <Link 
      href={href}
      className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={(e) => {
        console.log('Clicking link to:', href);
      }}
    >
      <div className="flex flex-col items-center text-center">
        <Image src={icon} alt={title} width={64} height={64} />
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
};
