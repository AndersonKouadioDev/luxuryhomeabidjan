import Image from "next/image"

export default function LogoShowcase() {
  const partners = [
    { name: "Orange", logo: "/assets/images/illustrations/page-accueil/logo1.png" },
    { name: "MTN", logo: "/assets/images/illustrations/page-accueil/logo2.png" },
    { name: "CIE", logo: "/assets/images/illustrations/page-accueil/logo3.png" },
    { name: "ACI", logo: "/assets/images/illustrations/page-accueil/logo4.png" },
    { name: "NSIA", logo: "/assets/images/illustrations/page-accueil/logo5.png" },
    { name: "ISSIS", logo: "/assets/images/illustrations/page-accueil/logo6.png" },
    { name: "LHA", logo: "/assets/images/illustrations/page-accueil/logo7.png" },
  ]

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Ils nous ont fait confiance</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={60}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

