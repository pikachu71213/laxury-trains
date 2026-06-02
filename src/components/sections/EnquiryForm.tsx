import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheckCircle, FiSend } from 'react-icons/fi'
import { z } from 'zod'
import {
  budgetRanges,
  cabinTypes,
  countries,
} from '../../data/constants'
import { trainOptions } from '../../data/trains'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'
import { TrustBadges } from '../ui/TrustBadges'

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(1, 'Please select your country'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  preferredTrain: z.string().min(1, 'Please select a luxury train'),
  travelDate: z.string().min(1, 'Please select a tentative travel date'),
  travelers: z.number().min(1, 'At least 1 traveler required').max(50),
  travelDuration: z.string().optional(),
  cabinType: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().optional(),
  visaAssistance: z.boolean(),
  hotelBooking: z.boolean(),
  airportTransfers: z.boolean(),
  fullTourPackage: z.boolean(),
})

type EnquiryFormData = z.infer<typeof enquirySchema>

const defaultValues: EnquiryFormData = {
  fullName: '',
  email: '',
  country: '',
  phone: '',
  preferredTrain: '',
  travelDate: '',
  travelers: 2,
  travelDuration: '',
  cabinType: '',
  budgetRange: '',
  message: '',
  visaAssistance: false,
  hotelBooking: false,
  airportTransfers: false,
  fullTourPackage: false,
}

const inputClass =
  'w-full rounded-sm border border-beige-dark bg-white px-4 py-3 font-sans text-navy placeholder:text-navy/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'
const labelClass = 'mb-2 block font-sans text-sm font-medium text-navy'
const errorClass = 'mt-1 font-sans text-xs text-red-600'

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
      {error && <p className={errorClass} role="alert">{error}</p>}
    </div>
  )
}

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues,
  })

  const onSubmit = async (data: EnquiryFormData) => {
    // Prepared for future backend integration
    console.log('Enquiry submission:', data)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    reset(defaultValues)
  }

  return (
    <section id="enquiry" className="bg-white py-24 md:py-32" aria-labelledby="enquiry-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Your Quote"
          title="Request Your Personalized Luxury Train Quote"
          subtitle="Complete the form below and our specialists will craft a bespoke itinerary within 24 hours—at no obligation."
        />

        <div className="mb-10 rounded-sm border border-beige-dark bg-beige p-6">
          <TrustBadges compact />
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-sm border border-gold/30 bg-beige p-12 text-center"
            >
              <FiCheckCircle className="mx-auto h-16 w-16 text-gold" aria-hidden />
              <h3 className="mt-6 font-serif text-3xl font-semibold text-navy">
                Thank You for Your Enquiry
              </h3>
              <p className="mx-auto mt-4 max-w-md font-sans text-navy/70">
                Our luxury train specialists will review your requirements and respond
                within 24 hours with a personalized quote and itinerary recommendations.
              </p>
              <Button
                className="mt-8"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Enquiry
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 rounded-sm border border-beige-dark bg-beige p-8 md:p-12"
              noValidate
            >
              {/* Personal Information */}
              <fieldset>
                <legend className="mb-6 font-serif text-2xl font-semibold text-navy">
                  Personal Information
                </legend>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="Full Name" required error={errors.fullName?.message}>
                    <input
                      {...register('fullName')}
                      type="text"
                      autoComplete="name"
                      className={inputClass}
                      placeholder="John Smith"
                    />
                  </FormField>
                  <FormField label="Email" required error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </FormField>
                  <FormField label="Country" required error={errors.country?.message}>
                    <select {...register('country')} className={inputClass}>
                      <option value="">Select your country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Phone Number" required error={errors.phone?.message}>
                    <input
                      {...register('phone')}
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="+1 555 000 0000"
                    />
                  </FormField>
                </div>
              </fieldset>

              {/* Travel Information */}
              <fieldset>
                <legend className="mb-6 font-serif text-2xl font-semibold text-navy">
                  Travel Information
                </legend>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Preferred Luxury Train"
                    required
                    error={errors.preferredTrain?.message}
                  >
                    <select {...register('preferredTrain')} className={inputClass}>
                      <option value="">Select a train</option>
                      {trainOptions.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField
                    label="Tentative Travel Date"
                    required
                    error={errors.travelDate?.message}
                  >
                    <input
                      {...register('travelDate')}
                      type="date"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField
                    label="Number of Travelers"
                    required
                    error={errors.travelers?.message}
                  >
                    <input
                      {...register('travelers', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Travel Duration" error={errors.travelDuration?.message}>
                    <input
                      {...register('travelDuration')}
                      type="text"
                      className={inputClass}
                      placeholder="e.g. 7 nights / 8 days"
                    />
                  </FormField>
                </div>
              </fieldset>

              {/* Accommodation */}
              <fieldset>
                <legend className="mb-6 font-serif text-2xl font-semibold text-navy">
                  Accommodation Preferences
                </legend>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="Cabin Type" error={errors.cabinType?.message}>
                    <select {...register('cabinType')} className={inputClass}>
                      <option value="">Select cabin type</option>
                      {cabinTypes.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Budget Range" error={errors.budgetRange?.message}>
                    <select {...register('budgetRange')} className={inputClass}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>
              </fieldset>

              {/* Additional */}
              <fieldset>
                <legend className="mb-6 font-serif text-2xl font-semibold text-navy">
                  Additional Information
                </legend>
                <FormField label="Message / Requirements" error={errors.message?.message}>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us about your travel preferences, dietary requirements, accessibility needs, or any special requests..."
                  />
                </FormField>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { name: 'visaAssistance' as const, label: 'Need Visa Assistance' },
                    { name: 'hotelBooking' as const, label: 'Need Hotel Booking' },
                    { name: 'airportTransfers' as const, label: 'Need Airport Transfers' },
                    { name: 'fullTourPackage' as const, label: 'Need Full India Tour Package' },
                  ].map(({ name, label }) => (
                    <label
                      key={name}
                      className="flex cursor-pointer items-center gap-3 rounded-sm border border-beige-dark bg-white px-4 py-3 transition-colors hover:border-gold/50"
                    >
                      <input
                        type="checkbox"
                        {...register(name)}
                        className="h-4 w-4 rounded border-beige-dark text-gold focus:ring-gold"
                      />
                      <span className="font-sans text-sm text-navy">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Get My Personalized Luxury Train Quote
                    <FiSend className="h-5 w-5" aria-hidden />
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
