import type {Offer, Props} from '@/lib/interfaces'
import Card from './card'
import Pricing_Blue from '@/assets/PricingBlue.png'
import Image from 'next/image'
import Vector_logo from '@/assets/Vector 4.png'
import MostPrefered from '@/assets/most preferred.png'

const dummyData: Props[] = [
  {
    planType: 'Starter plan',
    title: '$99',
    description: `Starter Plan gives you the essential tools to manage your finances with ease`,
    idealFor: 'Perfect for small businesses or startup',
    features: [
      'Basic financial reporting',
      'Up to 5 user accounts',
      '24/7 email support',
    ],
  },
  {
    planType: 'Basic plan',
    title: '$199',
    description: `Starter Plan gives you the essential tools to manage your finances with ease`,
    idealFor: 'Perfect for small businesses or startup',
    isPopular: true,
    features: [
      'Advanced financial reporting',
      'Up to 20 user accounts',
      'Priority email support',
      'Basic integrations',
    ],
  },
  {
    planType: 'Premium plan',
    title: '$399',
    description: `The Basic Plan expands on our Starter package with additional features and integrations.`,
    idealFor: 'Designed for growing businesses',
    features: [
      'Comprehensive financial suite',
      'Unlimited user accounts',
      '24/7 phone & email support',
      'Advanced integrations',
      'Custom reporting tools',
    ],
  },
]

const Offers: Offer[] = [
  {offer: 'Free 15-day trial'},
  {offer: 'Unlimited Team Members'},
  {offer: 'Cancel Anytime'},
]

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Simple, transparent pricing
          </h2>
          <div className="flex items-center justify-center gap-8">
            {Offers.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <Image src={Pricing_Blue} alt="Pricing_Blue" />
                <h1>{item?.offer}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40">
          <div className="grid md:grid-cols-3 gap-8 ">
            {dummyData.map((item, index) => (
              <div className="relative">
                {index === 1 && (
                  <div className="absolute -top-18">
                    <Image
                      src={MostPrefered}
                      alt="mot-prefered"
                      width={150}
                      height={24}
                      className="-ml-10"
                    />
                    <Image
                      src={Vector_logo}
                      alt="vetor"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                <Card key={index} data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
