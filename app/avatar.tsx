import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <div className="flex items-center">
      <div className="mr-4 w-7 h-7">
        <ContentfulImage
          alt={name}
          className="object-cover h-full rounded-full"
          height={28}
          width={28}
          src={picture.url}
        />
      </div>
      <div className="text-xl text-gray-600 dark:text-gray-200">{name}</div>
    </div>
  );
}
