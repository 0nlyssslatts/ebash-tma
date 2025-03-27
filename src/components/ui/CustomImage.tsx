// import { urlFor } from '@/lib/utils/image-url';

export function CustomImage({ src, description }: { src: string; description: string }) {
  return (
    <div className="relative overflow-hidden bg-gray-200 rounded-lg flex-grow">
      <img src={src} alt={description} className="object-cover w-full h-full" />
    </div>
  );
}
