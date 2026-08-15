interface MinorCardProps {
    title: string;
    description?: string;
    href: string;
    image?: string;
    ascii?: string;
    className?: string;
}

/*
* Used for displaying minor projects with only images and hovarable text
*
*/




export function MinorCard({
                              title,
                              description,
                              href,
                              image,
                              ascii,
                              className = "",
                          }: MinorCardProps) {
    return (
        <a
            href={href}
            data-particle-layer
            className={`group relative block overflow-hidden rounded-lg bg-background ${className}`}
        >
            {ascii ? (
                <pre
                    className="flex h-48 items-center justify-center bg-black p-4 text-sm text-white"
                    draggable="false"
                    aria-hidden="true"
                >
                    {ascii}
                </pre>
            ) : (
                <img
                    src={image}
                    alt={title}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
            )}

            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-5 opacity-0 transition group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">
                    {title}
                </h3>

                {description && (
                    <p className="text-sm text-white/80">
                        {description}
                    </p>
                )}
            </div>
        </a>
    );
}
