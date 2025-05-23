import type {Props} from '@/lib/interfaces'
import {Check} from 'lucide-react'

const Card = ({data}: {data: Props}) => {
  return (
    <div
      className={`relative h-[550px] border rounded-lg transition-all duration-200 hover:shadow-lg flex flex-col justify-between ${
        data.isPopular ? 'border-primary bg-primary/5' : 'border-gray-200'
      }`}
    >
      {/* Popular badge */}
      {/* {data.isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 z-10">
          <div className="bg-black rounded-full px-3 text-white">Popular</div>
        </div>
      )} */}

      <div className="p-6 pb-[100px]">
        {/* Header */}
        <div className="pb-6">
          {data?.planType && (
            <h3 className="text-2xl font-bold">{data.planType}</h3>
          )}
          <div className="mt-4 flex items-baseline">
            {data?.title && (
              <span className="text-5xl font-extrabold tracking-tight">
                {data.title}
              </span>
            )}
            <span className="ml-2 text-gray-500">per user, per month</span>
          </div>
        </div>

        {/* Description + Features */}
        <div>
          {data?.description && <p className="mb-6">{data.description}</p>}
          {data?.features && data.features.length > 0 && (
            <ul className="space-y-3">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="absolute bottom-5 left-0 w-full px-6">
        {data?.idealFor && (
          <p className="text-sm text-gray-500 mb-2 text-center">
            {data.idealFor}
          </p>
        )}
        <button
          className={`w-full py-3 px-4 text-center rounded-md font-medium transition-colors ${
            data.isPopular
              ? 'bg-black text-white hover:bg-primary/90'
              : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Start My 15-day Trial
        </button>
      </div>
    </div>
  )
}

export default Card
